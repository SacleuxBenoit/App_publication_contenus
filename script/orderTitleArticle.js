let containerArticle = document.getElementById('containerArticle');

let displayTitle = function () {
    // then we fetch data and fill the select
    fetch("https://127.0.0.1:8000/api/articles?page=1", { method: "GET" })
      .then(function (response) {
        return response.json();
      })
      .then((responseJSON) => {
        responseJSON["hydra:member"].forEach((article) => {
            let divArticle = document.createElement('div');
            let p = document.createElement('p');
            divArticle.innerHTML += article["title"];
            containerArticle.appendChild(divArticle);
        });
      });
  };

  document.addEventListener("DOMContentLoaded", displayTitle);