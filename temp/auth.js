const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user);
    });
    passport.deserializeUser((user, done) => {
        done(null, user);
    });
    passport.use(new GoogleStrategy({ 
   
            clientID: '337710363067-e6fkkuq8rkism97o7mgr6fvh2smmfn10.apps.googleusercontent.com',
            clientSecret:'5ahc23snzy3pMkwVw9FxEz-i',
            callbackURL:'http://127.0.0.1:5500/auth/google/callback'
        },
        (token, refreshToken, profile, done) => {
            return done(null, {
                profile: profile,
                token: token
            });
        }));
    };