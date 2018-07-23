const express= require('express');

//TODO: Proxy step 1
var path = require('path');
////////////////////
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//TODO: Proxy step 2
//see: https://www.npmjs.com/package/http-proxy-middleware
const proxy= require('http-proxy-middleware');

const options={
    target: 'http://localhost:5000/api/contact',
    changeOrigin: true
};

const exampleProxy = proxy(options);
////////////////////






const app = express();


//ROUTES
//TODO: Proxy step 3
const contact = require('./routes/api/contact');
////////////////////


//Middleware for required for body-parer
app.use(bodyParser.urlencoded({
    extended: false,
}));
app.use(bodyParser.json());

//TODO: Proxy step 4
//Middleware for required for proxy
//has to to be dir path, dont forget the routes part of the path
const myProxy = app.use('routes/api', exampleProxy);
////////////////////


//used for DB Config
const db = require('./config/keys').mongoURI;


//used to CONNECT TO MONGO DB
mongoose.connect(db)
    .then(()=>console.log('MongoDB is connected!'))
    .catch(err=>console.log(err));



app.get('/', (req, res)=>res.send('Hello Buddy'));



//use ROUTES
//TODO: Proxy step 5
app.use('/api/contact',contact );
////////////////////


const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log(`Listening on port ${port}`));
