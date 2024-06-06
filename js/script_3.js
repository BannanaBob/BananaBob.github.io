
document.addEventListener("DOMContentLoaded", function() {
    var loadingScreen = document.getElementById('loading-screen');
    var loadingPercentage = document.getElementById('loading-percentage');
    var content = document.getElementById('content');

    // Simulate loading process
    var percentage = 0;
    var loadingInterval = setInterval(function() {
        percentage += 1;
        loadingPercentage.textContent = percentage + '%';

        if (percentage >= 100) {
            clearInterval(loadingInterval);
            loadingScreen.style.display = 'none';
            content.style.display = 'block';
        }
    }, 40); // Adjust the interval speed as needed
});

// Ensure the loading screen is displayed when the page starts loading
window.onload = function() {
    var loadingScreen = document.getElementById('loading-screen');
    var content = document.getElementById('content');
    
    if (loadingScreen.style.display === 'none') {
        loadingScreen.style.display = 'flex';
    }
    
    if (content.style.display === 'block') {
        content.style.display = 'none';
    }
};


  

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav__menu');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


document.addEventListener("DOMContentLoaded", function() {
  var checkboxEN = document.getElementById("checkbox-toggle_EN");
  var checkboxCZ = document.getElementById("checkbox-toggle_CZ");

  checkboxEN.addEventListener("click", function() {
    // Redirect to index_EN.html when checkbox-toggle_EN is clicked
    setTimeout(function() {
      window.location.href = "index_EN.html";
    }, 3400); // Adjust the delay if needed
  });

  checkboxCZ.addEventListener("click", function() {
    // Redirect to index.html when checkbox-toggle_CZ is clicked
    setTimeout(function() {
      window.location.href = "index.html";
    }, 3400); // Adjust the delay if needed
  });
});





   /*=============== SHOW SCROLL UP ===============*/ 
   const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



