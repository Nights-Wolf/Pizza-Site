function slide(n, slideToPlace, slideToReplace) {
    for (i = 0; i < im.length; i++) {
        im[i].style.display= 'none';
        im[i].classList.remove(slideToPlace);
        im[i].classList.remove(slideToReplace);
    }
    if (!im[n].classList.contains(slideToPlace)) {
    im[n].style.display= 'inline';
    im[n].classList.add(slideToPlace);
    }
} 

function slideLeft(n, slideToPlace, slideToReplace) {
    if (n > 0) {
        if (im[n - 1].classList.contains(slideToPlace)) {
            im[n - 1].classList.replace(slideToPlace, slideToReplace);
            setTimeout(() => slide(n, slideToPlace, slideToReplace), 500);
        } else  {
            im[n - 1].classList.add(slideToReplace);
            setTimeout(() => slide(n, slideToPlace, slideToReplace), 500);
        }
    } 
    if (n <= 0) {
        if (!im[n].classList.contains(slideToPlace)) {
            im[n].classList.replace(slideToPlace, slideToReplace);
            im[3].classList.replace(slideToPlace, slideToReplace);
            setTimeout(() => slide(n, slideToPlace, slideToReplace), 500);
        }
    }
}

function slideRight(n, slideToPlace, slideToReplace) {
    if (n == 3) {
        if (!im[0].classList.contains(slideToPlace)) {
            im[0].classList.add(slideToReplace);
            setTimeout(() => slide(n, slideToPlace, slideToReplace), 500);
        } else {
            im[0].classList.replace(slideToPlace, slideToReplace);
            setTimeout(() => slide(n, slideToPlace, slideToReplace), 500);
        }
    }
    if (n != 3) {
        if (im[n + 1].classList.contains(slideToPlace)) {
            im[n + 1].classList.replace(slideToPlace, slideToReplace);
            setTimeout(() => slide(n, slideToPlace, slideToReplace), 500);
        } else  {
            im[n + 1].classList.add(slideToReplace);
            setTimeout(() => slide(n, slideToPlace, slideToReplace), 500);
        }
    } 
}

function mobileSlide(n) {
    for (i = 0; i < im.length; i++) {
        im[i].style.display='none';
    }
    im[n].style.display='inline';
}

var counter = 0;
const im = document.querySelectorAll('[data-image]');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

if(!media.matches) {

prev.addEventListener('click', () => {
    if (counter == 0) {
        counter = 3;
    } else {
        counter--;
    }
    slideRight(counter, 'slideFromLeft', 'slideToRight');
});

next.addEventListener('click', () => { 
    if (counter == 3) {
        counter = 0;
    } else {
        counter++;
    }
    slideLeft(counter, 'slideFromRight', 'slideToLeft');
});
} else {
    prev.addEventListener('click', () => {
        if (counter == 0) {
            counter = 3;
        } else {
            counter--;
        }
        mobileSlide(counter);
    });

next.addEventListener('click', () => { 
        if (counter == 3) {
            counter = 0;
        } else {
            counter++;
        }
        mobileSlide(counter);
    });
}