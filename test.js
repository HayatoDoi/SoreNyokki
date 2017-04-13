class Hoge {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}
	XY(){
		return this.height +" :: "+ this.width
	}
};
// function Hoge(text){
// 	this.text = text;
// };
// Hoge.prototype.Foo = function() {
// 	return this.text
// }

const hoge = new Hoge(1000,4000);
console.log(hoge.XY());
