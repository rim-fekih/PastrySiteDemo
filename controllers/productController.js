

const { Mongoose } = require('mongoose');
let Product = require('../models/Product');

//Create and save new product
/*
exports.create = async (req, res) => {
    // Create product
    const product = new Product({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        _category:req.body._category,
        _offer: req.body._offer,
        exp_Date: req.body.exp_Date
    });
    // Save product in the database
    try{
        const savedProduct = await product.save();
        res.json(savedProduct);
    }
    catch(err){
        res.json({message : err.message});
    }
   
};


exports.GetTest1 = (req, res) => {

    res.send('We are on products');
};

exports.GetTest2 = (req, res) => {

    res.send('We are on specific products');
};
*/