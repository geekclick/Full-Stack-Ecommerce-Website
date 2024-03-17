const mongoose = require('mongoose');
const categoryEnum = ['Paintings & Art', 'Marble & Stone Craft', 'Metal Craft', 'Home & Kitchen', 'Jewelry Craft']
const productSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  images: {
    type: [String],
    required: false,
  },

  available: {
    type: Boolean,
    default: false,
  },

  category: {
    type: String, enum: categoryEnum, required: true
  },
});

module.exports = mongoose.model('Product', productSchema);
