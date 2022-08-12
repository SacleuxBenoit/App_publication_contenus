//liaison du JS avec les éléments HTML
const getTitle = document.getElementById('formTitle')
const getBody = document.getElementById('formBody')
const getCategory = document.getElementById('formCategory')
const getWriter= document.getElementById('formWriter')
const getDate = document.getElementById('formDate')
const getTags = document.getElementById('formTags')
const buttonSubmit = document.querySelector('#submit')
const buttonLocalSubmit = document.querySelector('#submitLocal')
//URLs from the API used 
const fetchURL = 'https://127.0.0.1:8000/api/articles';
const fetchTags = 'https://127.0.0.1:8000/api/tags/';
const fetchCategories ='https://127.0.0.1:8000/api/categories';


//get data from API to fill dropdown
let catArray= [] 
function Categories() { 
//fetch URL categories

  fetch(fetchCategories, {
    method: 'GET', 
    headers: {
        'Content-Type': 'application/json'
        }
    }) 
    .then() 
    .then(function (response) {console.log(response) });
};
catArray.forEach(element => {
    // this.Categories()
});

//get data from API to populate checkbox


//send data to the API

//send data in localStorage
function sendToLocal(){
    /*sends data in localStorage(unlike sessionStorage, localStorage is persistent)*/
    localStorage.setItem("titre", getTitle.value)
    let titleItem = localStorage.getItem("titre")

    localStorage.setItem("Body", getBody.value)
    let bodyItem = localStorage.getItem("body")
    
    localStorage.setItem("writer", getWriter.value)
    let writerItem = localStorage.getItem("writer")

    localStorage.setItem("date", getDate.value)
    let dateItem = localStorage.getItem("date")
    //faire de la gestion d'erreurs
}


//eventlisteners
// buttonSubmit.addEventListener('click', send)
buttonLocalSubmit.addEventListener('click', sendToLocal)
getCategory.addEventListener('click',Categories)