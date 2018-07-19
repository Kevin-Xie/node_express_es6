import express from 'express';
import UserAuthHandle from '../controllers/user/auth'
let router = express.Router();


// register
router.post('/register', UserAuthHandle.register);


// login
router.post('/login', UserAuthHandle.login);



export default router;