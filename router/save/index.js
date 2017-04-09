const express = require('express');
const router = express.Router();
const InviteSlack = require('../../module/InviteSlack');

router.get('/', (req, res) => {
	res.send('[get]/save');
});
router.post('/', (req, res) => {
	let mail = 'b' + req.body.studentid + '@planet.kanazawa-it.ac.jp';
	InviteSlack(mail);
	console.log(req.body);
	console.log(mail);
	res.send('[post]/save');
});

module.exports = router;
