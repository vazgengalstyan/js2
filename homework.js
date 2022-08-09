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


function tree(data){
    let ul = document.createElement("ul");

        for(let  key in data){
        let li = document.createElement("li");
        li.innerHTML = key;

        let list = tree(data[key]);
        li.append(list);
        ul.append(li);
        list.style.color = "red"
       
        }
    
        return ul;

}
document.body.prepend(tree(data));
