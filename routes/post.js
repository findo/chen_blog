var mongoose = require('mongoose');
var Post = mongoose.model('Post');

exports = module.exports = function(req,res){
    if(!req.session.user){
        res.redirect('/login')
    }
    res.locals.user = req.session.user    //haha
    if(req.method == "GET"){
        res.render('post', {title:"post"});
    }
    if(req.method == "POST"){
        var post = new Post({author: req.session.user.name, name: req.body.name, title: req.body.title, time: '123', summary: req.body.summary, content: req.body.content})
        post.save(function(err){
            res.redirect('/u/' + req.session.user.name)
            //if(err){
            //    console.log(err);
            //}
            //res.json({status: 'success',name:req.session.user.name});
        })
    }
}