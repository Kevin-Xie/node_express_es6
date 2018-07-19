import UserModel from '../../models/user/user';

class UserAuthHandle {
	constructor() {
		this.register = this.register.bind(this);
		this.createNewUser = this.createNewUser.bind(this);
		this.login = this.login.bind(this);
		this.findByUserName = this.findByUserName.bind(this);
	};
	
	async register(req, res, next) {
		try {
			let newUser = {
					userName: req.body.userName,
					password: req.body.password,
				}
			let result = await this.createNewUser(newUser);
			// remove sensitive data, before send to client side.
			result.password = null;	
			result.salt = null;
			res.json(result);
		} catch (error) {
			next(error);
		}
	};

	async login(req, res, next) {
		try {
			let {userName, password} = req.body;
			let user = await this.findByUserName(userName);
			if(user && user.authenticate(password)) {
				req.session.user = user;
				user.password = null;
				user.salt = null;
				res.json(user);
			} else {
				res.json({error: 'Invalid userName or password'})
			}
		} catch (error) {
			next(error);
		}
	};

	logout(req, res, next) {
		res.send('logout');
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



export default new UserAuthHandle();