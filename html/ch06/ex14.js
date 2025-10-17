// 결과를 표시할 HTML 요소를 가져옵니다.
const resultDiv = document.getElementById('ex14-container');

var d = new Date(2013, 6, 23);  // 2013년 7월 23일 (월은 0부터 시작)

// getYear()는 오래된 메서드입니다. getFullYear() 사용을 권장합니다.
let htmlContent = `
  년도: ${d.getFullYear()}<br>
  월: ${d.getMonth() + 1}<br>
  일은: ${d.getDate()}<br>
  요일은: ${d.getDay()} (0:일, 1:월, ...)<br>
  시는: ${d.getHours()}<br>
  분은: ${d.getMinutes()}<br>
  초는: ${d.getSeconds()}<br>
  밀리초: ${d.getMilliseconds()}<hr>
`;
 
// setYear()도 오래된 메서드입니다. setFullYear()를 사용하세요.
d.setFullYear(2014);  // 2014년으로 설정
htmlContent += `${d}<hr>`;
htmlContent += `변경된 요일: ${d.getDay()}<hr>`;

d.setMonth(11); // 12월로 설정 (월은 0부터 시작하므로 11이 12월)
htmlContent += `${d}<hr>`;

var currentDate = new Date();
var year = currentDate.getFullYear();
var month = currentDate.getMonth() + 1;
var day = currentDate.getDate();
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();

htmlContent += `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분 ${seconds}초`;

function displayDate() {
    htmlContent
        += `<hr>`
        + new Date().getFullYear() + `년 `
        + (new Date().getMonth() + 1) + `월 `
        + new Date().getDate() + `일 `;
}

displayDate();

var funcDisplayDate = function() {
    htmlContent
        += `<hr>`
        + new Date().getFullYear() + `년 `
        + (new Date().getMonth() + 1) + `월 `
        + new Date().getDate() + `일 `;
}

funcDisplayDate();

// 생성된 내용을 div의 innerHTML로 설정하여 화면에 표시합니다.
resultDiv.innerHTML = htmlContent;
