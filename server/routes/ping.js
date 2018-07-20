import express from 'express';
let router = express.Router();

// Test if backend alive
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Ping' });
});


export default router
