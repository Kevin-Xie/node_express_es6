import express from 'express';
let router = express.Router();


router.get('/api/users');


router.get('/api/users/:id');


router.get('/api/users/me');


export default router;