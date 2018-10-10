var express = require('express');
var app = express();
var path = require('path');
var passport = require('passport');
var auth = require('./auth');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');

app.use(cookieSession({
    name: 'session',
    keys: ['123']
}));
app.use(cookieParser());


auth(passport);
app.use(passport.initialize());

app.set('view engine','ejs');
app.set('views', path.join(__dirname, './views'))

app.get('/',function(req,res){
    if (req.session.token) {
        res.cookie('token', req.session.token);
        res.json({
            status: 'session cookie set'
        });
    } else {
        res.cookie('token', '')
        res.json({
            status: 'session cookie not set'
        });
    res.render('index');
});

app.get('/auth/google', passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/userinfo.profile']
}));
app.get('/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/'
    }),
    (req, res) => {
        req.session.token = req.user.token;
        res.redirect('/');
    }
);

app.get('/logout', (req, res) => {
    req.logout();
    req.session = null;
    res.redirect('/');
});

app.listen(4000);