var express = require('express');
var router = express.Router();
let mysql=require('../../lib/mysql');
router.get('/',async (req,res)=>{
    let data=await mysql('select * from stage order by sid desc');
    if(data.length){
        res.json({
            code:0,
            msg:'success',
            data,
        })
    }else {
        res.json({
            code:1,
            msg:'fail',
        })
    }
});
router.post('/',async (req,res)=>{
    let data=req.body;
    let keys=Object.keys(data);
    let sql='insert into client ('
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

module.exports=router