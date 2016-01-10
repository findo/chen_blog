var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var markdown = require('markdown').markdown;

exports = module.exports = function(req, res){
    var userName = req.params.name;
    var postId = req.params.postId;
    Post.findOne({author:userName,_id:postId},function(err,post){
        console.log(post);
        console.log(markdown.toHTML(post.content));
        res.render("postDetail",{user:req.session.user,time:post.time,postTitle:post.title,postContent:post.content});
    })
}