import express from 'express';
import UserAuthHandle from '../controllers/user/auth'
let router = express.Router();


// register
router.post('/register', UserAuthHandle.register);


// login
router.post('/login', UserAuthHandle.login);


// logout
router.get('/logout', UserAuthHandle.logout);


export default router;