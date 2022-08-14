document.addEventListener("DOMContentLoaded", function() {
    alert("Homework 3 event`s"); 
  });


//1.mknik@ sharjeluc element@ het@ petq e sharjvi.


document.getElementById("square1").onmousemove = function(x){
    let moveDiv = document.querySelector("#divMove")
    moveDiv.style.backgroundColor = `#${Math.floor(Math.random() * 14256).toString(16)}`;
    moveDiv.style.top = x.clientY - moveDiv.clientTop + "px";
    moveDiv.style.left = x.clientX+"px";
   
  };

  

//2. mknik@ elementi vra bereluc petq e element@ haytnvi ekrani patahakan dirqum



document.getElementById("square2").onmouseover = function(){
    let moveDiv1 = document.querySelector("#divMove1")
    moveDiv1.style.backgroundColor = `#${Math.floor(Math.random() * 14256).toString(16)}`;
    moveDiv1.style.top = `${Math.floor(Math.random() * 400)}px`;
    moveDiv1.style.left = `${Math.floor(Math.random() * 1200)}px`;
  };


//3. elementi vra sexmeluc petq e element@ stana random guyn


let colorDiv = document.querySelector("#divColor")

colorDiv.onclick = func = () =>{

    colorDiv.style.backgroundColor = `#${Math.floor(Math.random() * 14256).toString(16)}`;
   
};


//4. mknikov bdi krananq element@ brnenq u texasharjenq



let elem = document.getElementById('block');

let moveBlock = (event) =>{
    elem.style.left = event.clientX + 'px';
    elem.style.top = event.clienY + 'px'
}

elem.addEventListener("mousedown", function (event) {
    document.onmousedown = function(event) {
        moveBlock(event);
    }
})
//5. ekrani cankacac tex click eneluc element@ bdi haytnvi @dtex


  let moveDivAway = document.querySelector("#divMoveAway")

   square.onclick = function(event) {
    let fieldCoords = this.getBoundingClientRect();

    let ballCoords = {
      top: event.clientY - fieldCoords.top - square.clientTop,
      left: event.clientX - fieldCoords.left - square.clientLeft - divMoveAway.clientWidth / 2
    };

    divMoveAway.style.left = ballCoords.left + 'px';
    divMoveAway.style.top = ballCoords.top + 'px';
  };


  document.addEventListener("mouseover", function() {
      moveDivAway.style.backgroundColor = `#${Math.floor(Math.random() * 14256).toString(16)}`;
      
    });


    //6. stexcel html-um forma (anun, axganun, email, tariq, ser, hasce) nshvac dashterov yev submit sexmeluc tpeq formai arjeqner@ console-um obyekti tesqov


    let inputSubmit = document.getElementById('submit')
    let input = document.querySelectorAll('input')
  
  
    inputSubmit.onclick = func = () =>{
        inputSubmit.style.backgroundColor = "#9ccc65"
        alert("ok");
        let user = {};
        console.log(input);
        for (i in input){
            user[input[i].value]= input[i].value;  
        }
        console.log(user);
    };
  