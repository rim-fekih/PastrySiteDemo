const mongoose = require ('mongoose'),
Schema = mongoose.Schema


var OfferSchema = Schema({
    _id : Schema.Types.ObjectId,
    title : String,
    description : String,
    price : Number,
    products : // ==> one offer has 1 or more products in it 
        [
            { 
                type: Schema.Types.ObjectId,
                ref : 'Product'
            }
        ],
    state :
    {
        type : String,
        enum : ['visible', 'invisible'],
        default : 'invisible'
    } 
});

var Offer  = mongoose.model('Offer', OfferSchema);

module.exports = Offer;

