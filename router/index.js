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
const Tokens = require("csrf");
const tokens = new Tokens();

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

// admin page __start
const admin = require('./admin');
router.use('/admin', admin);
// admin page __end

// Enter basic information __start
router.get('/', (req, res) => {
	res.render('index',{slack:'on'});
});
router.post('/',(req, res) => {
	let secret = tokens.secretSync();
	let token = tokens.create(secret);
	req.session._csrf = secret;
	// res.cookie('_csrf', token);
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
		data['posturl'] = req.originalUrl + '/save';
		data['csrfToken'] =token;
		res.render('confirmation',data);
	}
});
// Enter basic information __end


module.exports = router;
