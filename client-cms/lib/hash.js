let crypto = require('crypto');
function hash(value){
    Signture = crypto.createHmac('sha1', 'SecrectKey'); //SecrectKey 秘钥
    Signture.update(value);
    let d = Signture.digest('hex')
    return d;
}
module.exports={
    hash
}
