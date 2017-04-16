/* 
 * Confirm whether the received POST data is correct
 * ===============================
 * File name : checkPostData.js
 * Author    : Hayato Doi
 * License   : MIT
 * ===============================
 *
 * -------------------------------
 * @module.exports
 * -------------------------------
 *
 * Copyright (c) 2017, Hayato Doi
 * */

module.exports = (data) => {
	checkList = [
		'column_number',
		'studentid',
		'lastname_hiragana',
		'firstname_hiragana',
		'lastname_kanji',
		'firstname_kanji',
		// 'slack',
	];
	for(i in checkList){
		if(data[checkList[i]] === ''){
			return {error : true,
				message : 'すべての項目に答えてください.'};
		}
	}
	if(/^\d{1}[A-Z]{2}\d{1}-\d{1,2}$/.test(data.column_number) === false){
		return {error : true,
			message : '名列番号が間違っています.</br>半角数字1桁+半角英字2文字+半角数字1桁+ハイフン+半角数字1~2桁で入力してください.'};
	}
	if(/\d{7}/.test(data.studentid) === false){
		return {error : true,
			message : '学籍番号が間違っています.</br>半角数字7桁で入力してください.'};
	}
	return {error : false, message : null};
};
