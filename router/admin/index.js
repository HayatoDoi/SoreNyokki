const express = require('express');
const router = express.Router();
const url = require('url');
const path = require('path');
const DataBase = require('../../module/DataBase');

router.use((req, res, next) => {
	const SERVER = require('../../config').SERVER;
	const PATH = url.parse(req.originalUrl).pathname;

	// Redirect to login form if no Admin. 
	if(req.session.user.name !== 'Admin'){
		res.redirect(SERVER.ROOT);
	}
	else{
		next();
	}
	// next();
});

router.get('/', (req, res) => {
	const db = new DataBase(path.resolve(__dirname + '/../../database/SoreNyokki.sqlite3'));
	let result = db.getData((rows)=>{
		// console.log(rows);
		res.render('admin',{ans:rows});
	});
	if(result === false){
		throw new Error('db error');
	}
});

router.get('/list.csv', (req, res) => {
	let csv = '名列番号,学籍番号,名前(ふりがな),,名前(漢字),,Slack登録\n';
	const db = new DataBase(path.resolve(__dirname + '/../../database/SoreNyokki.sqlite3'));
	let result = db.getData((rows)=>{
		for(let i in rows){
			for(key in rows[i]){
				rows[i][key] = String(rows[i][key]).replace(/\,/g, '\,');
				rows[i][key] = String(rows[i][key]).replace(/\"/g, '\"');
			}
			csv += rows[i].column_number + ',';
			csv += rows[i].studentid + ',';
			csv += rows[i].lastname_hiragana + ',';
			csv += rows[i].firstname_hiragana + ',';
			csv += rows[i].lastname_kanji + ',';
			csv += rows[i].firstname_kanji + ',';
			csv += rows[i].slack === 'on' ? 'on' : 'off';
			csv += '\n';
		}
		res.header('Content-Type', 'text/csv');
		res.send(csv);
	});
	if(result === false){
		throw new Error('db error');
	}
});

module.exports = router;
