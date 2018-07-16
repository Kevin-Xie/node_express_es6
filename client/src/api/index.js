import Axios from 'axios';

const GET = Axios.get;
const POST = Axios.post;
const PUT = Axios.put;
const DELETE = Axios.delete;


export const login = async (loginId, password) => {
    return;
}


export const getUserList = async () => {
    try {
        let users = await GET('/api/users');
        return users.data;
    } catch (error) {
        throw new Error(error);
    }
}