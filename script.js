let display = document.getElementById('display');

function appendNumber(num) {
    display.value += num;
}

function appendOperator(operator) {
    display.value += operator;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        alert("잘못된 입력입니다!");
        clearDisplay();
    }
}
