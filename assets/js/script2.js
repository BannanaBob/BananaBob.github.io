menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// Assuming you have defined the 'menu' and 'navbar' elements
const menu = document.getElementById('#menu-btn'); // Replace 'your-menu-id' with the actual ID of your menu element
const navbar = document.getElementById('.header .nav__menu'); // Replace 'your-navbar-id' with the actual ID of your navbar element

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


let loadMoreBtn = document.querySelector('.packages .load-more .btn');
let currentItem = 3;

loadMoreBtn.onclick = () => {
    let boxes = document.querySelectorAll('.packages .box-container .box');
    for (let i = currentItem; i < Math.min(currentItem + 3, boxes.length); i++) {
        boxes[i].style.display = 'inline-block';
    }
    currentItem += 3;
    if (currentItem >= boxes.length) {
        loadMoreBtn.style.display = 'none';
    }
}




/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      dropdownMenu = document.getElementById('dropdown-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*===== MENU SHOW NOVE SUB MENU =====*/
/* Validate if constant exists */
if(navToggle){
  navToggle.addEventListener('click', () =>{
    dropdownMenu.classList.add('dropdown-menu')
  })
}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
      dropdownMenu.classList.remove('dropdown-menu')
    })
}



/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



/*=============== MENU EXTEND ===============*/
// Dropdown Menu
$(function() {
    function slideMenu() {
        var activeState = $("#menu-container .menu-list").hasClass("active");
        $("#menu-container .menu-list").animate({left: activeState ? "0%" : "-100%"}, 400);
    }

    $("#menu-wrapper").click(function(event) {
        event.stopPropagation();
        $("#hamburger-menu").toggleClass("open");
        $("#menu-container .menu-list").toggleClass("active");
        slideMenu();
        $("body").toggleClass("overflow-hidden");
    });

    $(".menu-list").find(".accordion-toggle").click(function() {
        var $accordionContent = $(this).next();
        $accordionContent.toggleClass("open").slideToggle("fast");
        $(this).toggleClass("active-tab").find(".menu-link").toggleClass("active");

        $(".menu-list .accordion-content").not($accordionContent).slideUp("fast").removeClass("open");
        $(".menu-list .accordion-toggle").not($(this)).removeClass("active-tab").find(".menu-link").removeClass("active");
    });
});
  
/*=============== MENU EXTEND END ===============*/


/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
  const header = document.getElementById('header')
  // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
  this.scrollY >= 50 ? header.classList.add('blur-header') 
                     : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)






/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

















/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 3000,
  delay: 400,
  // reset: true // animation repeat
})

sr.reveal(`.home__data, .explore__data, .explore__user, .footer__container`)
sr.reveal(`.home__card`, {delay: 600, distance: '100px', interval: 100})
sr.reveal(`.about__data, .join__image`, {origin: 'right'})
sr.reveal(`.about__data2, .join__image`, {origin: 'right'})
sr.reveal(`.about__image, .join__data`, {origin: 'left'})
sr.reveal(`.about__image1, .join__data`, {origin: 'left'})
sr.reveal(`.about__img1, .about__img2, .about__img3, .about__img4, .about__img5, .about__img6, .about__img7`, {origin: 'left'})
sr.reveal(`.about__VM_img1, .about__VM_img2, .about__VM_img3, .about__VM_img4, .about__VM_img5`, {origin: 'left'})
sr.reveal(`.about__XP_img1, .about__XP_img2, .about__XP_img3`, {origin: 'left'})
sr.reveal(`.about__IL_img1, .about__IL_img2, .about__IL_img3, .about__IL_img4`, {origin: 'left'})
sr.reveal(`.about__BR_img1, .about__BR_img2, .about__BR_img3, .about__BR_img4`, {origin: 'left'})
sr.reveal(`.about__ML_img1, .about__ML_img2, .about__ML_img3, .about__ML_img5, .about__ML_img6, .about__ML_img7, .about__ML_img8, .about__ML_img9, .about__ML_img10, .about__ML_img11`,  {origin: 'left'})
sr.reveal(`.about__ML_img12, .about__ML_img13, .about__ML_img14, .about__ML_img15, .about__ML_img16, .about__ML_img17, .about__SL_img1, .about__SL_img2, .about__SL_img3`,  {origin: 'left'})

sr.reveal(`.popular__card`, {interval: 200})











