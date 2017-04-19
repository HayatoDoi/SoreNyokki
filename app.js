/* 
 * 
 * ===============================
 * File name : app.js
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

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const SERVER = require('./config').SERVER;

// Using the template engine
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
// Receiving POST data
app.use(bodyParser.urlencoded({extended: true}));
// Using the sesion 
app.use(session({
	secret: SERVER.SESSION_SECRET,
	resave: false,
	saveUninitialized: false,
	cookie: { maxAge: 30 * 60 * 1000 } // 30minutes
}));

// application page
const index = require(__dirname + '/router/index');
app.use(SERVER.ROOT, index);

// // index page
app.get('/',(req, res) => {
	res.send('SoreNyokki!!');
});
// 404 error page
app.use((req, res, next) => {
	res.status(404).send('Not found!!');
});
// 500 error page
app.use((err, req, res, next) =>{
	res.status(500).send('Internal server error!!');
});
// Server listen!
app.listen(SERVER.PORT, () => {
	console.log('Server running at http://localhost:%d%s', SERVER.PORT, SERVER.ROOT);
});
