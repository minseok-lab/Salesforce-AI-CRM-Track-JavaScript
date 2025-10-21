var colors = ["blue", "black", "red", "green"];
var size = colors.length; // 4

for(var i = 0; i < size; i++){
	document.write(
			"<div style='"	+
			"width:100px;"	+
			"height:100px;"	+
			"background-color:"  + colors[i] + ";"    +
			"'>" +
			"</div>" );
	
}