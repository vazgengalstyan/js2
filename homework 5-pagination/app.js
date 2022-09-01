let selectedPage = 1;
let pageSize = 10;
let data = [];

let renderPagination = ()=>{
    let pageCount = Math.ceil(data.length/pageSize);
    let container = document.querySelector('#pagination');
    container.innerHTML = "";
    for (let i = 1; i <= pageCount; i++){
        container.insertAdjacentHTML(
            'beforeend',
            `<div 
                     class="pagination-item"
                     style="${i === selectedPage?'background-color: red':'background-color: white'}" 
                     onclick="changePage(${i})"
                     id="page_${i}"
                 >
                     <p>${i}</p>
                 </div>`
        )
    }
}

let renderList = ()=>{
    let listContainer = document.querySelector('#list');
    listContainer.innerHTML = '';
    let start = selectedPage * pageSize - pageSize;
    let end = selectedPage * pageSize;
    let listData = data.slice(start,end);
    listData.forEach(item=>{
        listContainer.insertAdjacentHTML(
            'beforeend',
            `<p>${item.title}</p>`
        )
    })
}

let changePage = (page)=>{
    if (page === selectedPage) return;
    document.querySelector(`#page_${selectedPage}`).style.backgroundColor = 'white';
    document.querySelector(`#page_${page}`).style.backgroundColor = 'red';
    selectedPage = 1;
    renderList();
}

(async ()=>{
    data = await fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json());
    renderPagination();
    renderList();
})();

let changePageSize = (elem) => {
    console.log(elem)
    console.log(elem.value)
    pageSize = Number(elem.value);
    renderPagination();
    renderList();

};