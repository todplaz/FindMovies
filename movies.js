
/*
document.querySelector("#search").addEventListener('input', function() {
  document.querySelector('#button').submit(function(e){
  e.preventDefault();
    //if(this.value.length == 4){

      //const key = "8e5064c"
      let url = `http://www.omdbapi.com/?s=${this.value}&apikey=8e5064c`;

      //on contacte notre server avec la methode fetch, je recupère la promesse en reponse avec then,puis on traite la requete avec response(en formattant d'abord la reponse en json)
      //le formatage nous renvoie une nouvelle promesse .then , puis on recupère les datas envoyées par le serveur

     fetch(url).then(response => response.json().then(data => console.log(data)));
    //}
  })
});
*/




document.querySelector("#button").addEventListener('click', function(e){
  e.preventDefault();
});
  document.querySelector("#search").addEventListener('input', function(e){
    e.preventDefault();

    if(this.value.length >= 4){
    let url = `http://www.omdbapi.com/?s=${this.value}&apikey=8e5064c`;

    fetch(url).then((response) => response.json().then((data) => {
      console.log(data);
      let affichage = '';
      
      for (let titre of data.Search) {
        let urls = `http://www.omdbapi.com/?t=${titre.Title}&apikey=8e5064c`;
        
        
        
        affichage += `<div class="border rounded bg-warning"><p>${titre.Title}</p> <img src="${titre.Poster}"> <p>${titre.Year}</p> <button class="btn btn-primary mb-3">Plus d'infos</buton></div><br>`;

      }
     
      document.querySelector('#title').innerHTML = affichage;
    }));
  }
  });
