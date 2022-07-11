///-------------MOBILE MENU-------------///

//------BURGER ANIMATION------//

const burgerButton = document.getElementById('burger-container');
const burgerTop = document.getElementById('burger-top');
const burgerMid = document.getElementById('burger-middle');
const burgerBot = document.getElementById('burger-bottom');
const menu = document.getElementById('mobile-menu');

function burgerOpen() {
    burgerButton.classList.add('menu-open');
    burgerMid.style.width = "0%";
    burgerTop.style.transform = 'rotate(-45deg)';
    burgerBot.style.transform = 'rotate(45deg)';
    burgerBot.style.top = '5px';
    burgerTop.style.top = '10px';
}

function burgerClose() {
    burgerButton.classList.remove('menu-open');
    burgerMid.style.width = "50%";
    burgerTop.style.transform = 'rotate(0deg)';
    burgerBot.style.transform = 'rotate(0deg)';
    burgerBot.style.top = '-1px';
    burgerTop.style.top = '19px';
}

function menuOpen() {
    menu.style.top = '71px';
}

function menuClose() {
    menu.style.top = '-100%';
}

function burgerClick() {
    if (burgerButton.classList.contains('menu-open')) {
        burgerClose();
        menuClose();
    } else {
        burgerOpen();
        menuOpen();
    }
}

burgerButton.addEventListener('click', burgerClick);

////////////------------ NEWSLETTER FORM ----------------///////////////

(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
    .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
    n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
    (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
    ml('account', '97506');