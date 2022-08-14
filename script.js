//1.mknik@ sharjeluc element@ het@ petq e sharjvi.
let firstContainer = document.querySelector('#first_container');

// let myFunc1 = (e) => {
//     firstContainer.style.top = e.clientY + 'px';
//     firstContainer.style.left = e.clientX + 'px';
// }
// document.documentElement.addEventListener('mousemove',myFunc1);

//2.mknik@ elementi vra bereluc petq e element@ haytnvi ekrani patahakan dirqum
// let myFunc2 = () => {
//     firstContainer.style.top =(Math.round(Math.random() * (window.innerHeight - firstContainer.offsetHeight))) + 'px';
//     firstContainer.style.left = (Math.round(Math.random() * (window.innerWidth - firstContainer.offsetWidth))) + 'px';
// }
//
// firstContainer.addEventListener('mouseover', myFunc2);

//3.elementi vra sexmeluc petq e element@ stana random guyn

// let thirdContainer = document.querySelector('#third_small_container');
//
// let changeColor = () => {
//     thirdContainer.style.backgroundColor = `#${Math.round(Math.random() * 16777215).toString(16)}`;
// }
//
// thirdContainer.addEventListener('click',changeColor);

//4.mknikov bdi krananq element@ brnenq u texasharjenq

// let myFunc3 = (e) => {
//     e.preventDefault();
//     firstContainer.style.top = e.clientY + 'px';
//     firstContainer.style.left = e.clientX + 'px';
// }
//
// document.addEventListener('dragover',myFunc3);

//5.ekrani cankacac tex click eneluc element@ bdi haytnvi @dtex
//
// let myFunc4 = (e) => {
//     firstContainer.style.top = e.clientY + 'px';
//     firstContainer.style.left = e.clientX + 'px';
// }
// document.documentElement.addEventListener('click',myFunc4);

//6.stexcel html-um forma (anun, axganun, email, tariq, ser, hasce) nshvac dashterov yev submit sexmeluc tpeq formai
// arjeqner@ console-um obyekti tesqov

let form = document.querySelector('#main_form');
let inputArray = document.querySelectorAll('input');

let getValueInputs = (e) => {
    e.preventDefault();
    let obj = {};
    for(let item of inputArray) {
        if(item.type === 'submit') {
            continue;
        };
        obj[item.name] = item.value;
    }
    console.log(obj);
}
form.addEventListener('submit',getValueInputs);


