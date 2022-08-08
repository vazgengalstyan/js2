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







