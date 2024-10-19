// create a file BlogSection.jsx, using the code that I will provide and taking into account the funcionality of main.js
// can you create a jsx component if you see a pattern so it will be just called from a list of elements?


{/*====== Start BlogSection ======*/}
 {/*====== Start Blog Section ======*/}
 <section className="blog-area pt-115 pb-120">
 <div className="container">
   <div className="row justify-content-center">
     <div className="col-lg-6">
       <div className="section-title text-center mb-60 wow fadeInUp">
         <span className="sub-title">Nuestros Articulos más Recientes</span>
         <h2>Novedades, Consejos, Trucos y más...</h2>
       </div>
     </div>
   </div>
   <div className="row">
     <div className="col-lg-4 col-md-6 col-sm-12">
       <div
         className="blog-post-item blog-post-item-one mb-40 wow fadeInUp"
         data-wow-delay="10ms"
       >
         <div className="post-thumbnail">
           <a href="">
             <img
               src="assets/images/blog/articulo-pinturas-para-techos.jpg"
               alt="Como elegir una pintura impermeabilizante"
             />
           </a>
           <div className="post-date">
             <a href="#" className="logo-verde-oscuro">
               <span>Oct</span>20
             </a>
           </div>
         </div>
         <div className="entry-content">
           <a href="#" className="cat-btn">
             <i className="ti-bookmark-alt" /> Reparaciones del Hogar
           </a>
           <h3 className="title verdes-logo">
             <a href="">Como elegir una pintura impermeabilizante</a>
           </h3>
           <div className="post-meta">
             <ul>
               <li>
                 <span>
                   <i className="ti-comments-smiley" />
                   <a href="#">5 Comentarios</a>
                 </span>
               </li>
             </ul>
           </div>
         </div>
       </div>
     </div>
     <div className="col-lg-4 col-md-6 col-sm-12">
       <div
         className="blog-post-item blog-post-item-one mb-40 wow fadeInUp"
         data-wow-delay="20ms"
       >
         <div className="post-thumbnail">
           <a href="">
             <img
               src="assets/images/blog/articulo-calefaccion-electrica-vs-gas.jpg"
               alt="Calefacción Eléctrica Vs Calefacción a Gas"
             />
           </a>
           <div className="post-date">
             <a href="#" className="logo-verde-oscuro">
               20 <span>Oct</span>
             </a>
           </div>
         </div>
         <div className="entry-content">
           <a href="#" className="cat-btn">
             <i className="ti-bookmark-alt" /> Recomendaciones
           </a>
           <h3 className="title verdes-logo">
             <a href="">Calefacción Eléctrica Vs Calefacción a Gas</a>
           </h3>
           <div className="post-meta">
             <ul>
               <li>
                 <span>
                   <i className="ti-comments-smiley" />
                   <a href="#">5 Comentarios</a>
                 </span>
               </li>
             </ul>
           </div>
         </div>
       </div>
     </div>
     <div className="col-lg-4 col-md-6 col-sm-12">
       <div
         className="blog-post-item blog-post-item-one mb-40 wow fadeInUp"
         data-wow-delay="310ms"
       >
         <div className="post-thumbnail">
           <a href="">
             <img
               src="assets/images/blog/articulo-asesoria-legal.jpg"
               alt="Asesoramiento Legal"
             />
           </a>
           <div className="post-date">
             <a href="#" className="logo-verde-oscuro">
               20 <span>Oct</span>
             </a>
           </div>
         </div>
         <div className="entry-content">
           <a href="#" className="cat-btn">
             <i className="ti-bookmark-alt" /> Asesoramiento Legal
           </a>
           <h3 className="title verdes-logo">
             <a href="">Me ha llegado una carta documento, que hago?</a>
           </h3>
           <div className="post-meta">
             <ul>
               <li>
                 <span>
                   <i className="ti-comments-smiley" />
                   <a href="#">5 Comentarios</a>
                 </span>
               </li>
             </ul>
           </div>
         </div>
       </div>
     </div>
   </div>
   <div className="row">
     <div className="col-lg-12">
       <div className="button text-center mt-40">
         <a href="blog.html" className="main-btn icon-btn redondeado">
           VER MAS ARTICULOS
         </a>
       </div>
     </div>
   </div>
 </div>
