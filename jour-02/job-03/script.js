const text_displayer = document.getElementById("text-displayer");
const input_text = document.getElementById("input-text");
const buttonBold = document.getElementById("turn-text-bold");
const buttonItalic = document.getElementById("turn-text-italic");
const buttonClear = document.getElementById("clear-text");
function myDisplayText() {
    text_displayer.textContent = input_text.value;
}
function myBoldText() {
    text_displayer.style.fontWeight = "bold";
}
function myItalicText() {
    text_displayer.style.fontStyle = "italic";
}
function myClearText() {
    text_displayer.style.fontWeight = "normal";
    text_displayer.style.fontStyle = "normal";
}
input_text.addEventListener("keyup", myDisplayText);
buttonBold.addEventListener("click", myBoldText);
buttonItalic.addEventListener("click", myItalicText);
buttonClear.addEventListener("click", myClearText);