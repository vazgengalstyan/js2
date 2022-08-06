


let elem = document.querySelectorAll('a')
let arr = [elem];
function getLink(arr){
	for(let i = 0;i < elem.length; i++){
		if(i%2  !==0){
			elem[i].style.color = 'red'
		}
	}
}
getLink()




let array = []
function getHref(elem){
    let array = []
	for(let i = 0;i<elem.length;i++){
    arr.push(elem[i].getAtribute('href'))
}
return array
}
console.log(arr)



function getAtribut(elem){
    
	for(let i = 0;i<elem.length;i++){
    elem[i].setAttribute("test","Hy")
	console.log(elem[i])
}

}


getAtribut(elem)


function dell(elem){
    
	for(let i = 0;i<elem.length;i++){
   if(i%2 !==0){
	elem[i].removeAttribute('href')
}
     console.log(elem[i])
	}


}
dell(elem)


getAtribut(elem)