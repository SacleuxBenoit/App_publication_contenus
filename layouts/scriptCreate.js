//liaison du JS avec les éléments HTML
let getTitle = document.getElementById('formTitle')
let getBody = document.getElementById('formBody')
let getWriter= document.getElementById('formWriter')
let getDate = document.getElementById('formDate')
let getTags = document.getElementById('formTags')
let buttonSubmit = document.querySelector('#submit')
let buttonLocalSubmit = document.querySelector('#submitLocal')
//URL de l' API utilisée
let fetchURL = 'https://127.0.0.1:8000/api/articles'


function send() { 
    //paramètres enregistrés en BDD
    var parameters = {
        "title": getTitle.value,
        "body": getBody.value,
        "tags": [
                getTags.value
            ],
        "writer": getWriter.value,
        "publishedAt": getDate.value
        
    } 
    /*je fetche l'URL en paramètre de ma variable fetchURL, le header est l'une des conditions d'un CORS
fonctionnel, l'autre*/
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
//fonction d'envoi des informations dans le localstorage
function sendToLocal(){
    /*envoi des données dans le localStorage de manière persistente 
    (à la différence ud sessionStorage qui s'efface à chaque reouverture)*/
    localStorage.setItem("titre", getTitle.value)
    let titleItem = localStorage.getItem("titre")

    localStorage.setItem("Body", getBody.value)
    let bodyItem = localStorage.getItem("body")
    
    localStorage.setItem("tags", getTags.value)
    let TagsItem = localStorage.getItem("tags")

    localStorage.setItem("writer", getWriter.value)
    let writerItem = localStorage.getItem("writer")

    localStorage.setItem("date", getDate.value)
    let dateItem = localStorage.getItem("date")
    //faire de la gestion d'erreurs
}


//eventlisteners
buttonSubmit.addEventListener('click', send)
buttonLocalSubmit.addEventListener('click', sendToLocal)


