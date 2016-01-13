var mongoose = require("mongoose");
var Post = mongoose.model("Post");

exports = module.exports = function(req,res){
    if(!req.session.user){
        Post.find({}).limit(5).
            exec(function(err,posts){
                res.render('index', {title:'主页',posts:posts});
            });


    }else{
        res.redirect('/u/' + req.session.user.name)
        //res.render('index', {title:'主页', user:req.session.user})
    }

};