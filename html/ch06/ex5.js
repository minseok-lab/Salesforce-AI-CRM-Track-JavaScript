var employee1 = new Object();

employee1.name = "홍길동";
employee1.title = "과장";
employee1.showInfo = function () {
    document.write("이름: " + this.name);
    document.write("<br>");
    document.write("직책: " + this.title);
}