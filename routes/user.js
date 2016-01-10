var mongoose = require('mongoose');
var Post = mongoose.model('Post');

exports = module.exports = function(req, res){
    if(!req.session.user || req.session.user.name != req.params.name){
        res.redirect('/login')
    }
    else if(req.session.user.name == req.params.name){
        res.locals.user = req.session.user    //haha
        //console.log(req.params.name);
        Post.find({author:req.session.user.name},function(err,posts){
            console.log(posts.length);
            res.render('home',{posts:posts,name:req.session.user.name,title:"主页|" + req.session.user.name});
        })
    }




}