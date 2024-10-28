import React, { useEffect } from 'react';
import {WOW} from 'wow.js';
import $ from 'jquery';
import 'slick-carousel';

// Reusable ListingItem component
const ListingItem = ({ image, alt, featured, ratingClass, reviews, title, description, phone, status, statusClass, location, detailsLink }) => (
  <div className="listing-item listing-grid-item-two">
    <div className="listing-thumbnail">
      <img src={image} alt={alt} />
      <a href="#" className="cat-btn">
        <i className="flaticon-chef" />
      </a>
      <span className="featured-btn">{featured}</span>
      <ul className={`ratings ${ratingClass} fondo-opiniones`}>
        {[...Array(5)].map((_, index) => (
          <li key={index} className="star">
            <i className="flaticon-star-1" />
          </li>
        ))}
        <li>
          <span>
            <a href="#">({reviews} Opiniones)</a>
          </span>
        </li>
      </ul>
    </div>
    <div className="listing-content">
      <h3 className="title">
        <a href={detailsLink}>{title}</a>
      </h3>
      <p>{description}</p>
      <span className="phone-meta">
        <i className="ti-tablet" />
        <a href={`tel:${phone}`}>{phone}</a>
        <span className={`status ${statusClass}`}>{status}</span>
      </span>
      <div className="listing-meta">
        <ul>
          <li>
            <span>
              <i className="ti-location-pin" />
              {location}
            </span>
          </li>
          <li>
            <span>
              <i className="ti-heart" />
              <a href="#">Guardar</a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const NearbySection = () => {
  // List of listings
  const listings = [
    {
      image: 'assets/images/en-tu-zona-cortar-pasto.jpg',
      alt: 'Cortar el Pasto',
      featured: 'VISITA SIN CARGO',
      ratingClass: 'ratings-five',
      reviews: 12,
      title: 'Cortado de Pasto',
      description: 'Incluye Limpieza de Malezas',
      phone: '+98 (265) 3652 - 05',
      status: 'ATIENDE HOY',
      statusClass: 'st-open',
      location: 'Barrio XYZ, Bogotá',
      detailsLink: 'listing-details-1.html',
    },
    {
      image: 'assets/images/en-tu-zona-limpieza-casas.jpg',
      alt: 'Limpieza de Casas',
      featured: '$80 x hora',
      ratingClass: 'ratings-four',
      reviews: 32,
      title: 'Limpieza del Hogar',
      description: 'Ofrece Servicio de Planchado',
      phone: '+98 (265) 3652 - 05',
      status: 'LIBRE DESDE EL 30/7',
      statusClass: 'st-open',
      location: 'Barrio XYZ, Bogotá',
      detailsLink: 'listing-details-1.html',
    },
    {
      image: 'assets/images/en-tu-zona-baby-sitter.jpg',
      alt: 'Baby Sitting',
      featured: '$50 x hora',
      ratingClass: 'ratings-four',
      reviews: 2,
      title: 'Cuidado de Niños',
      description: 'Baby sitting',
      phone: '+98 (265) 3652 - 05',
      status: 'LIBRE HOY',
      statusClass: 'st-open',
      location: 'Barrio XYZ, Bogotá',
      detailsLink: 'listing-details-1.html',
    },
    {
      image: 'assets/images/en-tu-zona-cambio-aceite.jpg',
      alt: 'Cambio de Aceite Automotor',
      featured: 'desde $250',
      ratingClass: 'ratings-five',
      reviews: 12,
      title: 'Cambio de Aceite Automotor',
      description: 'Servicio Automotor',
      phone: '+98 (265) 3652 - 05',
      status: 'LIBRE HOY',
      statusClass: 'st-open',
      location: 'Barrio XYZ, Bogotá',
      detailsLink: 'listing-details-1.html',
    },
  ];

  useEffect(() => {
    // Initialize WOW.js for animations
    new WOW.WOW().init();

    // Initialize Slick slider
    const initializeSlider = () => {
      const slider = $('.listing-slider-one');
      if (slider.length > 0) {
        slider.slick({
          dots: false,
          arrows: true,
          infinite: true,
          autoplaySpeed: 1500,
          autoplay: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [
            { breakpoint: 1400, settings: { slidesToShow: 3 } },
            { breakpoint: 1200, settings: { arrows: false, slidesToShow: 2 } },
            { breakpoint: 767, settings: { arrows: false, slidesToShow: 1 } },
          ],
        });
      }
    };

    // Ensure elements are ready before initializing slider
    setTimeout(initializeSlider, 500);

    // Cleanup on component unmount
    return () => {
      if ($('.listing-slider-one').hasClass('slick-initialized')) {
        $('.listing-slider-one').slick('unslick');
      }
    };
  }, []);

  return (
    <section className="listing-grid-area pt-75 pb-110">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-60 wow fadeInUp">
              <span className="sub-title">
                Aprovecha Soluciones que estan cerca tuyo
              </span>
              <h2>Destacados en Tu Zona</h2>
            </div>
          </div>
        </div>
        <div className="listing-slider-one wow fadeInDown">
          {listings.map((item, index) => (
            <ListingItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NearbySection;
