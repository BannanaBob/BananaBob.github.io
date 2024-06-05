
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav__menu');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