</section>
{/*====== End Blog Section ======*/}
{/*====== End BlogSection ======*/}

main.js
/*-----------------------------------------------------------------------------------
    Template Name: Fioxen - Directory & Listings HTML Template
    Template URI: site.com
    Description: Fioxen - Directory & Listings HTML Template
    Author: WebTend 
    Author URI: https://webtend.net/
    Version: 1.0

    Note: This is Main Js file
-----------------------------------------------------------------------------------
    Js INDEX
    ===================
    ## Main Menu
    ## Panel Widget
    ## Prealoder
    ## Sticky
    ## Back to top
    ## Counter
    ## WOW
    ## Magnific-popup
    ## Nice select
    ## Slick Slider
-----------------------------------------------------------------------------------*/

(function($) {
    'use strict';

    //===== Main Menu
    function mainMenu() {
        // Variables
        var var_window = $(window),
            navContainer = $('.header-navigation'),
            navbarToggler = $('.navbar-toggler'),
            navMenu = $('.nav-menu'),
            navMenuLi = $('.nav-menu ul li ul li'),
            closeIcon = $('.navbar-close');
        // navbar toggler
        navbarToggler.on('click', function() {
            navbarToggler.toggleClass('active');
            navMenu.toggleClass('menu-on');
        });
        // close icon
        closeIcon.on('click', function() {
            navMenu.removeClass('menu-on');
            navbarToggler.removeClass('active');
        });
        // adds toggle button to li items that have children
        navMenu.find('li a').each(function() {
            if ($(this).next().length > 0) {
                $(this).parent('li').append('<span class="dd-trigger"><i class="ti-arrow-down"></i></span>');
            }
        });
        // expands the dropdown menu on each click
        navMenu.find('li .dd-trigger').on('click', function(e) {
            e.preventDefault();
            $(this).parent('li').children('ul').stop(true, true).slideToggle(350);
            $(this).parent('li').toggleClass('active');
        });
        // check browser width in real-time
        function breakpointCheck() {
            var windoWidth = window.innerWidth;
            if (windoWidth <= 1199) {
                navContainer.addClass('breakpoint-on');
            } else {
                navContainer.removeClass('breakpoint-on');
            }
        }
        breakpointCheck();
        var_window.on('resize', function() {
            breakpointCheck();
        });
    };
    // Document Ready
    $(document).ready(function() {
        mainMenu();
    });

    // Panel Widget
    var panelIcon = $('.off-menu'),
    panelClose = $('.panel-close'),
    panelWrap = $('.offcanvas-panel');
    panelIcon.on('click', function (e) {
        panelWrap.toggleClass('panel-on');
        e.preventDefault();
    });
    panelClose.on('click', function (e) {
        panelWrap.removeClass('panel-on');
        e.preventDefault();
    });
    
    //===== Prealoder
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut('500');
    })
    
    //===== Sticky
    $(window).on('scroll', function(event) {
        var scroll = $(window).scrollTop();
        if (scroll < 190) {
            $(".header-navigation").removeClass("sticky");
        } else {
            $(".header-navigation").addClass("sticky");
        }
    });

    //===== Back to top
    $(window).on('scroll', function(event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });

    //===== Counter js
    $('.count').counterUp({
        delay: 100,
        time: 4000
    });

    //===== Magnific-popup js
    $('.video-popup').magnificPopup({
        type: 'iframe',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });

    $(".img-popup").magnificPopup({
        type: "image",
         gallery: { 
          enabled: true 
        }
    });
    //===== Nice select js
    $('select').niceSelect();

    
    //===== Slick slider js
    $('.place-slider-one').slick({
		dots: true,
		arrows: false,
        infinite: true,
		autoplaySpeed: 1500,
        autoplay: true,
		slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="ti-arrow-left"></i></div>',
		nextArrow: '<div class="next"><i class="ti-arrow-right"></i></div>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.listing-slider-one').slick({
		dots: false,
		arrows: true,
        infinite: true,
		autoplaySpeed: 1500,
        autoplay: true,
		slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="ti-arrow-left"></i></div>',
		nextArrow: '<div class="next"><i class="ti-arrow-right"></i></div>',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.listing-slider-two').slick({
		dots: false,
		arrows: false,
        infinite: true,
		autoplaySpeed: 1500,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        variableWidth: true
    });
    $('.client-slider-one').slick({
		dots: false,
		arrows: false,
        infinite: true,
		autoplaySpeed: 1500,
        autoplay: true,
		slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="ti-arrow-left"></i></div>',
		nextArrow: '<div class="next"><i class="ti-arrow-right"></i></div>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.gallery-slider-one').slick({
		dots: false,
		arrows: false,
		autoplaySpeed: 1500,
        autoplay: true,
		slidesToShow: 4,
		slidesToScroll: 1
    });
    $('.testimonial-thumb-slider-one').slick({
		dots: false,
		arrows: false,
		autoplaySpeed: 1500,
		focusOnSelect: true,
        autoplay: true,
		asNavFor: '.testimonial-content-slider-one',
		slidesToShow: 3,
		slidesToScroll: 1
    });
    $('.testimonial-content-slider-one').slick({
		dots: false,
		arrows: false,
		infinite: true,
		autoplaySpeed: 1500,
        autoplay: true,
		asNavFor: '.testimonial-thumb-slider-one',
        fade: true,
		slidesToShow: 1,
		slidesToScroll: 1
    });

    $('.products-thumb-gallery-slider').slick({
		dots: false,
		arrows: false,
		autoplaySpeed: 1500,
		focusOnSelect: true,
        autoplay: true,
        vertical: true,
		asNavFor: '.products-big-gallery-slider',
		slidesToShow: 3,
		slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    vertical: false
                }
            }
        ]
    });
    $('.products-big-gallery-slider').slick({
		dots: false,
		arrows: false,
		infinite: true,
		autoplaySpeed: 1500,
        autoplay: true,
		asNavFor: '.products-thumb-gallery-slider',
        fade: true,
		slidesToShow: 1,
		slidesToScroll: 1
    });
    $('.releted-products-slider-one').slick({
		dots: false,
		arrows: false,
        infinite: true,
		autoplaySpeed: 1500,
        autoplay: true,
		slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="ti-arrow-left"></i></div>',
		nextArrow: '<div class="next"><i class="ti-arrow-right"></i></div>',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.releted-listing-slider-one').slick({
		dots: false,
		arrows: false,
        infinite: true,
		autoplaySpeed: 1500,
        autoplay: true,
		slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="ti-arrow-left"></i></div>',
		nextArrow: '<div class="next"><i class="ti-arrow-right"></i></div>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    //===== Quantity Number js
    $('.quantity-down').on('click', function(){
        var numProduct = Number($(this).next().val());
        if(numProduct > 0) $(this).next().val(numProduct - 1);
    });
    $('.quantity-up').on('click', function(){
        var numProduct = Number($(this).prev().val());
        $(this).prev().val(numProduct + 1);
    });

    //===== Wow js
    new WOW().init();

    //====== Isotope js
    $('.masonry-place-area').imagesLoaded( function() {
        var $grid = $('.masonry-place-row').isotope({
            itemSelector: '.place-column',
            percentPosition: true,
            masonry: {
                columnWidth: 1
            }
        });
    }); 

    //======= Price ranger
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 4000,
        values: [ 400, 3500 ],
        slide: function( event, ui ) {
          $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) );

})(window.jQuery);