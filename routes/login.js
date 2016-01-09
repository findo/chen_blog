var mongoose = require('mongoose');
var User = mongoose.model('User');
var crypto = require('crypto');

exports = module.exports = function(req,res){
    if(req.method == "GET"){
        res.render('login',{title:'登陆'});
    }
    if(req.method == "POST"){
        console.log("what")
        pwd = crypto.createHash('sha256').update(req.body.password).digest('base64').toString();
        console.log(pwd);

        User.findOne({"$or":[{"email":req.body.account},{"name":req.body.account}]},function(err,user){
            if(err){
                console.log(err);
                return;
            }
            if(user){
                if(user.password == pwd){
                    console.log('t3')
                    req.session.user = user;
                    res.json({status: "success",name:user.name});
                }else{
                    console.log('t2')
                    res.json({status: "wrong password"})
                }
            }else{
                res.json({status: "no matched user"})
            }
        })
    }
}