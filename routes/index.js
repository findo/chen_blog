exports = module.exports = function(req,res){
    if(!req.session.user){
        res.render('index', {title:'主页'});
    }else{
        res.redirect('/u/' + req.session.user.name)
        //res.render('index', {title:'主页', user:req.session.user})
    }

};