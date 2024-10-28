import React, { useEffect } from 'react';
import {WOW} from 'wow.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const CarouselSection = () => {
  useEffect(() => {
    // Initialize WOW.js for animation effects
    new WOW.WOW().init();
  }, []);

  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="place-area pt-115 pb-110">
      <div className="container-fluid place-container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-60 wow fadeInUp">
              <span className="sub-title">
                Por hora? Por tarea? Por superficie?
              </span>
              <h2>Servicios con Precios ya Fijados</h2>
            </div>
          </div>
        </div>
        <div className="place-slider-one wow fadeInDown">
          <Slider {...settings}>
            {carouselItems.map((item, index) => (
              <div className="place-item place-item-one" key={index}>
                <div className="place-thumbnail">
                  <img src={item.imgSrc} alt={item.altText} />
                  <div className="place-overlay">
                    <div className="place-content text-center">
                      <span className="listing">{item.listing}</span>
                      <h3 className="title">{item.title}</h3>
                      <a href={item.link} className="arrow-btn">
                        <i className="ti-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

const carouselItems = [
  {
    imgSrc: 'assets/images/precio-fijado-dentista.jpg',
    altText: 'Precio Fijado: Consulta con el Odontologo',
    listing: '10 Proveedores',
    title: 'Consulta Odontológica',
    link: '',
  },
  {
    imgSrc: 'assets/images/precio-fijado-limpieza-piscinas.jpg',
    altText: 'Precio Fijado: Limpieza Piscinas',
    listing: '5 Proveedores',
    title: 'Limpieza de Piscinas',
    link: '',
  },
  {
    imgSrc: 'assets/images/precio-fijado-pintor.jpg',
    altText: 'Precio Fijado: Pintor x M2',
    listing: '33 Proveedores',
    title: 'Pintor x M2',
    link: 'listing-grid.html',
  },
  {
    imgSrc: 'assets/images/precio-fijado-instalacion-de-aires-acondicionados.jpg',
    altText: 'Precio Fijado: Instalacion de Aires Acondicionados',
    listing: '7 Proveedores',
    title: 'Instalacion de Aires Acondicionados',
    link: '',
  },
  {
    imgSrc: 'assets/images/precio-fijado-jardineria.jpg',
    altText: 'Precio Fijado: Jardineria',
    listing: '2 Proveedores',
    title: 'Jardineros',
    link: '',
  },
];

export default CarouselSection;
