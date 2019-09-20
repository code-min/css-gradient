let color1Input = document.querySelector("input[name='color1']");
let color2Input = document.querySelector("input[name='color2']");
let button = document.querySelector("form").addEventListener("submit", createGradient);
let body = document.querySelector("body");
let selection = document.querySelector("select");
let cssResult = document.querySelector(".codeCSS");

function createGradient(e) {
    e.preventDefault();
    let direction = selection.options[selection.selectedIndex].value;
    if(direction === "") {
        body.style.backgroundImage = `linear-gradient(${color1Input.value}, ${color2Input.value})`;
        cssResult.innerHTML = `background-image: linear-gradient(${color1Input.value}, ${color2Input.value});`;
    } else {
        body.style.backgroundImage = `linear-gradient(${direction}, ${color1Input.value}, ${color2Input.value})`;
        cssResult.innerHTML = `background-image: linear-gradient(${direction}, ${color1Input.value}, ${color2Input.value});`;
    }
}