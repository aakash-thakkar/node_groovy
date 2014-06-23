var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Welcome to PhotoShare' });
});


//this must be in photos.js in /routes
var photos = [];

photos.push({
name: 'Search Secure...',
path: 'https://duckduckgo.com/about'
});
photos.push({
name: 'The Creator : Jay Dihenkar',
path: 'https://avatars0.githubusercontent.com/u/5088946?s=400'
});

router.get('/view',function(req, res){
	res.render('photos', {
	title: 'Photos',
	photos: photos
	});
	});

module.exports = router;
