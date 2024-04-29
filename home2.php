<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>home</title>

    <!-- swiper css link -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"/>




    <!-- font awesome cdn link -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">

    <!-- custom css file link -->
    <link rel="stylesheet" href="css/style.css">

</head>
<body>
    
<!-- header section starts -->
<section class="header">

    <a href="home.php" class="logo">travel</a>


    <div class="nav__menu" id="nav-menu">
    <nav class="navbar">


    <div id="btn" class="fas fa-crow"></div>
        <a href="home.php">home</a>
        <a href="about.php">about</a>
        <a href="package.php">package</a>
        <a href="parallax.php">photos</a>
        <a href="book.php">book</a>

        <ul class="nav__list">
        <li class="nav__item">
        <a href="#" class="nav__link1" >Česky<i class="fas fa-caret-down"></i></a>
                  <div class="dropdown__menu" id="dropdown-menu">
                     <ul class="nav__list">
                        <li  class="nav__item"><a href="../indexEN.html">English</a></li>
                     </ul>
                  </div>
               </li>

    </nav>

    <div id="menu-btn" class="fas fa-bars"></div>
    </div>
</section>


    <!-- header section ends -->














    <!-- home section starts -->
<section class="home">

    <div class="swiper home-slider">

        <div class="swiper-wrapper">

            <div class="swiper-slide slide" style="background:url(images/home-slide-1.jpg) no-repeat">
                <div class="content">
                    <span>explore, discover, travel</span>
                    <h3>travel around the world</h3>
                    <a href="package.php" class="btn">discover more</a>
                </div>
            </div>

            <div class="swiper-slide slide" style="background:url(images/home-slide-2.jpg) no-repeat">
                <div class="content">
                    <span>explore, discover, travel</span>
                    <h3>discover new places</h3>
                    <a href="package.php" class="btn">discover more</a>
                </div>
            </div>

            <div class="swiper-slide slide" style="background:url(images/home-slide-3.jpg) no-repeat; background-position: bottom !important">
                <div class="content">
                    <span>explore, discover, travel</span>
                    <h3>make your travel worthwhile</h3>
                    <a href="package.php" class="btn">discover more</a>
                </div>
            </div>


        </div>

        <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>

    </div>

</section>


    <!-- home section ends -->


    <!-- service section starts -->

<section class="service">

    <h1 class="heading-title"> our services </h1>

    <div class="box-container">

        <div class="box">
            <img src="images/icon-1.png">
            <h3>adventure</h3>
        </div>

        <div class="box">
            <img src="images/icon-2.png">
            <h3>tour guide</h3>
        </div>

        <div class="box">
            <img src="images/icon-3.png">
            <h3>trecking</h3>
        </div>

        <div class="box">
            <img src="images/icon-4.png">
            <h3>camp fire</h3>
        </div>

        <div class="box">
            <img src="images/icon-5.png">
            <h3>off road</h3>
        </div>

        <div class="box">
            <img src="images/icon-6.png">
            <h3>camping</h3>
        </div>
    
    </div>

</section>

 <!-- service section ends -->



<!-- home about section starts -->
<section class="home-about">

    <div class="image">
        <img src="images/about-img.jpg" alt="">
    </div>

    <div class="content">
        <h3>about us</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Maxime nihil neque suscipit voluptatem minus reiciendis quidem, fugit, 
            molestiae provident numquam cum vero rem perspiciatis laudantium alias? 
            Magni atque deserunt non!</p>
        <a href="about.php" class="btn">read more</a>
    </div>

</section>

<!-- home about section ends -->

<!-- home packages section starts -->
<section class="home-packages">

    <h1 class="heading-title"> our packages </h1>

    <div class="box-container">

        <div class="box">
         <div class="image">
            <img src="images/img-1.jpg" alt="" srcset="">
        </div>
        <div class="content">
            <h3>adventure & tour</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="book.php" class="btn">book now</a>
        </div>
    </div>

        <div class="box">
            <div class="image">
            <img src="images/img-2.jpg" alt="" srcset="">
        </div>
        <div class="content">
            <h3>adventure & tour</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="book.php" class="btn">book now</a>
        </div>
    </div>
        <div class="box">
            <div class="image">
            <img src="images/img-3.jpg" alt="" srcset="">
        </div>
        <div class="content">
            <h3>adventure & tour</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="book.php" class="btn">book now</a>
    </div>
</div>
</div>

<div class="load-more"> <a href="package.php" class="btn">load more</a> </div>

</section>


<!-- home packages section ends -->

<!-- home offers sections start -->

<section class="home-offer">
    <div class="content">
        <h3>upto 50% off</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Quod architecto ipsum in? Similique placeat, dolorum officiis eius a eum illo corrupti? 
            Veritatis cum ipsam incidunt doloremque in vel qui amet?</p>
        <a href="book.php" class="btn" id="btn">book now</a>
    </div>

</section>


<!-- home offers sections start -->



<!-- footer section start -->

<section class="footer">

    <div class="box-container">
        <div class="box">
            <h3>quick links</h3>
        <a href="home.php"><i class="fas fa-angle-right"></i> home</a>
        <a href="about.php"><i class="fas fa-angle-right"></i> about</a>
        <a href="package.php"><i class="fas fa-angle-right"></i> package</a>
        <a href="book.php"><i class="fas fa-angle-right"></i> book</a>
        </div>
    
        <div class="box">
            <h3>extra links</h3>
        <a href="#"><i class="fas fa-angle-right"></i> ask questions</a>
        <a href="#"><i class="fas fa-angle-right"></i> about us</a>
        <a href="#"><i class="fas fa-angle-right"></i> privacy policy</a>
        <a href="#"><i class="fas fa-angle-right"></i> terms of use</a>
        </div>

        <div class="box">
            <h3>contact info</h3>
        <a href="#"><i class="fas fa-phone"></i> +420 728 123 456</a>
        <a href="#"><i class="fas fa-phone"></i> +420 777 444 555</a>
        <a href="#"><i class="fas fa-envelope"></i> sem@napis.email</a>
        <a href="#"><i class="fas fa-map"></i> vresovice prdelakov 32</a>
        </div>

        <div class="box">
            <h3>follow us</h3>
            <a href='#'> <i class="fab fa-facebook-f"></i> facebook </a>
            <a href='#'> <i class="fab fa-instagram"></i> instagram </a>
            <a href='#'> <i class="fab fa-linkedin"></i> linkedIn </a>
        </div>
    </div>    

    <div class="credit"> created by <span>Mr. web designer</span> | all right reserved!</div>

</section>

<!-- footer section end -->










<!-- swiper js link -->
<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>


<!-- custom js file link -->
<script src="js/script.js"></script>


</body>
</html>