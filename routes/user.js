var mongoose = require('mongoose');
var Post = mongoose.model('Post');

exports = module.exports = function (req, res) {


    res.locals.user = req.session.user    //haha
    //console.log(req.params.name);
    Post.find({author: req.params.name}, function (err, posts) {
        console.log(posts.length);
        res.render('home', {posts: posts, name: req.params.name, title: "主页|" + req.params.name});
    })


}