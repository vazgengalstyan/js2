//տնային աշխատանք 2 կալկուլյատորի ստեղծում

document.write ( "<br>");
document.write ( "<br>");
let input1 = document.createElement('input');
document.body.append(input1);
input1.id = "input1"
input1.value = "enter a number like - 1234"
document.write ( "<br>");
document.write ( "<br>");
let input2 = document.createElement('input');
document.body.append(input2);
input2.id = "input2"
input2.value = "enter only operators + - * /"
document.write ( "<br>");
document.write ( "<br>");
let input3 = document.createElement('input');
document.body.append(input3);
input3.id = "input3"
input3.value = "enter a number like - 1234"
document.write ( "<br>");
document.write ( "<br>");
let button = document.createElement('button');
document.body.append(button);
button.id = "submit";
button.innerHTML = "=";
document.write ( "<br>");
let p = document.createElement('p')
document.body.append(p);
p.id = "p";

document.getElementById('submit').onclick = func = () =>{
   
	let operator = input2.value;
	let num1 = input1.value;
	let num2 = input3.value;
 

		let result;
	if(!(Number(num1)) || !(Number(num2))){
		alert('please enter a number')
	}else if(operator === '+'){
        button.textContent = 'Processing…'
		result = (Number(num1) + Number(num2))
	}else if(operator === '-'){
        button.textContent = 'Processing…'
	    result = (Number(num1) - Number(num2))
	}else if(operator === '*'){
        button.textContent = 'Processing…'
	    result = (Number(num1) * Number(num2))
	}else if(operator === '/'){
        button.textContent = 'Processing…'
	    result = (Number(num1) / Number(num2))
	}else{
		alert('not the same operator');
	}
	
	p.innerHTML = `the result of calculaiting is ${result}`;
};


