import http from 'axios';



export const getUserList = async () => {
    try {
        let users = await http.get('/api/users');
        return users.data;
    } catch (error) {
        throw new Error(error);
    }
}