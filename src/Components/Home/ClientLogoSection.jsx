import React, { useEffect } from 'react';
import WOW from 'wow.js';
import $ from 'jquery';
import 'slick-carousel';

// Reusable ClientItem component
const ClientItem = ({ logo }) => (
  <div className="client-item">
    <div className="client-img">
      <a href="#">
        <img src={logo.src} alt={logo.alt} />
      </a>
    </div>
  </div>
);

const ClientLogoSection = () => {
  // List of client logos
  const clientLogos = [
    { src: 'assets/images/marcas/homecenter.jpg', alt: 'HOMECENTER' },
    { src: 'assets/images/marcas/pinturas-pintuco.jpg', alt: 'PINTURAS PINTUCO' },
    { src: 'assets/images/marcas/pavco.jpg', alt: 'CAÑOS PLAVCO' },
    { src: 'assets/images/marcas/pinturas-bler.jpg', alt: 'PINTURAS BLER' },
    { src: 'assets/images/marcas/corona.jpg', alt: 'SANITARIOS CORONA' },
    { src: 'assets/images/marcas/hcm.jpg', alt: 'IMPERMEABILIZANTES HCM' },
    { src: 'assets/images/marcas/colgres.jpg', alt: 'LADRILLOS COLGRES' },
  ];

  useEffect(() => {
    // Initialize WOW.js for animation effects
    new WOW().init();

    // Ensure the DOM is fully loaded before initializing Slick slider
    const initializeSlider = () => {
      const slider = $('.client-slider-one');
      if (slider.length > 0) {
        slider.slick({
          dots: false,
          arrows: false,
          infinite: true,
          autoplaySpeed: 1500,
          autoplay: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });
      }
    };

    // Add a delay to ensure elements are ready
    setTimeout(initializeSlider, 500);

    // Cleanup on component unmount
    return () => {
      if ($('.client-slider-one').hasClass('slick-initialized')) {
        $('.client-slider-one').slick('unslick');
      }
    };
  }, []);

  return (
    <section className="client-area pt-120">
      <div className="client-wrapper-one pb-120">
        <div className="container">
          <div className="client-slider-one wow fadeInDown">
            {clientLogos.map((logo, index) => (
              <ClientItem key={index} logo={logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogoSection;
