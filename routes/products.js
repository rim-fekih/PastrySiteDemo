const express = require ('express');

const router = express.Router();

//ROUTES
router.get('/',(req, res)=>
{
    res.send('We are on products');
});

router.get('/specific',(req, res)=>
{
    res.send('We are on specific products');
});
module.exports = router;