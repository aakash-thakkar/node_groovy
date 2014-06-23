var photos = [];

photos.push({
name: 'Node.js Logo',
path: 'http://nodejs.org/images/logos/nodejs-green.png'
});
photos.push({
name: 'The Creator : Jay Dihenkar',
path: 'https://avatars0.githubusercontent.com/u/5088946?s=400'
});

exports.list = function(req, res){
	res.render('photos', {
	title: 'Photos',
	photos: photos
	});
};