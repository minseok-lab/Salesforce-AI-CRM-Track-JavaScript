// HTML 문서가 모두 로드되면 이 코드를 실행하라는 의미입니다.
$(document).ready(function () {
    // 비밀번호 입력창에서 포커스가 벗어날 때마다 검사 실행
    $("#password1, #password2").on("blur", function () {
        validatePassword();
    });

    // submit 이벤트 처리
    $("#join-form").submit(function (e) {
        e.preventDefault();

        // 최종적으로 비밀번호 유효성 검사 실행
        var isPasswordValid = validatePassword();

        // 만약 비밀번호가 유효하지 않으면, 폼 제출을 막습니다.
        if (!isPasswordValid) {
            e.preventDefault(); // submit 이벤트 동작 막기
            alert("비밀번호를 확인해주세요.");
        }
    });
}); // ready 함수의 끝

/**
 * 비밀번호 유효성을 검사하고, 메시지를 표시하는 함수
 * @returns {boolean} - 유효하면 true, 아니면 false를 반환
 */
function validatePassword() {
    var password1 = $("#password1").val();
    var password2 = $("#password2").val();
    var msgField = $("#password-msg");
    var isValid = true;

    // 허용할 문자 패턴 정의 (영어 대소문자, 숫자, 특수문자)
    const allowedPattern = /^[A-Za-z0-9!@#$%^&*()_+-=]+$/;

    // 1. 허용되지 않은 문자가 있는지 먼저 검사
    if (password1.length > 0 && !allowedPattern.test(password1)) {
        msgField.text("영어, 숫자, 특수문자만 사용할 수 있습니다.");
        isValid = false;
    // 2. 비밀번호 길이가 8자 미만인지 검사
    } else if (password1.length > 0 && password1.length < 8) {
        msgField.text("비밀번호는 8자 이상이어야 합니다.");
        isValid = false;
    // 3. 두 비밀번호가 일치하는지 검사
    } else if (password2.length > 0 && password1 !== password2) {
        msgField.text("비밀번호가 일치하지 않습니다.");
        isValid = false;
    // 4. 모든 검사를 통과한 경우
    } else {
        msgField.text(""); // 메시지 필드를 깨끗하게 비움
    }

    // 최종적으로 유효성 상태에 따라 클래스를 추가하거나 제거합니다.
    if (isValid) {
        msgField.text('');
        msgField.removeClass('form-error');
    } else {
        msgField.addClass('form-error');
    }

    return isValid;
}
