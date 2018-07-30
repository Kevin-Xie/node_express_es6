import http from 'axios';


export const login = async (userName, password) => {
	try {
        let user = await http.post('/api/auth/login', {userName, password});
        return user.data;
	} catch (error) {
        if(error.response.status === 401)
            throw new Error(error.response.data.message);
        else 
            throw new Error(error.response.status + ' ' + error.response.statusText);            
	}
}

export const register = async(userName, password) => {
    try {
        let response = await http.post('/api/auth/register', {userName, password})
        return response.data;
    } catch (error) {
        throw new Error(error.response.status + ' ' + error.response.statusText);
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