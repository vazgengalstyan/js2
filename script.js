let saveStorage = () => {
    let value = document.querySelector('#input_email').value;
    localStorage.setItem('email', value);
    document.getElementById('first_container').style.display = 'none';
    document.querySelector('#email_address').innerHTML = `Email: ${value}`;
    document.getElementById('second_container').style.display = 'flex';
}

let removeStorage = () => {
    localStorage.removeItem('email');
    document.querySelector('#input_email').value = '';
    document.querySelector('#input_password').value = '';
    document.getElementById('second_container').style.display = 'none';
    document.getElementById('first_container').style.display = 'block';
}
let column1 = document.querySelector('#column_1');
let column2 = document.querySelector('#column_2');
let column3 = document.querySelector('#column_3');

let takeElement = (elem)=>{
    let parent = elem.parentElement;
    let moveElement = (event)=>{
        elem.style.position = 'absolute';
        elem.style.left = `${event.pageX}px`;
        elem.style.top = `${event.pageY}px`;
    }
    let handleMouseup = (event)=>{
        let positionElem = checkElemPosition(event);
        elem.style.position = 'static';
        //divերը մեծից փոքր իրար վրա դնել չի ստացվում
        if(!(elem.previousElementSibling) && (positionElem.children.length === 0 || (positionElem.children.length !== 0
            && parseFloat(getComputedStyle(elem).width < parseFloat(getComputedStyle(positionElem.firstElementChild).width))))) {
            positionElem.prepend(elem)
        };

        document.body.removeEventListener('mousemove', moveElement);
        document.body.removeEventListener('mouseup', handleMouseup);
    }

    let checkElemPosition = (event)=>{
        let centerX = event.pageX;
        let centerY = event.pageY;

        if(centerX >= column1.offsetLeft && centerX <= column1.offsetLeft + column1.offsetWidth
            && centerY >= column1.offsetTop && centerY <= column1.offsetTop + column1.offsetHeight
        ){
            return column1
        }
        if(centerX >= column2.offsetLeft && centerX <= column2.offsetLeft + column2.offsetWidth
            && centerY >= column2.offsetTop && centerY <= column2.offsetTop + column2.offsetHeight
        ){
            return column2
        }
        if(centerX >= column3.offsetLeft && centerX <= column3.offsetLeft + column3.offsetWidth
            && centerY >= column3.offsetTop && centerY <= column3.offsetTop + column3.offsetHeight
        ){
            return column3
        }
        return parent;
    }

    document.body.addEventListener('mousemove', moveElement);
    document.body.addEventListener('mouseup', handleMouseup);
}