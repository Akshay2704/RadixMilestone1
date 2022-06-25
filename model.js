const mongoose = require('mongoose');
  
const orderSchema = new mongoose.Schema({
    _id: Number,
    customerId: Number,
    itemName: String
})
  
const customerSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    city: String
})
  
const Order = new mongoose.model('order', orderSchema);
const Customer = new mongoose.model('customer', customerSchema);
  
module.exports = { Order, Customer };