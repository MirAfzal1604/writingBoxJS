"use strict";

const textareaAll = document.querySelector(".text_area");
const textareaLength = textareaAll.getAttribute("maxlength");
const words = document.querySelector(".symbols span");

words.innerHTML = textareaLength;

textareaAll.addEventListener("keyup", txtsetCount);
textareaAll.addEventListener("keydown", function(event) {
    if (event.repeat) txtsetCount();
});

function txtsetCount() {
    const txtCoundResult = textareaLength - textareaAll.value.length;
    words.innerHTML = txtCoundResult;

    if (txtCoundResult > 50) {
        words.style.color = "#00cc00";
    } else if (txtCoundResult > 21) {
        words.style.color = "gold";
    } else {
        words.style.color = "red";
    }
};