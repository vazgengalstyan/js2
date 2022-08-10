let calculateNumber = () => {
    let firstInput = Number(document.querySelector('#first_input').value);
    let secondInput = document.querySelector('#second_input').value;
    let thirdInput = Number(document.querySelector('#third_input').value);
    let result;
    switch(secondInput) {
        case '+':
           result = firstInput + thirdInput;
           break;
        case '-':
            result = firstInput - thirdInput;
            break;
        case '*':
            result = firstInput * thirdInput;
            break;
        case '/':
            result = firstInput / thirdInput;
            if(thirdInput === 0) {
                alert('Is not divitible by 0');
                return null;
            }
            break;
        case '%':
            result = firstInput % thirdInput;
            break;
        default:
            alert('Please enter only +, -, /, * operators');
            return null;
    }
    if(result !== null) {
        alert(firstInput + secondInput + thirdInput + '=' + result);
    }
}




