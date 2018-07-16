import http from 'axios';


export const login = async (loginId, password) => {
	try {
		return await http.post('/api/login', {loginId, password});
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