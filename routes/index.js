var express = require('express');
var router = express.Router();
var path = require('path');


//sendFile HAS TO BE an absolute path
//https://stackoverflow.com/a/25463996/7857134

/* GET home page. */

//gets the index from theme as ref
// router.get('/', (req, res)=> {
//   res.sendFile(path.join(__dirname, '../public/theme', 'index.html'));});

// router.get('/', (req, res)=>{
//   res.json({msg: 'localhost5000'})
// });





module.exports = router;
