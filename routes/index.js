var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req,res) =>{
   return res.json(' Hello Mr Ndife')
});

module.exports = router;
