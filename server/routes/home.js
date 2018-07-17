
import express from 'express';
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  // res.render('index', { title: 'Express' });
  res.send('index');
});

router.get('/login', (req, res, next) => {
  res.json({});
});

router.post('/login', (req, res, next) => {
  console.log(req.session)
  res.json({name: 'kevin'})
});




export default router
