import React, { useEffect } from 'react';
import WOW from 'wow.js';

const PromotionalSection = () => {

  useEffect(() => {
    // Initialize WOW.js for animation effects
    new WOW().init();
  }, []);

  return (
    <section className="listing-grid-area pt-115 pb-75">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-75 wow fadeInUp">
              <span className="sub-title">Sólo por Tiempo Limitado!</span>
              <h2>Servicios en Promoción</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {promotionalItems.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
              <div
                className="listing-item listing-grid-one mb-45 wow fadeInUp"
                data-wow-delay={item.delay}
              >
                <div className="listing-thumbnail">
                  <img
                    src={item.imgSrc}
                    alt={item.altText}
                  />
                  <span className="featured-btn">{item.featuredText}</span>
                  <div className="thumbnail-meta d-flex justify-content-between align-items-center">
                    <div className="meta-icon-title d-flex align-items-center">
                      <div className="icon">
                        <i className={item.iconClass} />
                      </div>
                      <div className="title">
                        <h6>{item.providerName}</h6>
                      </div>
                    </div>
                    <span className={`status ${item.statusClass}`}>{item.status}</span>
                  </div>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <a href={item.link}>{item.title}</a>
                  </h3>
                  <div className="ratings">
                    <ul className="ratings ratings-three">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <li className="star" key={i}>
                          <i className="flaticon-star-1" />
                        </li>
                      ))}
                      <li>
                        <span>
                          <a href="#">{item.reviews}</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <span className="price">{item.price}</span>
                  <span className="phone-meta">
                    <i className="ti-tablet" />
                    <a href={`tel:${item.phone}`}>{item.phone}</a>
                  </span>
                  <div className="listing-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="ti-location-pin" />
                          {item.location}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const promotionalItems = [
  {
    imgSrc: "assets/images/servicios/promo-canaletas.jpg",
    altText: "Instalacion y Reparacion de Canaletas",
    featuredText: "Con Garantía",
    iconClass: "flaticon-chef",
    providerName: "Juan Perez Techos",
    status: "Abierto",
    statusClass: "st-open",
    title: "Zingería y Techos",
    link: "",
    reviews: "(02 Opiniones)",
    price: "Desde: $80",
    phone: "+98 (265) 3652 - 05",
    location: "Bogotá, y alrededores",
    delay: "10ms"
  },
  {
    imgSrc: "assets/images/servicios/promo-corte-de-pelo.jpg",
    altText: "Corte de Pelo Masculino en Promocion",
    featuredText: "25% DE DESCUENTO",
    iconClass: "flaticon-government",
    providerName: "Peluquerías XYZ",
    status: "Cierra Pronto",
    statusClass: "st-open",
    title: "Corte de Pelo Masculino",
    link: "",
    reviews: "(10 Opiniones)",
    price: <><s>$1500</s> - $1125</>,
    phone: "+98 (265) 3652 - 05",
    location: "Cali, Bogotá",
    delay: "20ms"
  },
  {
    imgSrc: "assets/images/servicios/promo-protector-celular.jpg",
    altText: "Cambio de GorillaGlass del Celular en Promocion",
    featuredText: "2x1",
    iconClass: "flaticon-dumbbell",
    providerName: "Accesorios Mobiles ABC",
    status: "Cerrado",
    statusClass: "st-close",
    title: "Cambio de GorillaGlass del Celular",
    link: "listing-details-1.html",
    reviews: "(12 Opiniones)",
    price: "$05.00 - $80.00",
    phone: "+98 (265) 3652 - 05",
    location: "Medellín",
    delay: "30ms"
  }
];

export default PromotionalSection;
