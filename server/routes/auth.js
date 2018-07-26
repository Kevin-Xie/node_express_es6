import express from 'express';
import { AuthHandler } from '../handlers/user'
let router = express.Router();


// register
router.post('/register', AuthHandler.register);


// login
router.post('/login', AuthHandler.login);


// logout
router.get('/logout', AuthHandler.logout);


export default router;