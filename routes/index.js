var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.param('n')+"dsfds");
  res.render('login', { title: 'Express' });
});


router.get('/about',function(request,response){
  response.send('Welcome»¶Ó­ to the about page!');
});

router.post('/login',function(request,response){
  console.log(req.body.username);
  response.render('login');
});

router.get('*',function(request,response){
  response.send('404 error!');
});

module.exports = router;
