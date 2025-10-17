var changeText = function (el) {
    console.log(el.innerHTML);
    var val = el.innerHTML;
    if (val == "Ooops!") {
        el.innerHTML = "Click on this text!";
        return;
    } else {
        el.innerHTML = "Ooops!";
    }
}

// el = HTML의 element