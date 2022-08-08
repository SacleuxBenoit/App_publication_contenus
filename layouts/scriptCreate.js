//liaison du JS avec les éléments HTML
let getTitle = document.getElementById('formTitle')
let getBody = document.getElementById('formBody')
let getWriter= document.getElementById('formWriter')
let getDate = document.getElementById('formDate')
let getTags = document.getElementById('formTags')
let buttonSubmit = document.querySelector('#submit')

//URL 
let fetchURL = 'https://127.0.0.1:8000/api/articles'


function send() { 
    var parameters = {
        'title': getTitle.value,
        'body': getBody.value,
        'tags': getTags.value,
        'writer': getWriter.value,
        'date': getDate.value
        
    } 
    fetch(fetchURL, { 
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(parameters)
    })
    .then((response) => response.json)
    .then(function(articles)  {
        console.log(articles)
    })
}

buttonSubmit.addEventListener('click', send)