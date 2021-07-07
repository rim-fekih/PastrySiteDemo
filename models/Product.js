var mongoose = require('mongoose')
, Schema = mongoose.Schema

var productSchema = Schema({
  _id         : Schema.Types.ObjectId,
  title       : String,
  description : String,
  price       : Number,
  _category   : {type: Schema.Types.ObjectId, ref: 'Category' }, //one product belongs to a category.
  _offer      : {type: Schema.Types.ObjectId, ref: 'Offer' },   //a product can be in an offer.
  exp_Date    : Date
});

var Product  = mongoose.model('Product', productSchema);

module.exports = Product;
