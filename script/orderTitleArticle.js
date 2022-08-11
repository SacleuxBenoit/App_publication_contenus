let buttonNextPage = document.getElementById('buttonNextPage');
let containerArticle = document.getElementById('containerArticle');
let URIapi = 'https://127.0.0.1:8000/api/articles?page='

let pageNumber = 1

let displayArticle = function () {
    fetch(URIapi + pageNumber, { method: "GET" })
      .then(function (response) {
        return response.json();
      })
      .then((responseJSON) => {
        responseJSON["hydra:member"].forEach((article) => {

            // create div && paragraph
            let divArticle = document.createElement('div');
            let titleArticleP = document.createElement('p');
            let dateArticleP = document.createElement('p');


            divArticle.className = "grid p-6 max-w-sm border border-gray-200 m-2 bg-orange-100";
            titleArticleP.innerHTML += article["title"];
            titleArticleP.className = "text-xl";
            dateArticleP.className = "text-lg"
            // verify if date exist, if yes : display title && date
            if(article["published_at"] !== undefined){
              dateArticleP.innerHTML += formatDate(article.publishedAt);
              dateArticleP.className = "pt-2"
            }else{
              dateArticleP.innerHTML = "Date non renseigné"
              dateArticleP.className = "pt-2"
            }

            // create div && paragraph
            containerArticle.appendChild(divArticle);
            divArticle.appendChild(titleArticleP);
            divArticle.appendChild(dateArticleP);

            // console.log() @TODO DELETE THAT BEFORE MERGING
            // log(article);
            // log(article["published_at"]);
            // log(article["id"]);
            // log(formatDate(article.publishedAt))
        })
      })
  }

  // change date format
  function formatDate(date) {
    let article_date = new Date(date),
        month = '' + (article_date.getMonth() + 1),
        day = '' + article_date.getDate(),
        year = article_date.getFullYear(),
        hours = '' + article_date.getHours(),
        minutes = '' + article_date.getMinutes(),
        seconds = '' + article_date.getSeconds();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    if (hours.length < 2)
        hours = '0' + hours;
    if (minutes.length < 2)
        minutes = '0' + minutes;
    if (seconds.length < 2)
        seconds = '0' + seconds;

    return 'publié le ' + [day, month, year].join('-') + ' à ' + [hours, minutes, seconds].join(':');
}

function nextPage(){
  pageNumber += 1;
  displayArticle();
}
buttonNextPage.addEventListener("click", nextPage)
document.addEventListener("DOMContentLoaded", displayArticle);