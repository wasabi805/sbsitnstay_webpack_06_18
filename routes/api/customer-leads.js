const express = require('express');

//used for short-hand
const router = express.Router();





//@route    GET api/customer-leads/test
//@desc     Tests connection for customer-leads route
//@access   PUBIC

router.get('/test', (req,res)=>res.json({msg : 'TEST : customer-leads route SUCCESS!'}));




module.exports= router;
