var Rectangle = function( x1, y1, x2, y2, color ) {
	this.x1 = x1;
	this.y1 = y1;
	this.x2 = x2;
	this.y2 = y2;
	this.color = color;
}

Rectangle.prototype.show = function(){
	var width = (this.x2 - this.x1 + 1 );
	var height = (this.y2 - this.y1 + 1 );
	document.write(
		"<div style='" +
		"position:absolute;" +
		"left:"              + this.x1    + "px;"  +
		"top:"               + this.y1    + "px;"  +
		"width:"             + width      + "px; " +
		"height:"            + height     + "px; " +
		"background-color:"  + this.color + ";"    +
		"border:1px solid #000" +
		"'>" +
		"</div>");
}

var r1 = new Rectangle(100, 100, 299, 299, "#2dcd00");
var r2 = new Rectangle(500, 400, 732, 522, "#e325d2");

r1.show();
r2.show();