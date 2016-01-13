module.exports = function(app){
    app.all('/', require('./index'));
    app.all('/u/:name', require('./user'))
    app.all('/login', require('./login'));
    app.all('/register', require('./register'));
    app.all('/logout', require('./logout'));
    app.all('/post', require('./post'));
    app.all('/u/:name/post/:postId', require('./postDetail'));

}
