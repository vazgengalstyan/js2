let step = "x";

let clickItem = (elem) => {
  if (!elem.innerText){
    elem.innerText = step
    
    step = step === "x" ? "0" : "x"
  }
  if (step === "0"){
    elem.style.color = "red"
  } 
  if (step === "x"){
    elem.style.color = "blue"
  } 
};


  let getContainer = document.querySelector('.container');
  console.log(getContainer);
  let gameInitial = getContainer.innerHTML;
  console.log(gameInitial);

  let startAgain = ()=>{
    getContainer.innerHTML = gameInitial;
    step = "x"
  }

console.log(startAgain())
