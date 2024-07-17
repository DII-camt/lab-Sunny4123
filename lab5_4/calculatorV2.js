let history = [];
let showDisplay = [];
function appendToDisplay(value) {
    showDisplay.push(value);
    let textnew = showDisplay.toString();
    document.getElementById('display').value =textnew.replaceAll(",", "");
}
function showDisplayValue(){
    let textnew = showDisplay.toString();
    document.getElementById('display').value =textnew.replaceAll(",", "");
}
function clearDisplay() {
    showDisplay = [];
    document.getElementById('display').value = '';
}

function calculate() {
    let display = document.getElementById('display');
    try {
        history.push(display.value);
        display.value = eval(display.value);
        showDisplay = [];
    } catch (e) {
        display.value = 'Error';
        showDisplay = [];
    }
}

function undo() {
    let display = document.getElementById('display');
    if (showDisplay.length > 0) {
        //display.value = history.pop();
        showDisplay.pop();
        showDisplayValue();

    } else {
        display.value = '';
    }
}
