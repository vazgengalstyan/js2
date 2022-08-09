let data = {
    "Рыбы":{
        "форелъ":{},
        "лососъ":{}
    },
    "Деревя":{
        "Огромные":{
            "секвоя":{},
            "дуб":{}
        },
        "Цветковые":{
            "яблоня":{},
            "магнолия":{}
        }
    }
}

/*let data = {
    Fish: {
      trout: {},
      salmon: {}
    },
  
    Tree: {
      Huge: {
        sequoia: {},
        oak: {}
      },
      Flowering: {
        "apple tree": {},
        magnolia: {}
      }
    }
  };*/

function getList(data){
    let ul = document.createElement("ul");

    for(let  key in obj){
        let li = document.createElement("li");
        li.innerText = key;

        let list = getList(obj[key]);
        li.append(list);
        ul.append(li);
        list.style.color = "red"

    }
    return ul;


}

document.body.prepend(getList(data));


let arr = [
    { element: 'p', content: 'test text', id: 1 },
    { element: 'div', class: 'block', id: 2 },
    { element: 'input', value: 'test'}
]


arr.forEach(function(item){
let list = document.createElement(item.element);
for(let key in item){
list.innerText = item[key]
list.setAttribute(key,item[key])

}
document.body.append(list)
})
