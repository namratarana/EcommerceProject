const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
  {
      email: { type: String, required: true, unique: true },
      password:{type:String,required:true},
      name:{type:String,required:true},
      mobileNumber:{type:Number,required:true},
      address1:{type:String,required:true},
      address2:{type:String},
      states:{type:String,required:true},
      city :{type:String,required:true},
      zip:{type:String}
  }, 
  {
    timestamps: true
  })

module.exports = mongoose.model('User', User);