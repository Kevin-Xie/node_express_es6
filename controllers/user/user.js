import UserModel from '../../models/user/user'

class UserHandle {
	constructor() {

	};
	
	getAllUsers(req, res, next) {
		UserModel.find((err, users) => {
			if (err) 
				console.error(err);
			res.send(users);
		})
	};

	createUser(req, res, next) {
		let data = req.body;
		let newUser = {
			userName: data.userName,
			password: data.password,
		}
		new UserModel(newUser)
		.save((err, user) => {
			if (err) 
				console.error(err);
			res.send(newUser);
		});
	};

	getUserById(req, res, next) {
		UserModel.find({_id: req.params.id}, (err, user) => {
			if (err) 
				console.error(err);
			res.send(user);
		})
	};
}

export default new UserHandle();