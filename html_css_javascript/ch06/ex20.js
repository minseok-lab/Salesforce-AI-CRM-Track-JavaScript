function onLoad() {
    document.getElementById("myBtn").onmouseover = displayDate;
    document.getElementById("myBtn").onmouseout = displayDate;
    document.getElementById("myBtn").onclick = displayDate;
    // document.getElementById("myBtn").onclick = function(){
    //    displayDate();
    // };
}


function displayDate(){
    document.getElementById("demo").innerHTML
        = new Date().getFullYear() + `년 `
        + (new Date().getMonth() + 1) + `월 `
        + new Date().getDate() + `일 `
        + new Date().getHours() + `시 `
        + new Date().getMinutes() + `분 `
        + new Date().getSeconds() + `초`;
}