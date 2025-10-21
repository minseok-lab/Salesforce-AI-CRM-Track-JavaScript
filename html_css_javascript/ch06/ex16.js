// function myFunction(arg1, arg2, arg3) {
//   // 값
//   console.log("I have an argument! " + arg1);

//   // 객체
//   console.log(arg2.bar);

//   // 함수
//   arg3();
// }

function myFunction() {
    // 값
    console.log("I have an argument! " + arguments[0]);

    // 객체
    console.log(arguments[1].bar);

    // 함수
    arguments[2]();
}

myFunction("foo", { bar: "baz" }, function () {
    console.log("Victory");
});

var a = "foo";
var b = {
    bar: "baz",
    foo: "bar",
};
var f = function () {
    console.log("Victory");
};

myFunction(a, b, f);

// var f = (function () {
//   console.log("Victory!");
// })(
// myFunction(
//     "foo",
//     { bar: "baz" },
//     funtion() {
// 	    console.log("Victory");
//     }
// );

//   function () {
//     console.log("Victory");
//   }
// )();
