//future links from the HTML
const getTitle = document.getElementById('formTitle');
const getBody = document.getElementById('formBody');
const getCategory = document.getElementById('formCategory');
const getWriter= document.getElementById('formWriter');
const getDate = document.getElementById('formDate');
const getTags = document.getElementById('formTags');
const buttonSubmit = document.querySelector('#submit');
const buttonLocalSubmit = document.querySelector('#submitLocal');
//list of the URLs used 
const fetchURL = 'https://127.0.0.1:8000/api/articles';
const fetchTags = 'https://127.0.0.1:8000/api/tags/';
const fetchCategories ='https://127.0.0.1:8000/api/categories';

function Categories() { 
//fetch URL categories

  fetch(fetchCategories, {
    //asynchronous function (executes at it's own rhythm)
    method: 'GET'
    }) 
    //returns the json response, which is in the log in the inspector, and is also asynchronous
    .then(function (response) {
        return response.json()
    })
    .then(function (responseJSON){
        //console.log(responseJSON)
        //console.log(responseJSON[`hydra:member`])
        responseJSON[`hydra:member`].forEach(category => {
            //shows all the category names that are integrated to the API
            //console.log(`${category.name}`)
            // 
            console.log(category)
            let newOpt = document.createElement("option");
            newOpt.textContent = `${category.name}`
            newOpt.value=`${category['@id']}`
            getCategory.appendChild(newOpt); 
        });
    });
};

//get data from API to populate checkbox
function Tags() {
    fetch(fetchTags, {
        method: 'GET'
    })
    .then(function (response) {
        return response.json()
    })
    .then(function (responseJSON) {
        responseJSON['hydra:member'].forEach(tag => {
            //console.log(responseJSON)
            console.log(`${tag.name}`)
            let newDiv = document.createElement('div')
            let newLabel = document.createElement("label");
            let newTagDiv = document.createElement("div");
            let newTag = document.createElement('input');
            newTag.type='checkbox';
            newTag.value = `${tag['@id']}`;
            newLabel.innerHTML = `${tag.name}`;
            getTags.append(newLabel, newTag);
            console.log(tag)
        });
    })
}

//send data to the API
function sendToAPI() {

    const checkboxes = document.querySelectorAll('input[type=checkbox]')
    console.log(checkboxes)
    // We prepare the tags list
    const tagsList = Array()
    checkboxes.forEach(checkbox => {
        if(checkbox.checked) {
            tagsList.push(checkbox.value)
        }
    })
    console.log(tagsList)
    //sets all the propreties that will be added to the database
    var requestBody =  {
        "title": getTitle.value,
        "body": getBody.value,
        "category": getCategory.value,//get the id from the dropdown elements
        "tags": checkboxes.forEach(checkbox  => {
         if (newTag.checked === True) {
            
         } 
        }),
        "writer": getWriter.value,
        "publishedAt": getDate.value
    }
    console.log(requestBody)

    //fetch the API URL to create the article
    fetch(fetchURL, {
        //required to be able to send data without being blocked by the CORS
        method: 'POST', 
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(requestBody)
    })
    //this "then" is here to check the response
    .then(function(response) {
           //condition to vcheck the response from the API
   if (response.status != 201) {
    window.alert('Une erreur est survenue à la création de l’article');
   }
   else {
    window.alert('article créé');
   }
    });
}

//send data in localStorage
function sendToLocal(){
    /*sends data in localStorage(unlike sessionStorage, localStorage is persistent)*/
    localStorage.setItem("titre", getTitle.value)
    let titleItem = localStorage.getItem("titre")

    localStorage.setItem("Body", getBody.value)
    let bodyItem = localStorage.getItem("body")
    
    localStorage.setItem("tags", getTags.value)
    let tagsItem = localStroage.getItem("tags")

    localStorage.setItem("category", getCategory.value)
    let categoryItem = localStorage.getItem("category")

    localStorage.setItem("writer", getWriter.value)
    let writerItem = localStorage.getItem("writer")

    localStorage.setItem("date", getDate.value)
    let dateItem = localStorage.getItem("date")
    //faire de la gestion d'erreurs
}


//eventlisteners

buttonSubmit.addEventListener('click', sendToAPI)
buttonLocalSubmit.addEventListener('click', sendToLocal)
document.addEventListener('DOMContentLoaded',Categories)
document.addEventListener('DOMContentLoaded',Tags)
