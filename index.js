const display = document.getElementById("display");

function showToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calcular() {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Error";
    }
}