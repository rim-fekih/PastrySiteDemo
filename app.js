const express = require('express');
const mongoose = require ('mongoose');
const app = express();
require('dotenv/config')

//Import routes 
const postsRoutes = require ('./routes/posts');
app.use('/posts', postsRoutes);

//Port Listenner
app.listen(3000);

app.get('/', (req,res) =>
{
    res.send('<h2>we are on home </h2>');
});

//connect to DB
mongoose.connect(
    process.env.DB_CONNNECTION,
    { useNewUrlParser: true },
    ()=> { console.log('connected to DB! '); }
);