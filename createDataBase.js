const path = require('path');
const DataBase = require('./module/DataBase');
const db = new DataBase(path.resolve(__dirname + '/database/SoreNyokki.sqlite3'));
db.createData();
