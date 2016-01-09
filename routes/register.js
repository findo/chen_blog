var mongoose = require('mongoose');
var User = mongoose.model('User');
var crypto = require('crypto');

exports = module.exports = function(req,res){
    if(req.method == "GET"){
        res.render('register',{title:'注册'});
    }
    if(req.method == "POST"){
        pwd = crypto.createHash('sha256').update(req.body.password).digest('base64').toString();
        console.log(req.body.email)
        User.findOne({"$or":[{email: req.body.email},{name: req.body.name}]}, function(err, user){
            if(err) return console.log(err);
            if(user) {
                if (user.email == req.body.email) {
                    res.json({status: 'email has been register'});
                } else if (user.name == req.body.name) {
                    res.json({status: 'name has bean register'});
                }
            }else{
                var user = new User({name: req.body.name ,email: req.body.email, password: pwd});
                req.session.user = user;
                user.save(function(err){
                    if(err){
                        console.log(err);
                    }
                    res.json({status: 'register_ok'});
                })
            }

        })
    }
}