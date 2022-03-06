"use strict";

import api from './api.js';

// API UNSPLASH
const url = `https://api.unsplash.com/photos/random/?orientation=landscape&count=6&client_id=${api}`;

// DOM
const btn = document.querySelector('.header__button');
const cardsLinks = document.querySelectorAll('.main__a');
const cardsCover = document.querySelectorAll('.main__card__cover');
const cardsH2 = document.querySelectorAll('.main__card__h2');
const cardsP = document.querySelectorAll('.main__card__p');

btn.addEventListener('click', () => {
  fetch(url) 
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    for(let i = 0; i < data.length; i++){
      cardsLinks[i].href = data[i].links.download;
      cardsLinks[i].target = '_blank'
      cardsCover[i].style.backgroundImage = 'url('+data[i].urls.regular+')';
      cardsH2[i].innerText = `${data[i].user.name}`
      cardsP[i].innerHTML = `${data[i].description}<br><br>Downloads: ${data[i].downloads}<br><br>Likes: ${data[i].likes}`;
    }
  })
  .catch((err) => {
    alert(err);
  })
})