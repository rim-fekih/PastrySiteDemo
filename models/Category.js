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

var Category = mongoose.model('Category', CategorySchema);

module.exports = Category;
