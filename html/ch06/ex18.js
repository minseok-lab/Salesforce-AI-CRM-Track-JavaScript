function displayDate() {
    document.getElementById("demo").innerHTML
        = new Date().getFullYear() + `년 `
        + (new Date().getMonth() + 1) + `월 `
        + new Date().getDate() + `일 `
        + new Date().getHours() + `시 `
        + new Date().getMinutes() + `분 `
        + new Date().getSeconds() + `초`;
}

function onLoad() {
    var btn = document.getElementById("myBtn");
    btn.onclick = displayDate;
    btn.onmouseover = displayDate;
    btn.onmouseout = displayDate;
    document.getElementById("demo").innerHTML
    = new Date().getFullYear() + `년 `
        + (new Date().getMonth() + 1) + `월 `
        + new Date().getDate() + `일 `
        + new Date().getHours() + `시 `
        + new Date().getMinutes() + `분 `
        + new Date().getSeconds() + `초`;
}