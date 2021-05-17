const { User } = require('../model');
const jwt = require('jsonwebtoken');
const {mongoUrl, privateKey} = require('../config');

var custId;

const create = async (req, res) => {
    console.log('create User');
  
    const {name,email,password,mobileNumber,address1,address2,city,states,zip } = req.body;
  
    let status;
    let message;
  
    try {
      const user = new User({ 
          name: name,
          email:email,
          password:password,
          mobileNumber:mobileNumber,
          address1:address1,
          address2:address2,
          city:city,
          states:states,
          zip:zip
      });
      await user.save();
      status = 200;
      message = 'User create successfully';
    } catch (err) {
      console.log('Some error occured', err);
      console.log(err.stack);
      status = 400;
      message = 'Bad request';
    }
  
    res.status(status).send({ message });
  }

  const getAllUser = async (req, res) => {
    let status;
    let message;
    try {
      
      message = await User.find();
      status = 200;
    } catch(err) {
      console.log('Some error occured', err);
      console.log(err.stack);
      status = 400;
      message = 'Bad request'
    }
    res.status(status).send({ message: message.map((user) => ({
      name: user.name,
      email:user.email,
      password:user.password,
      mobileNumber:user.mobileNumber,
      address1:user.address1,
      address2:user.address2,
      city:user.city,
      states:user.states,
      zip:user.zip

    })) });
  }

  const updateByEmailId= async(req,res)=>
  {
    console.log(req.params);
    const { email } = req.params;
    
      let status;
      let message;
      const mobileNumber =req.body.mobileNumber;
      const address1 =req.body.address1;
      const address2 =req.body.address2;
      const city =req.body.city;
      const states =req.body.states;
      const zip =req.body.zip;
      
      try 
      {
        let  user = await User.findOne({ email: email });
        if(mobileNumber)
        {
            user.mobileNumber = mobileNumber;
        }
        if(address1)
        {
            user.address1 = address1;
        }
        if(address2)
        {
            user.address2=address2;
        }
        if(city)
        {
          user.city=city;
        }
        if(states)
        {
          user.states = states;
        }
        if(zip)
        {
          user.zip=zip;
        }
        await user.save();
        status = 200;
        message = 'Update Details';
      } 
      catch(err) 
      {
        console.log('Some error occured', err);
        console.log(err.stack);
        status = 400;
        message = 'Bad request!!!'
      }
    res.status(status).send({ message });
  }

  const getByEmailId = async (req, res) => {
    console.log(req.params);
    const { email } = req.params;
  
    let status;
    let message;
  
    try {
      const user = await User.find({ email: email });
      status = 200;
      message = user;
  
    } catch(err) {
      console.log('Some error occured', err);
      console.log(err.stack);
      status = 400;
      message = 'Bad request!!!'
    }
  
    res.status(status).send({ message });
  }

  const deleteByCustID = async (req, res) => {
    console.log(req.params);
    const { email } = req.params;
  
    let status;
    let message;
  
    try {
      const user = await User.findOneAndDelete({ email:email });
      status = 200;
      message = custId+" deleted";
  
    } catch(err) {
      console.log('Some error occured', err);
      console.log(err.stack);
      status = 400;
      message = 'Bad request!!!'
    }
  
    res.status(status).send({ message });
  }

const encrypt = (t) =>t; 

const loginFunction= async (req, res) => {
  const { email, password } = req.body;
  const usersInfo = await User.find({email:email});
  console.log(usersInfo[0].password);

if (usersInfo !== null) {
  if (usersInfo[0].password === encrypt(password)) {
    token = jwt.sign({ username: email }, privateKey);
    res.status(200).send({ message: "Login Success", token , email:usersInfo[0].email, name:usersInfo[0].name})
  } else {
    res.status(401).send({ message: "Unauthorized Access"})
  }
} else {
  res.status(404).send({ message: "Not found"});
}
}


  const auth = (req, res, next) => {
    if (req.headers) {
      console.log(req.headers);
      if (req.headers.authorization) {
        const [bearer, token] = req.headers.authorization.split(" "); // Bearer <token>
        const decode = jwt.verify(token, privateKey);
        console.log(decode);
        if (decode['username']) {
          req.username = decode['username'];
          next()
        }
      }
    }
    res.status(401).send('Unauthorised from middleware');
  }
  
  module.exports = {
    create,
    getAllUser,
    getByEmailId,
    deleteByCustID,
    auth,
    loginFunction,
    updateByEmailId
  }
