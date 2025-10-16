var str = "string1 string2 string3"

console.log( str.length );

var start = str.indexOf('string2');

console.log( start ); 

console.log(str.substr(start));
// 간단히,

console.log(str.substr(str.indexOf('string2')));
// str은 변하지 않는다.

console.log(str);