let elem = document.querySelector('#div-id');
elem.addEventListener('hello',(event)=>{
  alert(`hello of ${event.target.tagName}`);
});

let event = new Event('hello',{bubles:true});

setTimeout(()=>{
  elem.dispatchEvent(event)
}, 2000);


let res = 0
up.onclick = function(){
  res++;
  number.innerText = res
}

down.onclick = function(){
  res--;
  number.innerText = res
};

let elem1 = document.querySelector('#input');

// elem1.addEventListener('focus', ()=>{
//   elem1.style.outline = "1px solid red"
// });

// elem1.addEventListener('blur', ()=>{
//   elem1.style.outline = "none"
// });


///amen nshvac varkyany mek kdne u khane focusic inkn iran 

// setTimeout(()=>{
//   elem.focus();
// },1000);

// setTimeout(()=>{
//   elem.blur();
// },3000);

// elem1.addEventListener('focus', ()=>{
//   console.log('focus');
// });

// elem1.addEventListener('blur', ()=>{
//   console.log('blur');

// });

///misht focusi mej kpahe 
// elem1.focus();

// elem1.addEventListener('blur',()=>{
//   elem1.focus();
// })



