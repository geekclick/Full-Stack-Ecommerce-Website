const mongoose = require('mongoose');

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

  // Inventory and Availability
//   stock: {
//     type: Number,
//     default: 0,
//   },
  available: {
    type: Boolean,
    default: false,
  },

  // Seller Information 
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },

  // Homemade Specific Attributes
  category: {
    type: String,
    required: true,
  }, 
});

module.exports = mongoose.model('Product', productSchema);
