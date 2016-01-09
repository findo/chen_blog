exports = module.exports = function(req, res){
    res.locals.user = req.session.user    //haha
    console.log(req.params.name);
    res.render('home');
}