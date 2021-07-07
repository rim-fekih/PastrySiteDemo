const express = require ('express');

const router = express.Router();

//ROUTES
router.get('/',(req, res)=>
{
    res.send('We are on categories');
});

router.get('/specific',(req, res)=>
{
    res.send('We are on specific categories');
});
module.exports = router;