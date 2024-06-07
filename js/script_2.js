

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav__menu');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}



    //switch to CZ, or EN

      document.addEventListener("DOMContentLoaded", function() {
        var checkbox = document.getElementById("checkbox-toggle_EN");
        
        checkbox.addEventListener("click", function() {
          // Simulate a delay to ensure the animation completes
          setTimeout(function() {
            // Directly navigate to the next page
            window.location.href = "index_EN.html";
          }, 3000); // Adjust the delay to match your animation duration
        });
      });

 //switch to CZ, or EN

 document.addEventListener("DOMContentLoaded", function() {
  var checkbox = document.getElementById("checkbox-toggle_CZ");
  
  checkbox.addEventListener("click", function() {
    // Simulate a delay to ensure the animation completes
    setTimeout(function() {
      // Directly navigate to the next page
      window.location.href = "index.html";
    }, 3000); // Adjust the delay to match your animation duration
  });
});









/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay: 400,
    // reset: true // animation repeat
})

sr.reveal(`.home__data, .tady, .tady2, .explore__data, .explore__user, .footer__container, .recomend`)
sr.reveal(`.home__card`, {delay: 600, distance: '100px', interval: 100})
sr.reveal(`.join__image, .container1`, {origin: 'right' , distance: '300px'})
sr.reveal(`.about__image, .container`, {origin: 'left' , distance: '300px'})
sr.reveal(`.popular__card`, {interval: 200})







   /*=============== SHOW SCROLL UP ===============*/ 
   const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



