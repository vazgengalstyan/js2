
//1.js-ում ստանալ հղումները և ամեն երկրորդի գույնը դարձել կարմիր։


let elem = document.getElementsByTagName('a');
let arr = [];

function start() {
	for (let i = 0; i < elem.length; i++) {
 			elem[i].style.color = 'red'
            arr.push(elem[i].href);
	}
    
 }  

  start();
//2.հղումներից ստանալ href-ները և լցնել մասիվի մեջ։  (մասիվը տպել):
  console.log(arr);

  
//3.հղումներին ավելացնել ոչ ստանդարտ attribute։ Օրինակ test attribute, ինչ-որ value-ով։

let elements = document.querySelector('.test_1');

elements.setAttribute('test', 'hi');
console.log(elements);
console.log(elements.getAttribute('test'));


//4. հղումներին ավելացնել ստանդարտ target attribute _blank value-ով։



let target = Array.from(document.querySelectorAll("a"))

for (i in target){
    target[i].setAttribute("target", "blank")
}
console.log(target);

//5.ջնջել href attribute-ը ամեն երկրորդ հղումից։

let all_links = document.getElementsByTagName("a");
function start1() {
for(let i=0; i<all_links.length; i++){
    all_links[i].removeAttribute("href");
   
}
}
start1();
console.log(all_links);