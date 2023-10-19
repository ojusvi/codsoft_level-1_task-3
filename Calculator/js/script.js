let string = "";

let display = document.getElementById('calc-display'); // Get the input field by its id

let inputs = document.querySelectorAll('input[type="button"]');

// Function to update the display and the string
function updateDisplay(value) {
    string = value;
    display.value = string;
}

// Add an event listener for keydown on the document
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
        // Evaluate the expression when the 'Enter' key is pressed
        string = eval(string);
        updateDisplay(string);
    } else if (event.key === 'Escape') {
        // Clear the display when the 'Escape' key is pressed
        string = '';
        updateDisplay(string);
    } else if (event.key === 'Backspace') {
        // Delete the last character when the 'Backspace' key is pressed
        if (string.length > 0) {
            string = string.slice(0, -1);
            updateDisplay(string);
        }
    }
});

// Add click event listeners for the buttons
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
