# SoreNyokki

### Installation
```
$ git clone https://github.com/nikaidoumari/SoreNyokki.git
$ cd SoreNyokki
$ npm install && npm run dbc
$ npm start
```
### 設定
SoreNyokki/config.jsを編集する.
```javascript
module.exports = {
	SERVER : {
 		//サーバのポート番号
		PORT : 3000,

 		// サーバのルートディレクトリ リバースプロキシをかまさない場合は"/"
		ROOT : "/",

		// Sessionのトークン ランダムな文字列に変更してください
		SESSION_SECRET : "60d0d99346f0dccb3310fc1fc99bea89e85bf79b77341dd618fdb6e2c6979a33",
	},
	USER : {
		// 管理者用のパスワード
		ADMIN_PASSWORD : "admin",

		// 一般ユーザ用のパスワード
		GUEST_PASSWORD : "guest",
	},
	SLACK : {
		// Slackのweb API用token(memoのURLから生成)
		TOKEN : "xoxp-102447702628-102372103170-169280040087-dce7cde80d9a29d0d0dd27a6d32f7387",
	},
	MAIL : {
		// 学籍番号からメールアドレスを作成するフォーマット (?)に学籍番号が入る
		FORMAT : "b(?)@planet.kanazawa-it.ac.jp",
	},
}
```
### mamo
- 招待を取り消すURL
https://XXXXXXX.slack.com/admin/invites

- Web API Tokenを格好するURL
https://api.slack.com/custom-integrations/legacy-tokens

### バグ・脆弱性報告
[バグ・脆弱性報告ページ](https://github.com/nikaidoumari/SoreNyokki/issues/2) または Hayato Doiに直接報告してください

### 修正したバグ・脆弱性
- [2017-04-13] CSVに特殊文字が入ってた時,表示が乱れるのを修正
- [2017-04-13] 確認画面のXSSを修正
- [2017-04-17] ログイン後に任意webページにリダイレクトされるバグを修正
- [2017-04-18] ログインページのXSSを修正
- [2017-04-19] ２重投稿の防止
