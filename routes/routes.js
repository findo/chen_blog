module.exports = function(app){
    app.all('/', require('./index'));
    app.all('/login', require('./login'));
    app.all('/register', require('./register'));
    app.all('/logout', require('./logout'));
    app.all('/post', require('./post'));
    //app.all('/users', require('./users'))




    //app.get('/register', function(req,res){
    //    res.render('register', {title:'注册'});
    //});
    //
    //app.post('/register', function(req,res){
    //
    //});
    //
    //app.get('/login', function(req,res){
    //    res.render('login',{title:'登陆'});
    //});
    //
    //app.post('/login', function(req,res){
    //
    //});
    //
    //app.get('/post', function(req,res){
    //    res.render('post', {title: '发表'});
    //})
    //
    //app.post('/post', function(req,res){
    //
    //})
    //
    //app.get('/logout', function(req,res){
    //
    //});
    //
    //
    //
    //app.get('/users', function(req,res){
    //    res.send("some shit")
    //});
}
