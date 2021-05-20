const list = document.querySelector("#menu_list");

function scrollTo(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'nearest'});
        list.classList.toggle('active');
    }
}
window.onload = function() {        
const main = document.getElementById('main_button');
main.addEventListener('click', () => scrollTo('#main_image_wrap'));
const discounts = document.getElementById('discounts_button');
discounts.addEventListener('click', () => scrollTo('#discounts_wrap'));

const pizza = document.getElementsByClassName('pizza_menu');
const fastFood = document.getElementsByClassName('fast-food_menu');
const drinks = document.getElementsByClassName('drinks_menu');
const pizzeria_menu = document.getElementById('pizzeria_menu_button');
pizzeria_menu.addEventListener('click', () =>  {
    if (pizza) {
        scrollTo('[data-pizza ="8"]');
    }
    if (fastFood) {
        scrollTo('[data-fastfood="8"]');
    }
    if (drinks) {
        scrollTo('[data-drink="9"]');
    }
});

const gallery = document.getElementById('gallery_button');
gallery.addEventListener('click', () => scrollTo('.gallery_wrap'));

const contact = document.getElementById('contact_button');
contact.addEventListener('click', () => scrollTo('.contact_wrap'));

const toggleButton = document.getElementById('toggle_button');
toggleButton.addEventListener('click', () => {
    list.classList.toggle('active');
});
}
