const inputFontSize = document.querySelector('input#font-size-control');
const spanText = document.querySelector('span#text');

inputFontSize.addEventListener('input', changeFontSize);

function changeFontSize() {
    spanText.style.fontSize = inputFontSize.value + 'px';
}