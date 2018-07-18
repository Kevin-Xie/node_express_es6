import UserModel from '../../models/user/user';
const crypto = require('crypto');

class UserHandle {
	constructor() {
		this.register = this.register.bind(this);
		this.createNewUser = this.createNewUser.bind(this);
		this.cryption = this.cryption.bind(this);
	};
	
	async register(req, res, next) {
		try {
			let newUser = {
					userName: req.body.userName,
					password: this.cryption(req.body.password),
				}
			let result = await this.createNewUser(newUser);
			res.json({isSuccess: true, userId: result._id});
		} catch (error) {
			res.json({isSuccess: false})
			next(error);
		}
	};

	login(req, res, next) {
		res.send(req.body);
	};

	cryption(password) {
		const sha1 = crypto.createHash('sha1');
		return sha1.update(password).digest('hex');
	};

	async findByUserName(userName){
		try {
			let user = await UserModel.findOne({userName});
			return user;
		} catch (error) {
			throw new Error(error);			
		}
	};

	async createNewUser(newUser){
		try {
			return await new UserModel(newUser).save()
		} catch (error) {
			throw new Error(error);			
		}
	}
}



export default new UserHandle();