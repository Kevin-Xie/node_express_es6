import express from 'express'
let router = express.Router();

let apis = {
    register: {
        method: 'POST',
        url: '/api/auth/register'
    },
    login: {
        method: 'POST',
        url: '/api/auth/login'
    },
    logout: {
        method: 'GET',
        url: '/api/auth/logout',
    }
}

router.get('/', (req, res, next) => {
    res.json(apis)
})

export default router;