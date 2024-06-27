const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  imgUrl1: {
    type: String,
    required: true
  },
  imgUrl2: {
    type: String,
  },
  imgUrl3: {
    type: String,
  },
  imgUrl4: {
    type: String,
  },
  imgUrl5: {
    type: String,
  },
  imgUrl6: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: null
  }
});

module.exports = new mongoose.model("product", productSchema);