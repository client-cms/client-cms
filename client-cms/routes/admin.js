var express = require('express');
var router = express.Router();
const client=require('./admin/client');

/* GET users listing. */

router.use('/client',client);
module.exports = router;
