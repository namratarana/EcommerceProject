const { Product } = require('../model');
const config = require('../config');

const create = async (req, res) => {
  console.log('Create Product data');

  const { Id,Name,Description,Image,Price } = req.body;

  let status;
  let Message;

  try {
    const product = new Product({ Id,Name,Description,Image,Price  });
    await product.save();
    status = 200;
    Message = 'Product saved';
  } catch (err) {
    console.log('Error', err);
    console.log(err.stack);
    status = 400;
    Message = 'Bad request';
  }

  res.status(status).send({ Message });
}

const deleteById= async(req,res)=>{
  console.log(req.params);
  const { id } = req.params;
  
let status;
let message;

try {
  const prod = await Product.deleteOne({ Id: id });
  status = 200;
  message = 'deleted data';

} catch(err) {
  console.log('Some error occured', err);
  console.log(err.stack);
  status = 400;
  message = 'Bad request!!!'
}
res.status(status).send({ message });
}

const getById = async (req, res) => {
  console.log(req.params);
  const { id } = req.params;

  let status;
  let message;

  try {
    const prod = await Product.find({ Id: id });
    status = 200;
    message = prod;

  } catch(err) {
    console.log('Some error occured', err);
    console.log(err.stack);
    status = 400;
    message = 'Bad request!!!'
  }

  res.status(status).send({ message });
}

const getAll = async (req, res) => {
    let status;
    let message;
  
    const { filterByName } = req.query;
    
    console.log(filterByName);
    try {
      const query = {};
      if (filterByName) {
        query['Name'] = filterByName;
      }
      message = await Product.find(query);
      status = 200;
    } catch(err) {
      console.log('Some error occured', err);
      console.log(err.stack);
      status = 400;
      message = 'Bad request'
    }
    
    res.status(status).send({ products: message.map((prod) => ({
      Id: prod.Id,
      Name: prod.Name,
      Description: prod.Description,
      Image: prod.Image,
      Price: prod.Price
    })) });
  }
 
  module.exports = {
    create,
    getAll,
    deleteById,
    getById
  }
