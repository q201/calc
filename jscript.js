/* eslint-disable no-eval */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const operators = ['+', '-', '*', '/'];
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function toLabel(x) {
    const labelElement = document.getElementById('label');
    let exp = labelElement.innerHTML;

    if (x === 'c') {
        labelElement.innerHTML = "";
        return;
    } 

    if (x === "=") {
        try {
            const result = eval(exp);
            labelElement.innerHTML = "";
            document.getElementById('ans').innerHTML = "ans=" + result;
        } catch (e) {
            labelElement.innerHTML = "Error";
        }
        return;
    }

    if (x === "%") {
        try {
            const result = eval(exp) / 100;
            labelElement.innerHTML = result;
        } catch (e) {
            labelElement.innerHTML = "Error";
        }
        return;
    }

    if (x === "Del") {
        labelElement.innerHTML = exp.slice(0, -1);
        return;
    }

    // Prevent multiple operators or multiple decimal points in a single number
    const lastChar = exp[exp.length - 1];
    if (operators.includes(lastChar) && operators.includes(x)) {
        return;
    }

    const parts = exp.split(/[\+\-\*\/]/);
    const lastPart = parts[parts.length - 1];
    if (lastPart.includes('.') && x === '.') {
        return;
    }

    labelElement.innerHTML += x;
}
