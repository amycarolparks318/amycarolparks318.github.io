// GLOBAL VARIABLES
const largeImg = document.querySelector('.img-large');
const thumbImgBox = document.querySelector('.thumbnail-box');

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const cart = document.getElementById('cart');
const cartItems = document.querySelector('.cart-qty');
const quantity = document.querySelector('.qty');
const main = document.querySelector('body');

const cartButton = document.getElementById('add-cart');
const previous = document.getElementById('previous');
const next = document.getElementById('next');

const trash = document.getElementById('delete');

const aside = document.getElementById('aside');
const popup = document.querySelector('.popup');

let num = 1;

// EVENT LISTENERS
plus.addEventListener('click', () => {
    addQty();
});

minus.addEventListener('click', () => {
    subQty();
});

cartButton.addEventListener('click', () => {
    cartQty();
});

// OPEN/CLOSE CART WHEN ICON IS CLICKED
cart.addEventListener('click', (e) => {
    e.stopPropagation();
    cartToggle();
});

// KEEP CLICKS INSIDE THE POPUP FROM CLOSING IT
aside.addEventListener('click', (e) => {
    e.stopPropagation();
});

// CLOSE CART WHEN CLICKING ANYWHERE ELSE
document.addEventListener('click', (e) => {
    if (!popup.contains(e.target)) {
        aside.classList.add('empty');
    }
});

thumbImgBox.addEventListener('click', (e) => {
    if (e.target !== thumbImgBox) {
        largeImg.setAttribute('src', e.target.dataset.largeimage)
    }
});

previous.addEventListener('click', (e) => {
    if (num > 1) {
        num--;
        largeImg.setAttribute('src', `./assets/images/book-${num}.png`);
    }
});

next.addEventListener('click', () => {
    if (num < 4) {
        num++;
        largeImg.setAttribute('src', `./assets/images/book-${num}.png`);
    }
});

trash.addEventListener('click', () => {
    emptyCart();
});

largeImg.addEventListener('click', () => {
    openModal();
    showSlides();
});

// FUNCTIONS
function addQty() {
    quantity.value++;
}

function subQty() {
    quantity.value > 0 ? quantity.value-- : quantity.value = 0;
}

function cartQty() {
    if (quantity.value > 0) {
        cartItems.style.display = 'flex';
        cartItems.innerHTML = quantity.value;
    } else {
        cartItems.style.display = 'none';
    }
}

const cartHasItems = document.getElementById('img-head');
const cartNoItems = document.getElementById('empty');

function cartPopup() {
    const priceUp = document.getElementById('cart-amt');
    if (cartItems.innerHTML > 0) {
        cartHasItems.classList.remove('empty');
        cartNoItems.classList.add('empty');
        priceUp.innerHTML = `$20.00 x ${quantity.value}: $${quantity.value * 20}.00`;
    } else {
        cartNoItems.classList.remove('empty');
        cartHasItems.classList.add('empty');
    }
}

function cartToggle() {
    if (aside.classList.contains('empty')) {
        aside.classList.remove('empty');
    } else {
        aside.classList.add('empty');
    }
    cartPopup();
}

function emptyCart() {
    cartNoItems.classList.remove('empty');
    cartHasItems.classList.add('empty');
    quantity.value = 0;
    cartItems.style.display = 'none';
}

//LIGHTBOX

const close = document.getElementById('close');
const prevLight = document.querySelector('.prev');


function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("demo");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
}



