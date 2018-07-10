import express from 'express';
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  // res.render('index', { title: 'Express' });
  res.send('index');
});

router.get('/login', () => {});

router.post('/login', () => {});




export default router
