let column1 = document.querySelector('#column_1');
let column2 = document.querySelector('#column_2');
let column3 = document.querySelector('#column_3');

let takeElement = (elem)=>{
    if(elem.previousElementSibling){
        return
    }
    let parent = elem.parentElement;
    let moveElement = (event)=>{
        elem.style.position = 'absolute';
        elem.style.left = `${event.pageX}px`;
        elem.style.top = `${event.pageY}px`;
    }

    let handleMouseup = (event)=>{
        let positionElem = checkElemPosition(event);
        elem.style.position = 'static';
        positionElem.prepend(elem);

        document.body.removeEventListener('mousemove', moveElement);
        document.body.removeEventListener('mouseup', handleMouseup);
        document.removeEventListener('mouseleave', handleMouseup);
    }

    let checkElemPosition = (event)=>{
        let currentX = event.pageX;
        let currentY = event.pageY;
        if(currentX >= column1.offsetLeft && currentX <= column1.offsetLeft + column1.offsetWidth
            && currentY >= column1.offsetTop && currentY <= column1.offsetTop + column1.offsetHeight
        ){
            if(column1.firstChild && column1.firstChild.offsetWidth < elem.offsetWidth){
                return parent
            }
            return column1
        }
        if(currentX >= column2.offsetLeft && currentX <= column2.offsetLeft + column2.offsetWidth
            && currentY >= column2.offsetTop && currentY <= column2.offsetTop + column2.offsetHeight
        ){
            if(column2.firstChild && column2.firstChild.offsetWidth < elem.offsetWidth){
                return parent
            }
            return column2
        }
        if(currentX >= column3.offsetLeft && currentX <= column3.offsetLeft + column3.offsetWidth
            && currentY >= column3.offsetTop && currentY <= column3.offsetTop + column3.offsetHeight
        ){
            if(column3.firstChild && column3.firstChild.offsetWidth < elem.offsetWidth){
                return parent
            }
            return column3
        }
        return parent;
    }

    document.body.addEventListener('mousemove', moveElement);
    document.body.addEventListener('mouseup', handleMouseup);
    document.addEventListener('mouseleave', handleMouseup)
}







