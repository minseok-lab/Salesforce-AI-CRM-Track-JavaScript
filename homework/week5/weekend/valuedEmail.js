/**
 * 이메일 형식이 유효한지 검사하고 메시지를 표시하는 함수.
 * @returns {boolean} - 유효하면 true, 아니면 false를 반환.
 */
function validateEmail() {
    const emailInput = $("#email");
    const email = emailInput.val();
    const msgField = $("#checkemail-msg");

    // 1. 이메일이 비어있는지 검사
    if (email.trim() === "") {
        msgField.text("이메일을 입력하세요.");
        msgField.addClass('form-error');
        return false; // 유효하지 않음
    }
    // 2. 이메일에 @와 .이 포함되었는지 검사
    else if (!email.includes("@") || !email.includes(".")) {
        msgField.text("올바른 이메일 형식이 아닙니다.");
        msgField.addClass('form-error');
        return false; // 유효하지 않음
    }
    // 3. 모든 검사를 통과한 경우 (유효한 경우)
    else {
        msgField.text(""); // 메시지를 비웁니다.
        msgField.removeClass('form-error');
        return true; // 유효함
    }
}

// 문서가 준비되면 이메일(email) 입력 필드에 blur 이벤트 추가
$(document).ready(function () {
    $("#email").on("blur", validateEmail);
});
