let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },
  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};

let container = document.querySelector('#container');

let myFunc = (container,data) => {
    let ul = document.createElement('ul');
    container.append(ul);
    for (let key in data) {
        let li = document.createElement('li');
        li.innerText = key;
        ul.append(li);
        if(Object.keys(data[key]).length) {
            console.log(Object.keys(data[key]))
            myFunc(ul, data[key]);
        }
    }
}

myFunc(container,data);



let array = [
    {element: 'p', content: 'test text', id: 1},
    {element: 'div', class: 'block', id: 2},
    {element: 'input', value: 'test'}
];

let getElements = (arr) => {
    for (let item of arr) {
        let element = document.createElement(item.element);
        if (item.content) {
            element.innerText = item.content;
        }
        for (let key in item) {
            if (key === 'element' || key === 'content') {
                continue;
            } else {
                element.setAttribute(key, item[key]);
            }
        }
        document.body.append(element);
    }
}

getElements(array);