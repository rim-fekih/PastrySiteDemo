const mongoose = require ('mongoose'),
Schema = mongoose.Schema


var OfferSchema = Schema({
    _id : Schema.Types.ObjectId,
    title : String,
    description : String,
    price : Number,
    products : 
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
        { type: Schema.Types.ObjectId, ref: 'Category' },
    _offre : 
        { type: Schema.Types.ObjectId, ref: 'Offer' }
    });

var CategorySchema = Schema({
    title : String,
    description : String,
    products : 
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

