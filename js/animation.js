
const mainSection = document.querySelector('#main_image_wrap');
const mainHeader = document.querySelector('#welcome_header');
const aboutHeader = document.getElementsByClassName('about_Header');
const aboutParag = document.getElementsByClassName('about_Parag');

const discountSection = document.getElementById('discounts_wrap');
const birthdayDiscount = document.querySelector('.birthday_discount');
const sauceDiscount = document.querySelector('.sauce_discount');
const coffeeDiscount = document.querySelector('.coffee_discount');

const contactSection = document.getElementById('contact_wrap');
const address = document.getElementById('address_wrap');
const googleMap = document.getElementById('map');

const media = window.matchMedia('(max-width: 1100px)');

if (!media.matches) {

createObserverForMain();
createObserverForDiscount();
createObserverForContact();

function createObserverForMain() {
    let observerForMain;

    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0
    };

    observerForMain = new IntersectionObserver(mainIntersect, options);
    observerForMain.observe(mainSection);
}

function mainIntersect(entries, observerForMain) {
   entries.forEach(function (entry) {
    if (entry.isIntersecting) {
        mainHeader.classList.add('animationTop');
        mainHeader.style.display= 'block';
        for (i = 0; i < aboutHeader.length; i++) {
        aboutHeader[i].classList.add('animationDown');
        aboutHeader[i].style.display= 'block';
         }
        for (i = 0; i < aboutParag.length; i++) {
        aboutParag[i].classList.add('animationRight');
        aboutParag[i].style.display= 'block';
        }
    }   
    if (!entry.isIntersecting) {
        if (mainHeader.classList.contains('animationTop') && aboutHeader[1].classList.contains('animationDown') && aboutParag[1].classList.contains('animationRight')) {
            mainHeader.classList.remove('animationTop');
            for (i = 0; i < aboutHeader.length; i++) {
                aboutHeader[i].classList.remove('animationDown');
            }
            for (i = 0; i < aboutParag.length; i++) {
                aboutParag[i].classList.remove('animationRight');
            }
        }
        mainHeader.style.display= 'none';
        for (i = 0; i < aboutHeader.length; i++) {
        aboutHeader[i].style.display= 'none';
        }
        for (i = 0; i < aboutParag.length; i++) {
        aboutParag[i].style.display= 'none';
        }
    }
});
}

function createObserverForDiscount() {
    let observerForDiscount;

    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0
    };

    observerForDiscount = new IntersectionObserver(discountIntersect, options);
    observerForDiscount.observe(discountSection);
}

function discountIntersect(entries, observerForDiscount) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            birthdayDiscount.classList.add('animationLeft');
            sauceDiscount.classList.add('animationLeft');
            coffeeDiscount.classList.add('animationRight');
            birthdayDiscount.style.display= 'flex';
            sauceDiscount.style.display= 'flex';
            coffeeDiscount.style.display= 'flex';
        }
        if (!entry.isIntersecting) {
            if (birthdayDiscount.classList.contains('animationRight') && sauceDiscount.classList.contains('animationRight') && coffeeDiscount.classList.contains('animationLeft')) {
                birthdayDiscount.classList.remove('animationRight');
                sauceDiscount.classList.remove('animationRight');
                coffeeDiscount.classList.remove('animationLeft');
            }
            birthdayDiscount.style.display= 'none';
            sauceDiscount.style.display= 'none';
            coffeeDiscount.style.display= 'none';
        }
    })
}

function createObserverForContact() {
    let observerForContact;

    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0
    };

    observerForContact = new IntersectionObserver(contactIntersect, options);
    observerForContact.observe(contactSection);
}

function contactIntersect(entries, observerForDiscount) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            address.classList.add('animationLeft');
            googleMap.classList.add('animationRight');
            
            address.style.display= 'flex';
            googleMap.style.display= 'flex';
        }
        if (!entry.isIntersecting) {
            if (googleMap.classList.contains('animationRight') && address.classList.contains('animationLeft')) {
                googleMap.classList.remove('animationRight');
                address.classList.remove('animationLeft');
            }
            address.style.display= 'none';
            googleMap.style.display= 'none';
        }
    })
}
}