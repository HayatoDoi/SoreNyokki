/* 
 * Application body
 * ===============================
 * File name : index.js
 * Author    : Hayato Doi
 * License   : MIT
 * ===============================
 *
 * -------------------------------
 * [ GET]/      | __Input_form__
 * [POST]/      | __Check_from_data__
 * [ GET]/login | __Login_page__
 * [POST]/login | __Make_session__
 * [POST]/save  | __save_post_data__
 * -------------------------------
 *
 * Copyright (c) 2017, Hayato Doi
 * */
const express = require('express');
const router = express.Router();
const url = require('url');

router.use((req, res, next) => {
	const SERVER = require('../config').SERVER;
	const PATH = url.parse(req.originalUrl).pathname;

	// Redirect to login form if no session. 
	if(req.session.user == undefined && PATH !== SERVER.ROOT + '/login'){
		res.redirect(SERVER.ROOT + '/login?url=' + PATH);
	}
	else{
		console.log(req.session.user);
		next();
	}
	// next();
});

// Login relationship __start
const login = require('./login');
router.use('/login', login);
// Login relationship __end

// data save __start
const save = require('./save');
router.use('/save', save);
// data save __end

// Enter basic information __start
router.get('/', (req, res) => {
	res.render('index',{slack:'on'});
});
router.post('/', (req, res) => {
	// console.log(req.body);
	const CheckPostData = require('../module/CheckPostData');
	// Format check
	let rData = CheckPostData(req.body);
	// console.log(rData);
	if(rData.error === true){
		let data = req.body;
		data['error'] = rData.message;
		res.render('index',data);
	}
	else{
		data = req.body;
		data['posturl'] = req.originalUrl + '/save'
		res.render('confirmation',req.body);
	}
});
// Enter basic information __end


module.exports = router;
