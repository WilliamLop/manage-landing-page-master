const nav = document.querySelector(".nav");
const footer = document.querySelector(".footer");
const menuButton = document.getElementById("menu");
const menuIcon = document.querySelector(".menu--icon");
const main = document.querySelector('.main__container');
const logo = document.querySelector('.figure__logo');
const ilustration = document.querySelector('.welcome__img');
const emailInput = document.getElementById('email');
const button = document.getElementById('go');
const textError = document.querySelector(".text__error");
const iconError = document.querySelector(".icon__error");
const infoError = document.querySelector(".info__error");
console.log(infoError);

// Menu mobile
menuButton.addEventListener("click", () =>{

    nav.classList.toggle("nav--active");

    if(nav.classList.contains("nav--active")){
        menuIcon.setAttribute('src', './images/icon-close.svg');
        logo.style.filter = 'blur(2px)';
        main.style.filter = 'blur(2px)';
        ilustration.style.filter = 'blur(2px)';
        footer.style.filter = 'blur(2px)';
    }else{
        menuIcon.setAttribute('src', './images/icon-hamburger.svg');
        logo.style.filter = 'blur(0px)';
        main.style.filter = 'blur(0px)';
        ilustration.style.filter = 'blur(0px)';
        footer.style.filter = 'blur(0px)';
    }
});


// Validación de formulario
button.addEventListener('click', function(e) {
    // Llama a la misma función que usas para el evento de entrada
    validateEmail(e);
    if(emailInput.validity.valid){
        emailInput.value = '';
        emailInput.style.border = '2px solid white';
    }
});

function validateEmail(e){
    if(emailInput.value === ''){
        e.preventDefault();
        infoError.style.display = 'block';
        emailInput.style.border = '2px solid red';
        textError.textContent = 'Please enter an email';
        
    } else if (!emailInput.validity.valid){
        e.preventDefault();
        infoError.style.display = 'block';
        emailInput.style.border = '2px solid red';
        textError.textContent = 'Please enter a valid email';
    } else {
        textError.textContent = '';
        infoError.style.display = 'none';
        emailInput.style.border = '2px solid green';
    }
}

emailInput.addEventListener('input', function(e) {
    validateEmail(e);
});


// Slide content
var swiper = new Swiper(".slide__content", {
    slidesPerView: 1,
    cssMode: true,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    gragCursor: 'true',
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true
    },
    mousewheel: true,
    keyboard: true,
    simulateTouch: true,

    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        1200:{
            slidesPerView: 2,
        }
    },
});


// Menu interactivo

let ubicacionPrincipal = window.pageYOffset;
console.log(ubicacionPrincipal);

window.addEventListener ('scroll', function (){
    const desplazamientoActual = window.pageYOffset;
    const navLinks = document.getElementsByClassName('nav__link');

    if(ubicacionPrincipal >= desplazamientoActual){
        this.document.getElementsByClassName("header")[0].style.top = '0px';

        if(ubicacionPrincipal <= 10){
            this.document.getElementsByClassName("header")[0].style.backgroundColor = 'transparent';
            logo.setAttribute('src', './images/logo.svg');
            for(let i = 0; i < navLinks.length; i++){
                navLinks[i].style.color = 'hsl(233, 12%, 13%)';
            }
        }
    }else{
        this.document.getElementsByClassName("header")[0].style.top = '-200px';
        this.document.getElementsByClassName("header")[0].style.backgroundColor = 'hsl(233, 12%, 13%)'
        logo.setAttribute('src', './images/logo-white.svg');
        for(let i = 0; i < navLinks.length; i++){
            navLinks[i].style.color = 'hsl(0, 0%, 98%)';
        }
    } 
    
    ubicacionPrincipal = desplazamientoActual;
});



