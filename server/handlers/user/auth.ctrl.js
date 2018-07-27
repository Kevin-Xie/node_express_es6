import passport from 'passport';
import AuthService from './auth.serv';

class AuthHandler {
	constructor() {
		this.register = this.register.bind(this);
		this.login = this.login.bind(this);
	};
	
	async register(req, res, next) {
		try {
			let newUser = {
					userName: req.body.userName,
					password: req.body.password,
				}
			let user = await AuthService.createNewUser(newUser);
			// remove sensitive data, before send to client side.
			user.password = null;	
			user.salt = null;
			req.login(user, err => {
				if(err) {
					console.log(err);
					res.status(400).send(err);
				} else {
					res.status(200).json(user);
				}	
			})
		} catch (error) {
			next(error);
		}
	};

	async login(req, res, next) {
		passport.authenticate('local', (err, user, info) => {
			if(err || !user) {
				res.status(422).send(info);
			} else {
				req.login(user, err => {
					if(err) {
						console.log(err);
						res.status(400).send(err);
					} else {
						res.json(user);
					}
				})
			}
		})(req, res, next);
	};

	logout(req, res, next) {
		req.logout();
		res.json({ success: true, message: 'logout successfully' })
	};
}


export default new AuthHandler();