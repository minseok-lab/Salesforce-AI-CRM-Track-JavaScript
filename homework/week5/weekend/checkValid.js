// HTML 문서가 모두 로드되면 이 코드를 실행합니다.
$(document).ready(function () {
  // 폼의 submit 이벤트를 감시합니다.
  $("#join-form").submit(function (e) {
    // 각 모듈 파일에 정의된 검증 함수들을 순서대로 호출합니다.
    // 각 함수는 유효하면 true, 아니면 false를 반환합니다.
    var isNameValid = validateName(); // valuedID.js
    var isEmailValid = validateEmail(); // valuedEmail.js
    var isPasswordValid = validatePassword(); // valuedPW.js

    // 단 하나의 검증이라도 실패했다면(false 라면)
    if (!isNameValid || !isEmailValid || !isPasswordValid) {
      // 1. 폼의 기본 제출(submit) 동작을 막습니다.
      e.preventDefault();

      // 2. 사용자에게 알림을 보냅니다.
      alert("입력 정보를 다시 확인해주세요.");
    }
    // 모든 검증이 true를 반환하면, 코드는 아무것도 막지 않고
    // 폼은 정상적으로 action에 지정된 주소로 제출됩니다.
  });
});
