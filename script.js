let colors = ['red','green','yellow'];
let element = document.getElementById('test_id');
let elements = document.getElementById('test_id1');
let elements1 = document.getElementById('test_id2');
let selectedColorIndex = 1


let changeColor = ()=>{
	
	if(selectedColorIndex < colors.length - 1){
		selectedColorIndex++
	}else{
		selectedColorIndex = 0
	}
	element.style.backgroundColor = colors[selectedColorIndex]
	selectedColorIndex = (selectedColorIndex +1) % colors.length
}
setInterval(changeColor,1000);

function changColors (){
	elements.style.backgroundColor = colors[selectedColorIndex];
	selectedColorIndex = (selectedColorIndex +1) % colors.length
}
setInterval( changColors,1000);


function  changColors1 (){
	elements1.style.backgroundColor = colors[selectedColorIndex];
	selectedColorIndex = (selectedColorIndex +1) % colors.length
}
setInterval( changColors1,1000)