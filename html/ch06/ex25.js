function onLoad() {
    mDowm(this);
    mUp(this);
}

function mDowm(obj) {
    obj.style.backgroundColor="#1ec5e5";
    obj.innerHTML="버튼을 떼주세요.";
}

function mUp(obj) {
    obj.style.backgroundColor="#D94A38";
    obj.innerHTML="클릭하세요!";
}