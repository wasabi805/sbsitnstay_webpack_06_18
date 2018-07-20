const express= require('express');
const mongoose = require('mongoose');

const app = express();

//used for DB Config
const db = require('./config/keys').mongoURI;


//used to CONNECT TO MONGO DB
mongoose.connect(db)
    .then(()=>console.log('MongoDB is connected!'))
    .catch(err=>console.log(err));



app.get('/', (req, res)=>res.send('Hello Buddy'));

const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log(`Listening on port ${port}`));
