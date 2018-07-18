import express from 'express';
import userHandle from '../controllers/admin/admin'
let router = express.Router();


// register
router.post('/register', userHandle.register);


// login
router.post('/login', userHandle.login);



export default router;