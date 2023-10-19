let string = "";

let display = document.getElementById('calc-display');

let inputs = document.querySelectorAll('input[type="button"]');

function updateDisplay(value) {
    string = value;
    display.value = string;
}

document.addEventListener('keydown', (event) => {
    if (event.key >= '0' && event.key <= '9') {
        string = string + event.key;
        updateDisplay(string);
    } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
        string = string + event.key;
        updateDisplay(string);
    } else if (event.key === '%' || event.key === '.') {
        string = string + event.key;
        updateDisplay(string);
    } else if (event.key === 'Enter') {
        string = eval(string);
        updateDisplay(string);
    } else if (event.key === 'Escape') {
        string = '';
        updateDisplay(string);
    } else if (event.key === 'Backspace') {
        if (string.length > 0) {
            string = string.slice(0, -1);
            updateDisplay(string);
        }
    }
});

Array.from(inputs).forEach((input) => {
    input.addEventListener('click', (event) => {
        if (event.target.value == '=') {
            string = eval(string);
            updateDisplay(string);
        } else if (event.target.value == 'C') {
            string = '';
            updateDisplay(string);
        } else if (event.target.value == 'DE') {
            if (string.length > 0) {
                let newStr = string.slice(0, -1);
                updateDisplay(newStr);
                string = newStr;
            }
        } else {
            string = string + event.target.value;
            updateDisplay(string);
        }
    });
});
