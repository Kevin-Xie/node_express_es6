import http from 'axios';


export const login = async (loginId, password) => {
	try {
        let user = await http.post('/api/login', {loginId, password});
        return user.data;
	} catch (error) {
		throw new Error(error);
	}
}



export const getUserList = async () => {
    try {
        let users = await http.get('/api/users');
        return users.data;
    } catch (error) {
        throw new Error(error);
    }
}