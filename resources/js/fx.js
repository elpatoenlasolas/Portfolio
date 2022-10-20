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

// Changes the color of ENTER when active.
function mouseActive() {
    welcome.innerHTML = 'ENTER';
    welcome.style.color = '#CACACA';
}
welcome.onmousedown = mouseActive;

// Changes the color back to white after activating.
function mouseInactive() {
    welcome.style.color = 'white';
}
welcome.onmousemove = mouseInactive;


// -- -- -- -- //
