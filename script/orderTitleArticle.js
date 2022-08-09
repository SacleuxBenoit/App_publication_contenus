let containerArticle = document.getElementById('containerArticle');

let displayTitle = function () {
    fetch("https://127.0.0.1:8000/api/articles", { method: "GET" })
      .then(function (response) {
        return response.json();
      })
      .then((responseJSON) => {
        responseJSON["hydra:member"].reverse().forEach((article) => {

            // create div && paragraph
            let divArticle = document.createElement('div');
            let p = document.createElement('p');

            // verify if date exist, if yes : display title && date
            if(article["published_at"] !== undefined){
              divArticle.innerHTML += article["title"];
              p.innerHTML += article["published_at"];
            }

            // create a div inside containerArticle
            containerArticle.appendChild(divArticle);
            containerArticle.appendChild(p);

            // console.log() (i'll delete that before merging)
            console.log(article);
            console.log(article["published_at"]);
        });
      });
  };

  document.addEventListener("DOMContentLoaded", displayTitle);