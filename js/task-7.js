const inputFontSizeControl = document.querySelector('#font-size-control');
console.log(inputFontSizeControl);

let textChange = document.querySelector('#text');
console.log(textChange);

const fontSizeChange = function () {
  textChange.style.fontSize = `${inputFontSizeControl.value}px`;
};

inputFontSizeControl.addEventListener("input", fontSizeChange);