

let colors = ['red', 'yellow', 'green'];
let elements = document.getElementsByClassName('block');
let activeColor = 'red';

let changeColor = ()=>{
    let activeColorIndex = colors.indexOf(activeColor);
    activeColor = colors[activeColorIndex + 1] !== undefined ? colors[activeColorIndex + 1] : colors[0];
    if(elements[activeColorIndex + 1]){
        elements[activeColorIndex + 1].style.backgroundColor = activeColor;
    }else {
        elements[0].style.backgroundColor = activeColor;
    }
    elements[activeColorIndex].style.backgroundColor = 'white';
};


setInterval(changeColor,2000);



let element = document.querySelector('#test_id1');

setInterval(()=>{
    element.hidden = !element.hidden;
}, 1000);



let element2 = document.querySelector('#test_id8');
element2.setAttribute('test', 'aaa');

let elements2 = document.querySelectorAll('[test]');

console.log(elements2);
console.log(element2.getAttribute('test'));