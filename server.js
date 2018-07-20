const express= require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


//ROUTES
const customerLeads = require('./routes/api/customer-leads');


const app = express();
//Middleware for required for body-parer
app.use(bodyParser.urlencoded({
    extended: false,
}));

app.use(bodyParser.json());


//used for DB Config
const db = require('./config/keys').mongoURI;


//used to CONNECT TO MONGO DB
mongoose.connect(db)
    .then(()=>console.log('MongoDB is connected!'))
    .catch(err=>console.log(err));



app.get('/', (req, res)=>res.send('Hello Buddy'));


//use ROUTES
app.use('/api/customer-leads', customerLeads );



const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log(`Listening on port ${port}`));
