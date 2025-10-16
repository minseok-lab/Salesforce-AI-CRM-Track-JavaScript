var employee1 = {
    name: "홍길동",
    title: "과장",
    showInfo: function () {
        document.write("이름: " + this.name);
        document.write("<br>");
        document.write("직책: " + this.title);
    }
};

var foo = {
    name: "bar",
    nick: "buzz",
    aNumber: 5,
    doStuff: function () {
        alert("I'm " + this.name);
    }
}