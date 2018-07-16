import ApiBase from '../apiBase';

class User extends ApiBase {
	constructor() {
		super();
	}

	async login(loginId, password) {
		return
	}


	async getUserList() {
		try {
			let users = await this.get('/api/users');
			return users.data;
		} catch(error) {
			throw new Error(error);
		}
	}
}

export default new User();