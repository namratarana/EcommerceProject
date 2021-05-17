const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
  Id:{type:Number,required:true,unique:true},
  Name: { type: String, required: true },
  Price: {  type:Number, required: true },
  Description: { type: String, required: true  },
  Image:{ type: String, required: true }

}, {
  timestamps: true
})

module.exports = mongoose.model('product', Product);