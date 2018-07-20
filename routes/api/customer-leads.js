const express = require('express');
//used for short-hand
const router = express.Router();


//Load Models
const CustomerLead = require('../../models/CustomerLead');




//----- ------  ------  -----   -----   ------  ------  ------
//@route    GET api/customer-leads/test
//@desc     Tests connection for customer-leads route
//@access   PUBIC

router.get('/test', (req,res)=>res.json({msg : 'TEST : customer-leads route SUCCESS!'}));



//----- ------  ------  -----   -----   ------  ------  ------
//@route    POST api/customer-leads/inquiry
//@desc     submits contact form data for potential clients
//@access   PUBIC

router.post('/inquiry', (req,res)=>{
    //check if lead exists
    CustomerLead.findOne({email: req.body.email})
        .then(lead=>{
            if(lead){
                return res.status(400).json({
                    email: 'Email already exists.'
                })
            }
            else{
                //enter a new lead
                const newCustomerLead = new CustomerLead({
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
        })
});



module.exports= router;
