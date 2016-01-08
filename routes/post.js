exports = module.exports = function(req,res){
    if(req.method == "GET"){
        res.render('post', {title:"post"});
    }
    if(req.method == "POST"){

    }
}