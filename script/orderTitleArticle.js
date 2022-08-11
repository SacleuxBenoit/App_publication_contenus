let buttonNextPage = document.getElementById('buttonNextPage');
let containerArticle = document.getElementById('containerArticle');
let URIapi = 'https://127.0.0.1:8000/api/articles?page=';

// var that will be increment when press button (voir plus)
let pageNumber = 1;

let displayArticle = function() {
    fetch(URIapi + pageNumber, { method: "GET" })
      .then(function (response) {
        return response.json();
      })
      .then((responseJSON) => {
        let articleArr = responseJSON["hydra:member"];

        // take article that have a date + sort them
        articleArr = articleArr.filter(function(x) {
          if (x.published_at) {
            return true;
          }
        }).sort(function(x,y) {
          if(x.published_at >= y.published_at){
            return -1;
          }else if(x.published_at <= y.published_at){
            return + 1;
          }else{
            return 0;
          } 
        })

        // display 10 articles 
        for(let i = 0; i <= 9;i++){

            // create div && paragraph
            let divArticle = document.createElement('div');
            let titleArticleP = document.createElement('p');
            let dateArticleP = document.createElement('p');

            divArticle.className = "grid lg:p-6 lg:max-w-sm border border-gray-200 m-2 bg-orange-100";
            titleArticleP.innerHTML += articleArr[i].title;
            titleArticleP.className = "text-xl";
            dateArticleP.className = "text-lg";

            // if date exist display it
            if(articleArr[i].published_at !== undefined){
              dateArticleP.innerHTML += formatDate(articleArr[i].publishedAt);
              dateArticleP.className = "pt-2"
            }

            // display div && paragraph
            containerArticle.appendChild(divArticle);
            divArticle.appendChild(titleArticleP);
            divArticle.appendChild(dateArticleP);
        }
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

function nextPage() {
  pageNumber += 1;
  displayArticle();
}

buttonNextPage.addEventListener("click", nextPage);
document.addEventListener("DOMContentLoaded", displayArticle);