import passport from 'passport';
import { Strategy as LocalStrategy} from 'passport-local';
import User from '../models/user/user';

export default app => {

	// serializer user id into session
	passport.serializeUser((user, done) => {
		done(null, user._id);
	});

	// get user info by id(from session)
	passport.deserializeUser((_id, done) => {
		User.findById(_id, '-password -salt', function(err, user) {
			done(null, user);
		});
	});

	// init authenticaion, use local strategy.
	passport.use(new LocalStrategy({
		usernameField: 'userName',
		passwordField: 'password'
	}, 
	function(userName, password, done) {
		User.findOne({userName}, function(err, user) {
			if(err) { return done(err); }
			if(!user) {
				return done(null, false, { message: 'Incorrect userName' });
			}
			if(!user.authenticate(password)) {
				return done(null, false, {message: 'Incorrect password'});
			}
			user.password = user.salt = null;	//remove sensitive data
			return done(null, user);
		})
	}));

	// init passport&passport session
	app.use(passport.initialize());
	app.use(passport.session());
}