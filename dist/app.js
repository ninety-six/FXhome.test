"use strict";

const resetAccordionItems = () => {
    let activeItems = document.querySelectorAll('.accordion__item.active');
    activeItems.forEach(function(item) {
        item.classList.remove('active');
    });
};

const toggleCb = document.getElementById('method_toggle');

toggleCb.addEventListener('click', () => {
    if (toggleCb.checked) {
        resetAccordionItems();
    }
}, false);

const onAccTitleClick = (e) => { 
    if (toggleCb.checked) {
        if(!e.target.classList.contains('active')){
            resetAccordionItems();
            e.target.parentElement.classList.add('active');
        }
    } else {
        e.target.parentElement.classList.toggle('active');
    }
}
  
const accTitles = document.querySelectorAll('.accordion__item__title');
  
accTitles.forEach(function(title) {
    title.addEventListener('click', onAccTitleClick, false);
});
