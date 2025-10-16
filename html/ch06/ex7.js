var Foo = function (name, nick) {
    this.name = name;
    this.nick = nick;
}

Foo.prototype.aNumber = 5;
Foo.prototype.doFoo = function () {
    alert("I'm " + this.name);
}

var foo1 = new Foo("홍길동1", "honggildong1");
foo1.doFoo();

var foo2 = new Foo("홍길동2", "honggildong2");
foo2.doFoo();