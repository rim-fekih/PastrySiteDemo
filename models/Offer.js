var mongoose = require('mongoose')
, Schema = mongoose.Schema

var offerSchema = Schema({
  _id         : Schema.Types.ObjectId,
  title       : String,
  description : String,
  price       : Number,
  products    : 
  [
      { type: Schema.Types.ObjectId, ref: 'Product' } //An offer is made with 1 or more products.
  ],
  state       :
   {
    type    : String,
    enum    : ['visible','invisible'],
    default : 'invisible'
   }
});

var Offer  = mongoose.model('Offer', offerSchema);
module.exports = Offer;

