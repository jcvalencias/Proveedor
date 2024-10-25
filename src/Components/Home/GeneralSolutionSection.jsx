import React, { useEffect } from 'react';
import WOW from 'wowjs';

const GeneralSolutionSection = () => {

  useEffect(() => {
    // Initialize WOW.js for animation effects
    new WOW.WOW().init();
  }, []);

  return (
    <section className="category-area pt-110 pb-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title section-title-two text-center mb-60 wow fadeInUp">
              <h2>
                Soluciones <span className="line">Para la Casa</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {/** Category Items **/}
          {categoryItems.map((item, index) => (
            <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
              <div
                className="category-item category-item-two mb-50 wow fadeInUp"
                data-wow-delay={item.delay}
              >
                <div className="category-img">
                  <img
                    src={item.imgSrc}
                    alt={item.altText}
                  />
                  <div className="category-overlay">
                    <div className="category-content">
                      <a href={item.link}>
                        <img
                          src="assets/images/logo-v.png"
                          height={75}
                          width={120}
                          alt={item.altText}
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="info">
                  <div className="icon">
                    <i className={item.iconClass} />
                  </div>
                  <h3 className="title">
                    <a href="#">{item.title}</a>
                  </h3>
                  <span className="listing">{item.providers}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const categoryItems = [
  {
    imgSrc: "assets/images/servicios/servicio-plomeria.jpg",
    altText: "Servicio de Plomeria",
    link: "servicio-plomeria.html",
    iconClass: "flaticon-government",
    title: "Plomeros",
    providers: "15 Proveedores",
    delay: ".2s"
  },
  {
    imgSrc: "assets/images/servicios/servicio-gasista.jpg",
    altText: "Servicio de Gasista",
    link: "servicio-gasista.html",
    iconClass: "flaticon-serving-dish",
    title: "Gasista",
    providers: "24 Proveedores",
    delay: ".25s"
  },
  {
    imgSrc: "assets/images/servicios/servicio-electricista.jpg",
    altText: "Servicio de Electricista",
    link: "servicio-electricista.html",
    iconClass: "flaticon-dumbbell",
    title: "Electricista",
    providers: "55 Proveedores",
    delay: ".3s"
  },
  {
    imgSrc: "assets/images/servicios/servicio-pintor.jpg",
    altText: "Servicio de Pintor",
    link: "servicio-pintor.html",
    iconClass: "flaticon-gift-box",
    title: "Pintor",
    providers: "35 Proveedores",
    delay: ".35s"
  },
  {
    imgSrc: "assets/images/servicios/servicio-jardinero.jpg",
    altText: "Servicio de Jardinero",
    link: "servicio-jardinero.html",
    iconClass: "flaticon-game-controller",
    title: "Jardinero",
    providers: "5 Provedores",
    delay: ".4s"
  },
  {
    imgSrc: "assets/images/servicios/servicio-aire-acondicionado.jpg",
    altText: "Servicio de Aires Acondicionados",
    link: "servicio-aire-acondicionado.html",
    iconClass: "flaticon-suitcase",
    title: "Aires Acondicionados",
    providers: "7 Proveedores",
    delay: ".45s"
  },
  {
    imgSrc: "assets/images/servicios/servicio-cerrajero.jpg",
    altText: "Servicio de Cerrajero",
    link: "servicio-cerrajero.html",
    iconClass: "flaticon-shopping",
    title: "Cerrajero",
    providers: "3 Proveedores",
    delay: ".5s"
  },
  {
    imgSrc: "assets/images/servicios/servicio-techista.jpg",
    altText: "Servicio de Techista",
    link: "servicio-techista.html",
    iconClass: "flaticon-color-palette",
    title: "Techista",
    providers: "2 Proveedores",
    delay: ".55s"
  }
];

export default GeneralSolutionSection;
