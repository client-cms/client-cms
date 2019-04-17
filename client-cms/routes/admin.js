var express = require('express');
var router = express.Router();
const client=require('./admin/client');
const sell=require('./admin/sell');
const contract=require('./admin/contract');
const notice=require('./admin/notice');

/* GET users listing. */

router.use('/client',client);
router.use('/sell',sell);
router.use('/contract',contract);
router.use('/notice',notice);
module.exports = router;
