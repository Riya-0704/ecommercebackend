/*const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  img: [String],  // allow multiple images
  category: String,
  rating: Number,
  productId: { type: String, unique: true }, // Added productId field
  inStockValue: Number, // Available stock value
  soldStockValue: Number, // Number of items sold
  visibility: { type: String, default: 'on' } // Visibility field with default 'on'
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
*/

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  img: { type: [String], default: [] }, // Updated: Default to an empty array
  category: { type: String, required: true },
  rating: { type: Number, default: 0 },
  productId: { type: String, unique: true, required: true },
  inStockValue: { type: Number, default: 0 },
  soldStockValue: { type: Number, default: 0 },
  visibility: { type: String, enum: ["on", "off"], default: "on" }, // Enum validation
});

module.exports = mongoose.model("Product", productSchema);
