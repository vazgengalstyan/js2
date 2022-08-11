// let calculateNumber = () => {
//     let firstInput = Number(document.querySelector('#first_input').value);
//     let secondInput = document.querySelector('#second_input').value;
//     let thirdInput = Number(document.querySelector('#third_input').value);
//     let result;
//     switch(secondInput) {
//         case '+':
//            result = firstInput + thirdInput;
//            break;
//         case '-':
//             result = firstInput - thirdInput;
//             break;
//         case '*':
//             result = firstInput * thirdInput;
//             break;
//         case '/':
//             result = firstInput / thirdInput;
//             if(thirdInput === 0) {
//                 alert('Is not divitible by 0');
//                 return null;
//             }
//             break;
//         case '%':
//             result = firstInput % thirdInput;
//             break;
//         default:
//             alert('Please enter only +, -, /, * operators');
//             return null;
//     }
//     if(result !== null) {
//         alert(firstInput + secondInput + thirdInput + '=' + result);
//     }
// }

let elem = document.getElementById('animation_div');
let positionYMax = (window.innerHeight - elem.clientHeight) + 'px';
let positionXMax = (window.innerWidth - elem.clientWidth) + 'px';
let positionXMin = '0px';
let positionYMin = '0px';
let reverse_y = true;
let reverse_x = true;

let myFunc = () => {
    if(reverse_x) {
        elem.style.left =`${elem.offsetLeft + 100}px`;
    } else {
        elem.style.left =`${elem.offsetLeft - 100}px`;
    }
    if(reverse_y) {
        elem.style.top =`${elem.offsetTop + 100}px`;
    } else {
        elem.style.top =`${elem.offsetTop - 100}px`;
    }

    if(elem.style.top > positionYMax || elem.style.top === positionYMin) {
        reverse_y = !reverse_y;
    }
    if(elem.style.left > positionXMax || elem.style.left === positionXMin) {
        reverse_x = !reverse_x;
    }

}

setInterval(myFunc,500);



