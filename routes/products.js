const express = require ('express');

const router = express.Router();

const Product = require('../models/Product');

let productCTRL = require('../controllers/productController');



//ROUTES
//router.get('/',productCTRL.GetTest1);

//router.get('/specific',productCTRL.GetTest2);


//router.post('/',productCTRL.create);

router.post('/', async (req, res) => {
    const product = new Product ({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
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
})
module.exports = router;