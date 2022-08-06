//Ստեղծել html document և ավելացնել 6 հատ հղում a tag-ի միջոցով։
// js-ում ստանալ հղումները և ամեն երկրորդի գույնը դարձել կարմիր։
// հղումներից ստանալ href-ները և լցնել մասիվի մեջ։  (մասիվը տպել):
// հղումներին ավելացնել ոչ ստանդարտ attribute։ Օրինակ test attribute, ինչ-որ value-ով։
// հղումներին ավելացնել ստանդարտ target attribute _blank value-ով։
// ջնջել href attribute-ը ամեն երկրորդ հղումից։

let links = document.querySelectorAll('a');
console.log(links);


let setColor = () => {
    for(let i=0; i<links.length;i++){
        if(i % 2 !== 0){
            links[i].style.color = 'red';
        }
    }
}

setColor();

let getAttr = () => {
    let arr = [];
    for(let item of links) {
        arr.push(item.getAttribute('href'));
    }
    return arr;
}

console.log(getAttr());


let addAttr = () => {
    for(let i=0; i < links.length; i++) {
        links[i].setAttribute('test', 'testValue');
        console.log(links[i].attributes);
    }
}

addAttr();


let removeAttr = () => {
    for(let i = 0; i < links.length; i++) {
        if(i % 2 !== 0){
            links[i].removeAttribute('href');
            console.log(links[i].attributes);
        }
    }
}

removeAttr();








