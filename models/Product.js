const mongoose = require ('mongoose'),
Schema = mongoose.Schema


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


var Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
