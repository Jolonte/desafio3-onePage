"use strict";

// API UNSPLASH
const url = 'https://api.unsplash.com/photos/random/?count=6&client_id=v_a_QuzuHm-scFMvZQHkh3h9UmqEpIdylo8YBa7kDkQ';


// DOM
const btn = document.querySelector('.header__button');
const cardsLinks = document.querySelectorAll('.main__a');
const cardsCover = document.querySelectorAll('.main__card__cover');
const cardsP = document.querySelectorAll('.main__card__p');

btn.addEventListener('click', () => {
  fetch(url) 
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    for(let i = 0; i < data.length; i++){
      cardsLinks[i].href = data[i].links.html;
      cardsCover[i].style.backgroundImage = 'url('+data[i].urls.regular+')';
      cardsP[i].innerHTML = `${data[i].description}<br><br>Downloads: ${data[i].downloads}<br><br>Likes: ${data[i].likes}`;
    }
  })
  .catch((err) => {
    alert(err);
  })
})