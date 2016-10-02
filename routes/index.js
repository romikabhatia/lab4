var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',
      { title: 'A little information about my family!' });
});

// GET ABOUT page
router.get('/about', function(req, res, next) {
  res.render('about', {
    title: 'about info',
    aboutInfo: 'someInfo'

  });
});

//Get Rajinder page
router.get('/rajinder', function(req,res,next)
{
  res.render('rajinder',{
    title: 'about info',
    aboutInfo: 'someInfo'

  });
});

// Get Geeta page
router.get('/geeta', function(req,res,next)
{
  res.render('geeta', {
    title: 'about info',
    aboutInfo: 'someInfo'
  });
});

// Get Romika  page
router.get('/romika', function(req,res,next)
{
  res.render('romika', {
    title: 'about info',
    aboutInfo: 'someInfo'
  });
});

// Get Ashu page
router.get('/ashu', function(req,res,next)
{
  res.render('ashu', {
    title: 'aboutInfo',
    aboutInfo: 'someInfo'
  });
});
module.exports = router;