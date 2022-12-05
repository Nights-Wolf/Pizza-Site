function chooseMenu(selector, selector2, selector3) {
    const element = document.querySelector(selector);
    const element2 = document.querySelector(selector2);
    const element3 = document.querySelector(selector3);

    const style = getComputedStyle(element);
    const style2 = getComputedStyle(element2);
    const style3 = getComputedStyle(element3);

    var display = style.display;
    var display2 = style2.display;
    var display3 = style3.display;

    if (display == 'none') {
    element.classList.toggle('fade');
    element.style.display= 'block';
    }

    if (display2 == 'block') {
        element2.classList.toggle('fade');
        element2.style.display= 'none';
    }

    if (display3 == 'block') {
        element3.classList.toggle('fade');
        element3.style.display= 'none';
    }
}
const sauces = document.querySelector('.sauces');

const pizzaShow = document.getElementById('pizza_menu_show');
pizzaShow.addEventListener('click', () => { 
    chooseMenu('#pizza_menu', '#fast-food_menu', '#drinks_menu');

    sauces.classList.toggle('fade');
    sauces.style.display='block';
    sauces.style.top= '97%';

    pizzaShow.style.boxShadow= '0 0 black';
    pizzaShow.style.transform= 'translateY(2px)';

    fastFoodShow.style.boxShadow= '3px 3px black';
    fastFoodShow.style.transform= 'translateY(0)';

    drinksShow.style.boxShadow= '3px 3px black';
    drinksShow.style.transform= 'translateY(0)';
});

const fastFoodShow = document.getElementById('fast-food_menu_show');
fastFoodShow.addEventListener('click', () => { 
    chooseMenu('#fast-food_menu', '#pizza_menu', '#drinks_menu');

    sauces.classList.toggle('fade');
    sauces.style.display='block';
    sauces.style.top= '40%';

    fastFoodShow.style.boxShadow= '0 0 black';
    fastFoodShow.style.transform= 'translateY(2px)';

    pizzaShow.style.boxShadow= '3px 3px black';
    pizzaShow.style.transform= 'translateY(0)';

    drinksShow.style.boxShadow= '3px 3px black';
    drinksShow.style.transform= 'translateY(0)';
});

const drinksShow = document.getElementById('drinks_menu_show');
drinksShow.addEventListener('click', () => { 
    chooseMenu('#drinks_menu', '#fast-food_menu', '#pizza_menu');
    sauces.style.display= 'none';

    drinksShow.style.boxShadow= '0 0 black';
    drinksShow.style.transform= 'translateY(2px)';

    pizzaShow.style.boxShadow= '3px 3px black';
    pizzaShow.style.transform= 'translateY(0)';

    fastFoodShow.style.boxShadow= '3px 3px black';
    fastFoodShow.style.transform= 'translateY(0)';
});
