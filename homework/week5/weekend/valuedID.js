/**
 * 이름 필드의 값을 대문자로 변경하는 함수.
 * @returns {boolean} - 항상 true를 반환하여 유효성 검사를 통과시킴.
 */
function validateName() {
    var nameInput = $("#name");
    var name = nameInput.val();

    // 이름이 비어있지 않다면 대문자로 변경, 빈 문자면 오류 메시지 표시
    if (name.trim() === "") {
        $("#checkname-msg").text("이름을 입력하세요.");
    } else {
        nameInput.val(name.toUpperCase());
        // 유효하면 메시지를 지움
        $("#checkname-msg").text("\n");
    }

    return true;
}

// 문서가 준비되면 이름(name) 입력 필드에 blur 이벤트 추가
$(document).ready(function () {
    $("#name").on("blur", validateName);
});
