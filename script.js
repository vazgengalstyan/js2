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
