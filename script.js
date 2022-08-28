let user = [
  {
      
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      
    },
    {
      
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      
      },
      
    
    {
     
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      
      },
      
    {
     
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      
      },
     
    {
      
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
      
      },
      
    {
      
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
    },
      
    {
     
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
     
      },
      
    {
      
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me",
     
      },
     
    {
    
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
      
      },
      
    {
     
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
     
      },
      
  ]
  
  
  let table =document.querySelector("#lists")
  let items = document.querySelectorAll("#pogination button");
  
  let pog = document.querySelector("#pogination");
  
  let sum = 3;
  for(let i = 0; i<=10;i++){
    let button = document.createElement("button");
    button.innerHTML = i;
            pog.appendChild(button)
  }
  
  for(let item of items){
    item.addEventListener('click',function(){
      let page = Number(this.innerHTML);
      
      let start = (page - 1)*sum;
      
      let end = start + sum;
      
      let notes = user.slice(start,end);
    
      
      for(let note of notes ){	
      let tr = document.createElement('tr')
            table.appendChild(tr)
  
        let td;	
       td = document.createElement('td')
      td.innerHTML = note.name;
      
            tr.appendChild(td)
       td = document.createElement('td')
      td.innerHTML = note.username;
            tr.appendChild(td)
        td = document.createElement('td')
      td.innerHTML = note.email;
            tr.appendChild(td)
        
        
        
        
        
        
      }
    })
  }
  