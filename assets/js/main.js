"use strict";

// API UNSPLASH
const url = 'https://api.unsplash.com/search/photos/?query=gift&per_page=6&client_id=v_a_QuzuHm-scFMvZQHkh3h9UmqEpIdylo8YBa7kDkQ';


// DOM
const btn = document.querySelector('.header__button');
const cardsCover = document.querySelectorAll('.main__card__cover');

btn.addEventListener('click', () => {
  fetch(url) 

  .then(response => {
    // console.log(response);
    if(response.ok === true) {
      return response.json();
    }
    else {
      alert(response.status);
    }
  })

  .then(data => {
    const imageNodes = []
    for(let i = 0; i < data.results.length; i++){
      cardsCover[i].style.backgroundImage = 'url('+data.results[i].urls.raw+')';
      console.log(data.results[i].urls.raw);
    }
  })
})