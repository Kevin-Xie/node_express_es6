import http from 'axios';
import { resolve } from 'url';


export const login = async (userName, password) => {
	try {
        let user = await http.post('/api/auth/login', {userName, password});
        return user.data;
	} catch (error) {
        if(error.response.status === 401)   // backend will return 401 if userName or password is incorrect.
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

export const logout = () => {
    return new Promise((resolve, reject) => {
        http.get('/api/auth/logout')
        .then(response => resolve(response.data))
        .catch(error => reject(error.response.status + ' ' + error.response.statusText)) 
    })
}

export const getUserList = async () => {
    try {
        let users = await http.get('/api/users');
        return users.data;
    } catch (error) {
        throw new Error(error);
    }
}