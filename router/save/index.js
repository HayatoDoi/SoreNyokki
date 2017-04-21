const express = require('express');
const router = express.Router();
const path = require('path');
const InviteSlack = require('../../module/InviteSlack');
const GetMailAddress = require('../../module/GetMailAddress');
const DataBase = require('../../module/DataBase');
const Tokens = require("csrf");
const tokens = new Tokens();

router.post('/',(req, res) => {
	// token check _start
	let secret = req.session._csrf;
	let token = req.body._csrf;
	if (tokens.verify(secret, token) === false) {
		throw new Error('Invalid Token');
	}
	// token check _end
	// clear token _start
	req.session._csrf = null;
	res.clearCookie("_csrf");
	// clear token _end
	if(req.body.slack === 'on'){
		let mail = GetMailAddress(req.body.studentid);
		console.log("Invent " + mail + " to Slack!!");
		InviteSlack(mail);
	}
	const db = new DataBase(path.resolve(__dirname + '/../../database/SoreNyokki.sqlite3'));
	let result = db.insertData(
			req.body.column_number,
			req.body.studentid,
			req.body.lastname_hiragana,
			req.body.firstname_hiragana,
			req.body.lastname_kanji,
			req.body.firstname_kanji,
			req.body.slack
			);
	if(result === false){
		throw new Error('db error');
	}
	console.log('DB :: %s', result);

	res.render('thankyou');
});

module.exports = router;
