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

var ProductSchema = Schema({
    title : String,
    description : String,
    price : Number,
    exp_date : Date,
    _category : 
        { type: Schema.Types.ObjectId, ref: 'Category' }, // ==> a product belons to a category.
    _offre : 
        { type: Schema.Types.ObjectId, ref: 'Offer' } // ==> a product could be linked with an offer.
    });

var CategorySchema = Schema({
    title : String,
    description : String,
    products : // ==> a category have a list of products.
        [
            { 
                type: Schema.Types.ObjectId,
                ref : 'Product'
            }
        ]
})

var Offer  = mongoose.model('Offer', OfferSchema);
var Product = mongoose.model('Product', ProductSchema);
var Category = mongoose.model('Category', CategorySchema);

