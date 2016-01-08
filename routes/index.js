exports = module.exports = function(req,res){
    if(!req.session.name){
        res.render('index', {title:'主页'});
    }else{
        res.render('index', {title:'主页', name:req.session.name})
    }

};