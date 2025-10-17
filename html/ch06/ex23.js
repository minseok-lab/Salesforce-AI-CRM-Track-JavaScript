function onLoad() {
    // 1. BrowserDetect 객체를 초기화합니다.
    BrowserDetect.init();

    // 2. 결과를 표시할 div 요소를 가져옵니다.
    const container = document.getElementById('ex23-container');

    // 3. 감지된 브라우저 정보를 문자열로 만듭니다.
    const browserInfo = `
        브라우저: ${BrowserDetect.browser}<br>
        버전: ${BrowserDetect.version}<br>
        운영체제: ${BrowserDetect.OS}
    `;

    // 4. div 요소의 내용(innerHTML)으로 설정합니다.
    container.innerHTML = browserInfo;
}
