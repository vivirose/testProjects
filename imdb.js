const IMDB_URL = "https://imdb-api.com/en/API/Top250Movies/k_069znjik"


fetch(IMDB_URL)
  .then(response => response.json())
  .then(data => {
    const films = [];
    for(let i = 0; i < data.items.length; i++){
        films.push(data.items[i]);
        }
        console.log(films);
        const movies = document.getElementById('movies');
        films.forEach((item) =>{
            let div = document.createElement("div");
            div.innerHTML = `<div>${item.title}</div><img src=${item.image}></img>`;
         

            movies.appendChild(div);
        });
    });

        // const filmtitles = document.getElementById('titles');
        // films.forEach((item) =>{
        //     let div = document.createElement("div");
        //     div.innerText = item.title;
        //     filmtitles.appendChild(div);
        // }
        //     )
        // const filmimage = document.getElementById('images');
        // films.forEach((item) =>{
        //     let div = document.createElement("img");
        //     div.src = item.image;
        //     filmimage.appendChild(div);
        // } 
        








  // como ingresar una lista de items a un elemento html