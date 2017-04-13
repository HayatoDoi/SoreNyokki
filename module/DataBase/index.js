/* 
 * DataBase class
 * ===============================
 * File name : DataBase/index.js
 * Author    : Hayato Doi
 * License   : MIT
 * ===============================
 *
 * -------------------------------
 * @new DataBase(str(file path))
 * @insertData(...)
 * -------------------------------
 *
 * Copyright (c) 2017, Hayato Doi
 * */
const sqlite3 = require('sqlite3');
const fs = require('fs');
// file check
function isExistFile(file) {
	try {
		fs.statSync(file);
		return true;
	} catch(err) {
		if(err.code === 'ENOENT') return false
	}
};

class DataBase {
	constructor(dbPath){
		this.create_sql = '';
		this.create_sql += 'CREATE TABLE info(';
		this.create_sql += 'id INTEGER NOT NULL PRIMARY KEY,';
		this.create_sql += 'column_number TEXT,';
		this.create_sql += 'studentid TEXT,';
		this.create_sql += 'lastname_hiragana TEXT,';
		this.create_sql += 'firstname_hiragana TEXT,';
		this.create_sql += 'lastname_kanji TEXT,';
		this.create_sql += 'firstname_kanji TEXT,';
		this.create_sql += 'slack TEXT';
		this.create_sql += ');';
		this.create_sql += ''

		this.insert_sql = '';
		this.insert_sql += 'INSERT INTO info(';
		this.insert_sql += 'column_number,studentid,lastname_hiragana,firstname_hiragana,lastname_kanji,firstname_kanji,slack';
		this.insert_sql += ') VALUES((?),(?),(?),(?),(?),(?),(?));';

		this.db = new sqlite3.Database(dbPath);
		this.db.serialize();
		// this.db.on('error', (err)=>{
		// 	console.error(err);
		// 	return false;
		// });
	}

	insertData(column_number,studentid,lastname_hiragana,firstname_hiragana,lastname_kanji,firstname_kanji,slack){
		this.db.run(this.insert_sql,[
				column_number,
				studentid,
				lastname_hiragana,
				firstname_hiragana,
				lastname_kanji,
				firstname_kanji,
				slack]);
		this.db.close();
		return true;
	}
	getData(callback){
		this.db.all("SELECT * FROM info;",(err,rows)=>{
			callback(rows)
		});
	}
	createData(){
		this.db.run(this.create_sql);
	}
};
module.exports = DataBase;
