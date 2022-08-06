

let elem = document.querySelectorAll('a')
let arr = [elem];
function link(arr){
	for(let i = 0;i<arr.length;i++){
		if(i%2  !==0){
			arr[i].style.color = 'red'
		}
	}
}
console.log(link(elem))