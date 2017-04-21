# SoreNyokki

### Installation
```
$ git clone https://github.com/nikaidoumari/SoreNyokki.git
$ cd SoreNyokki
$ npm install
$ mkdir database
$ npm run dbc
$ npm start
```
### 設定
SoreNyokki/config.jsを編集する.
```javascript
module.exports = {
	SERVER : {
		PORT : 3000, //サーバのポート番号
		ROOT : "/", // サーバのルートディレクトリ リバースプロキシをかまさない場合は"/"
		SESSION_SECRET : "60d0d99346f0dccb3310fc1fc99bea89e85bf79b77341dd618fdb6e2c6979a33", // Sessionのトークン ランダムな文字列に変更してください
	},
	USER : {
		ADMIN_PASSWORD : "admin", // 管理者用のパスワード
		GUEST_PASSWORD : "guest", // 一般ユーザ用のパスワード
	},
	SLACK : {
		TOKEN : "xoxp-102447702628-102372103170-169280040087-dce7cde80d9a29d0d0dd27a6d32f7387", // Slackのweb API用token
	},
	MAIL : {
		// Student id is assigned to (?).
		FORMAT : "b(?)@planet.kanazawa-it.ac.jp",
	},

```
### mamo
- 招待を取り消すURL
https://XXXXXXX.slack.com/admin/invites

- Web API Tokenを格好するURL
https://api.slack.com/custom-integrations/legacy-tokens

### バグ・脆弱性報告
[バグ・脆弱性報告ページ](https://github.com/nikaidoumari/SoreNyokki/issues/2) または Hayato Doiに直接報告してください

### 修正したBug
- [2017-04-13] CSVに特殊文字が入ってた時,表示が乱れるのを修正
- [2017-04-13] 確認画面のXSSを修正
- [2017-04-17] ログイン後に任意webページにリダイレクトされるバグを修正
- [2017-04-18] ログインページのXSSを修正
- [2017-04-19] ２重投稿の防止