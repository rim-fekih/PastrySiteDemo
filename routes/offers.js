const express = require ('express');

const router = express.Router();

//ROUTES
router.get('/',(req, res)=>
{
    res.send('We are on offers');
});

router.get('/specific',(req, res)=>
{
    res.send('We are on specific offers');
});
module.exports = router;