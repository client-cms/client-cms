var express = require('express');
var router = express.Router();
let mysql=require('../../lib/mysql');
router.post('/',async (req,res)=>{
    let data=req.body;
    let keys=Object.keys(data);
    let sql='insert into sell ('
    keys.forEach(ele=>{
        sql+=`${ele},`;
    })
    sql=sql.slice(0,-1)+') value (';
    for(let i in data){
        sql+=`'${data[i]}',`;
    }
    sql=sql.slice(0,-1)+')';
    let result=await mysql(sql);
    if(result.affectedRows){
        res.json({
            code:0,
            msg:'success'
        })
    }else{
        res.json({
            code:1,
            msg:'fail'
        })
    }
})
router.get('/',async (req,res)=>{
<<<<<<< HEAD
    let data=await mysql('select * from sell')
    if(data.length){
        res.json({
            code:0,
            msg:"success",
            data
=======
    let data= await mysql('select * from sell order by id desc');
    if(data.length){
        res.json({
            code:0,
            msg:'success',
            data,
>>>>>>> cb523102559421b71652a3fb3b9bbf7c87e8f71e
        })
    }else{
        res.json({
            code:1,
<<<<<<< HEAD
            msg:"fail"
=======
            msg:'fail',

>>>>>>> cb523102559421b71652a3fb3b9bbf7c87e8f71e
        })
    }
})
module.exports=router