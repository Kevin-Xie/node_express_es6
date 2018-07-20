import express from 'express'
let router = express.Router();

let baseURL = 'http://localhost:3000';
let apis = {
    register: {
        method: 'POST',
        url: baseURL + '/api/auth/register'
    },
    login: {
        method: 'POST',
        url: baseURL + '/api/auth/login'
    },
    logout: {
        method: 'GET',
        url: baseURL + '/api/auth/logout',
    }
}

router.get('/', (req, res, next) => {
    res.json(apis);
})

export default router;