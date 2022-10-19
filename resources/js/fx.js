// Intro sequence swap FX
let welcome = document.getElementsByClassName('intro')[0]; 

function mouseOn() {
    welcome.innerHTML = 'ENTER';
}

welcome.onmouseover = mouseOn;

function mouseOut() {
    welcome.innerHTML = 'WELCOME';

}

welcome.onmouseout = mouseOut;

// -- -- -- -- //
