"use strict";

const onAccTitleClick = (e) => {
    console.log('clicked');
    e.target.parentElement.classList.toggle('active');
}
  
const accTitles = document.querySelectorAll('.accordion__item__title');
  
accTitles.forEach(function(title) {
    title.addEventListener('click', onAccTitleClick, false);
});