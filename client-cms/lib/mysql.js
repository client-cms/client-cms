const mysql=require('mysql');
let pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'furniture'
});

let query =  function(sql,value){
    return new Promise((resolve,reject)=>{
        pool.getConnection((error,connection)=>{
            if(error){
                reject(error)
            }else{
                connection.query(sql,value,(err,result)=>{
                    if(err){
                        reject(err)
                    }else{
                        resolve(result)
                    }
                })
            }
        })
    })
};

module.exports = query;
