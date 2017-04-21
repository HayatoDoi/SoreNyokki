/* 
 * Create database
 * ===============================
 * File name : createDataBase.js
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
const path = require('path');
const DataBase = require('./module/DataBase');
const db = new DataBase(path.resolve(__dirname + '/database/SoreNyokki.sqlite3'));
db.createData();
