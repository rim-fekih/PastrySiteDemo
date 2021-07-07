var mongoose = require('mongoose')
, Schema = mongoose.Schema

var categorySchema = Schema({
  _id         : Schema.Types.ObjectId,
  title       : String,
  description : String,
  products    : 
  [
      { type: Schema.Types.ObjectId, ref: 'Product' } // a category has 1 or multiple products.
  ]
});

var Category  = mongoose.model('Category', categorySchema);

module.exports = Category;
