/* 
 * Application configuration file.
 * ===============================
 * File name : config.example.js
 * Author    : Hayato Doi
 * License   : MIT
 * ===============================
 *
 * -------------------------------
 * @hoge
 * -------------------------------
 *
 * Copyright (c) 2017, Hayato Doi
 * */

module.exports = {
	SERVER : {
		PORT : 3000,
		ROOT : '/ahou',
		SESSION_SECRET : "60d0d99346f0dccb3310fc1fc99bea89e85bf79b77341dd618fdb6e2c6979a33",
	},
	USER : {
		ADMIN_PASSWORD : "admin",
		GUEST_PASSWORD : "guest",
	},
	SLACK : {
		// a page for acquiring token https://api.slack.com/custom-integrations/legacy-tokens
		TOKEN : 'xoxp-102447702628-102372103170-165264575376-8d3a2df0756f4ec80e52ffe6465a2920',
	},
	MAIL : {
		// Student id is assigned to (?).
		FORMAT : "b(?)@planet.kanazawa-it.ac.jp",
	},
}
