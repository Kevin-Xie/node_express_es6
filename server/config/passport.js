const passport = require('passport');
const localStrategy = require('passport-local')
import User from '../models/user/user';

export default app => {



	app.use(passport.initialize());
	app.use(passport.session());
}