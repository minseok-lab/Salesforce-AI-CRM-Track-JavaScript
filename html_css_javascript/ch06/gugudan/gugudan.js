
const gugudanContainer = document.getElementById('gugudan-container');

let htmlContent = '';

htmlContent += '<table class="tbl-ex">';

htmlContent += '<tr>';
for (let i = 2; i <= 9; i++) {
    htmlContent += '<th>' + i + '단</th>';
}
htmlContent += '</tr>';

for (let j = 1; j <= 9; j++) {
    htmlContent += '<tr>'; // 각 행 시작
    for (let k = 2; k <= 9; k++) {
        htmlContent += '<td>' + k + ' x ' + j + ' = ' + (k * j) + '</td>';
    }
    htmlContent += '</tr>'; // 각 행 끝
}

htmlContent += '</table>';

gugudanContainer.innerHTML = htmlContent;