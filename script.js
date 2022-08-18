let arr = [];

async function getPosts() {
    let response = await fetch('https://restcountries.com/v3.1/all', {
        method: 'GET'
    }).then(response => response.json());
    arr = await response.filter(item => item.continents.includes('Asia'));
}
getPosts();

let table = document.querySelector('table');
let ul = document.querySelector('ul');


let pageCount = 10;
let count;
let items = [];

setTimeout(() => {
    count = Math.ceil(arr.length / pageCount);
    for(let i = 1; i <= count; i++) {
        let li = document.createElement('li');
        ul.append(li);
        li.innerText = i;
        items.push(li);
    }

    for(let item of items) {
        item.addEventListener('click', function() {
            let active = document.querySelector('li.active');
            if(active) {
                active.classList.remove('active');
            }
            this.classList.add('active');
            let pageNum = +this.innerText;
            let start = (pageNum - 1) * pageCount;
            let end = start + pageCount;

            let posts = arr.slice(start,end);
            table.innerHTML = '';
            for(let post of posts) {
                let tr;
                tr = document.createElement('tr');
                table.append(tr);
                let td;
                td = document.createElement('td');
                td.innerText = post.continents;
                tr.append(td);

                td = document.createElement('td');
                td.innerText = post.capital;
                tr.append(td)

                td = document.createElement('td');
                td.innerText = post.timezones;
                tr.append(td);
            }
        })
    }
},1500)



