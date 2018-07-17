import UserModel from '../../models/user/user'
import { request } from 'http';

class UserHandle {
	constructor() {

	};
	
	register(req, res, next) {
		let newUser = {
			userName: req.body.userName,
			password: req.body.password,
		}
		new UserModel(newUser)
		.save((err, user) => {
			if (err) 
				throw new Error(err);
			res.send(user);
		});
	};

	login(req, res, next) {
		res.send(req.body);
	}
}

export default new UserHandle();