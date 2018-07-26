import UserModel from './user.model';

class AuthService {
    constructor() {

    }

    async createNewUser(newUser){
		try {
			return await new UserModel(newUser).save()
		} catch (error) {
			throw new Error(error);			
		}
    }
    
    async findByUserName(userName){
		try {
			let user = await UserModel.findOne({userName});
			return user;
		} catch (error) {
			throw new Error(error);			
		}
	};
}

export default new AuthService();
