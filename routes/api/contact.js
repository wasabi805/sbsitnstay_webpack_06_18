const express = require('express');
//used for short-hand
const router = express.Router();


//Load Models
const Contact = require('../../models/CustomerLead');

//Loads form input validation
const validateContactsInput = require('../../validation/contacts');



//----- ------  ------  -----   -----   ------  ------  ------
//@route    GET api/customer-leads/test
//@desc     Tests connection for customer-leads route
//@access   PUBIC

router.get('/test', (req,res)=>res.json({msg : 'TEST : customer-leads route SUCCESS!'}));
// router.get('/test', (req,res)=> console.log(res, 'this is the from /test : cust-leads'));


router.get('/', (req,res)=> res.json({msg: 'Get handle for /api/contact '}));





//----- ------  ------  -----   -----   ------  ------  ------
//@route    POST api/customer-leads/inquiry
//@desc     submits contact form data for potential clients
//@access   PUBIC

router.post('/', (req,res)=>{

    console.log(req, 'this is set from the form : log frm api/customer-leads.js');

    //deconstruct for any errors : pass in req.body for ALL the data from form submit.
    const {errors, isValid} = validateContactsInput(req.body);
    console.log(isValid, 'check to see if form made it to back end');

    //initial check upon form submit/ if is-Valid returns false: is anything empty or in the wrong data format
    if(!isValid){
        return res.status(400).json(errors);
    }
    else{
        //enter a new lead
        const newCustomerLead = new Contact({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone,
            comments: req.body.comments,
        });

        newCustomerLead.save()
            .then(lead=>res.json(lead))
            .catch(err=>console.log(err, 'ERROR from customer-leads: inquiry'));

    }

});



module.exports= router;
