const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('login',{ url : req.query.url });
});
router.post('/', (req, res) => {
	const USER = require('../../config.js').USER;
	// Guest,Admin login
	if( ( req.body.username === 'Guest' && req.body.password === USER.GUEST_PASSWORD ) || 
			( req.body.username === 'Admin' && req.body.password === USER.ADMIN_PASSWORD ) ){
		console.log('Correct password');
		req.session.user = { name : req.body.username};
		res.redirect(req.protocol + '://' + req.get('host') + req.body.url)
	}
	else{
		res.render('login',{ url : req.body.url, error : 'Password or Useruame is incorrect!!' });
	}
});

module.exports = router;
