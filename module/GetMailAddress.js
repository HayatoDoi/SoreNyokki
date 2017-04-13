/* 
 * Obtain mail format from student id.
 * ===============================
 * File name : GetMailAddress.js
 * Author    : Hayato Doi
 * License   : MIT
 * ===============================
 *
 * -------------------------------
 * @param(str)
 * -------------------------------
 *
 * Copyright (c) 2017, Hayato Doi
 * */
const FORMAT = require('../config.js').MAIL.FORMAT;

module.exports = (studentId) => {
	return FORMAT.replace(/\(\?\)/,studentId);
};
