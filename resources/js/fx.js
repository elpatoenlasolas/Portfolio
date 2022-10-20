// Intro sequence swap FX
let welcome = document.getElementsByClassName('intro')[0]; 

// Changes the word WELCOME to ENTER when hovered.
function mouseOn() {
    welcome.innerHTML = 'ENTER';
}
welcome.onmouseover = mouseOn;

// Changes the word back to WELCOME after hovering.
function mouseOut() {
    welcome.innerHTML = 'WELCOME';
}
welcome.onmouseout = mouseOut;

// -- -- -- -- //
