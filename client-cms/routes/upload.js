const express=require('express');
const router=express.Router();
const multer=require("multer");
const path=require('path');
const fs=require('fs');
let  upload  = multer ({dest :path.join(__dirname,"../uploads/") });
router.post("/",upload.single("file"),(req,res)=>{
    let img=req.body.img?req.body.img:"";
    if(img){
        let paths='./uploads'+img;
        if(fs.existsSync(paths)){
            fs.unlinkSync(paths)
        };
    }
    // 实例化时间对象
    let data=new Date();
    // 获取图片当前路径
    let destination=req.file.destination;
    // 定义以年月日命名的文件夹名
    let dir=[data.getFullYear(),data.getMonth()+1,data.getDate()].join("-");
    //获取图片的后缀名
    let ext=req.file.originalname.split(".").pop();
    // 定义一个以当前时间和随机数组成的文件名
    let fileName=''+data.getTime()+Math.floor(Math.random()*100)+"."+ext;
    // 定义图片存放的路径
    let dirname=path.join(destination,dir);
    //判断目录是否存在，不存在的时候在创建目录
    if(!fs.existsSync(dirname)){
        fs.mkdirSync(dirname);
    }
    // 读取图片文件
    fs.readFile(req.file.path,function (err,data) {
        if(err){
            throw err;
        }
        // 把读取到的文件写入目标文件中的新图片中；
        fs.writeFile(path.join(dirname,fileName),data,err=>{
            if (err){
                throw err;
            }
            //删除旧的图片文件
            fs.unlinkSync(req.file.path);
            res.json({
                url:"/"+dir+"/"+fileName,
                code: 0 //0表示成功，其它失败
                ,msg: ""
                ,data: {
                    src: "/"+dir+"/"+fileName
                    ,title: fileName //可选
                }
            })
        })
    })

})

router.delete("/",(req,res)=>{
    let {url}=req.body;
    let paths='./uploads'+url;
    if(fs.existsSync(paths)){
        fs.unlinkSync(paths)
    };
    if(fs.existsSync(paths)){
        res.json({
            code:1,
            msg:'fail'
        })
    }else {
        res.json({
            code:0,
            msg:'success'
        })
    }
})
module.exports=router;