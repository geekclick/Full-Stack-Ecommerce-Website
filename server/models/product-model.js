const mongoose = require('mongoose');
const categoryEnum = ['Electronics', 'Clothing', 'Books', 'Home & Kitchen']
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
 
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },

  // Homemade Specific Attributes
  category: {
    type: String, enum: categoryEnum, required: true
  }, 
});

module.exports = mongoose.model('Product', productSchema);
