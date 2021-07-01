const express = require ('express');

const router = express.Router();

//ROUTES
router.get('/',(req, res)=>
{
    res.send('We are on posts');
});

router.get('/specific',(req, res)=>
{
    res.send('We are on specific posts');
});
module.exports = router;