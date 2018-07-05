
class UserHandle {
	constructor() {

	};
	
	getAllUsers(req, res, next) {
		console.log('getAllUsers');
		res.send([]);
	};

	createUser(req, res, next) {
		let data = req.body;
		console.log(req.body)
		res.send(data);
	};

	getUserById(req, res, next) {
		console.log('getUserById')
		res.send({})
	};
}

export default new UserHandle();