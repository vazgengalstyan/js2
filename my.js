let list = document.getElementById('forms');
let lists = list.elements;
console.log(lists)

let btn = list.querySelector('[type = "button"]')
 
btn.addEventListener("onclick",clearStorage );

function clearStorage(){
	localStorage.clear()
}

for(let i = 0; i < lists.length; i++){
	lists[i].addEventListener("change",changeHendler)
}

function changeHendler(){
localStorage.setItem(this.name,this.value)
		

}
