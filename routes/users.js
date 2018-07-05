import express from 'express';
import userHandle from '../controllers/users/users'
let router = express.Router();

// get user list
router.get('/', userHandle.getAllUsers);


// create user
router.post('/', userHandle.createUser);


// get user by ID
router.get('/:id', userHandle.getUserById);


export default router;