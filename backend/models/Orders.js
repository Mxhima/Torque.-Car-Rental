const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema ({
  orderID: {
    type: Number,
    require: true,
    unique: true,
  },
  order: {
    type: String,
    require: true,
  },
  order: {
    type: String,
    require: true,
  },
  orderPrice: {
    type: Number,
    require: true,
  },
})
