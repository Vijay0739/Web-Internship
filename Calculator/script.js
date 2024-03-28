let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let operationString = "";

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        switch (value) {
            case 'AC':
                operationString = "";
                break;
            case 'DEL':
                operationString = operationString.slice(0, -1);
                break;
            case '=':
                try {
                    operationString = eval(operationString).toString();
                } catch (error) {
                    operationString = "Error";
                }
                break;
            default:
                operationString += value;
                break;
        }

        input.value = operationString ? operationString : '0';
    });
});
