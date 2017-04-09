/* 
 * Invite to Slack.
 * ===============================
 * File name : InviteSlack.js
 * Author    : Hayato Doi
 * License   : MIT
 * ===============================
 *
 * -------------------------------
 * @module.exports(e-mail)
 * -------------------------------
 *
 * Copyright (c) 2017, Hayato Doi
 * */
const request = require('request');
const TOKEN = require('../config.js').SLACK.TOKEN;

module.exports = (mail) => {
	let opt = {
		url : 'https://TEAM.slack.com/api/users.admin.invite',
		method : 'POST',
		form : {
			email : mail,
			token : TOKEN,
			set_active : true,
		},
	};
	// console.log(opt);
	request(opt, (error, res, body) => {
		if(error){
			console.error(error);
		}
		if(!error && res.statusCode == 200){
			console.log(body);
		}
	});
};
