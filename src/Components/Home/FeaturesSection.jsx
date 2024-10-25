import React, { useEffect } from 'react';
import WOW from 'wowjs';

const FeaturesSection = () => {
  useEffect(() => {
    // Initialize WOW.js for animation effects
    new WOW.WOW().init();
  }, []);

  return (
    <>
      {/*====== Start Offer Section ======*/}
      <section className="cta-area">
        <div
          className="cta-wrapper-one bg_cover"
          style={{ backgroundImage: "url(assets/images/suscribite.jpg)" }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="cta-content-box text-center wow fadeInUp">
                  <img src="assets/images/icon-discount.png" alt="offer icon" />
                  <h2>
                    Recibe Ofertas
                    <br />
                    de Servicios
                    <br />
                    con Descuentos
                    <br />
                    en tu Email
                  </h2>
                  <a href="how-work.html" className="main-btn icon-btn">
                    Suscribite!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Offer Section ======*/}

      {/*====== Start Features Section ======*/}
      <section className="features-area">
        <div className="features-wrapper-one pt-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="features-img wow fadeInLeft">
                  <img
                    src="assets/images/presupuestador.png"
                    alt="Recibe Presupuestos sin costo!"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="features-content-box features-content-box-one">
                  <div className="section-title section-title-left mb-25 wow fadeInUp">
                    <span className="sub-title">Beneficio Exclusivo</span>
                    <h2>Recibe Presupuestos en tu email sin costo!</h2>
                  </div>
                  <h5>
                    <em>
                      Puedes pedir que te coticen lo que necesitas y así elegir la
                      opción que más te sirva. Gratis!
                    </em>
                  </h5>
                  <ul className="features-list-one">
                    {featuresList.map((feature, index) => (
                      <li
                        className="list-item wow fadeInUp"
                        data-wow-delay={feature.delay}
                        key={index}
                      >
                        <div className="icon">
                          <img src={feature.iconSrc} alt={feature.altText} />
                        </div>
                        <div className="content">
                          <h5>
                            <strong>{feature.title}</strong>
                          </h5>
                          <p>{feature.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
    </>
  );
};

const featuresList = [
  {
    iconSrc: "assets/images/icono-camara.png",
    altText: "sacar fotos",
    title: "Agrega Fotos y Video",
    description:
      "Para mostrar mejor lo que necesitas, ahora puedes subir fotos y video a tus pedidos de presupuesto.",
    delay: "10ms"
  },
  {
    iconSrc: "assets/images/icono-comparar.png",
    altText: "comparar proveedores",
    title: "Compara antes de Elegir",
    description:
      "Cuantas más opciones, mejor. Y así sabrás qué tipo de servicio, que alternativas tienes y a que precio solucionarlo.",
    delay: "20ms"
  },
  {
    iconSrc: "assets/images/icono-filtrar.png",
    altText: "filtra a los proveedores",
    title: "Elige que es lo más importante para ti",
    description:
      "Puedes filtrar proveedores por precio, disponibilidad, opiniones de otros usuarios que lo hayan contratado, etc. Tu decides!",
    delay: "30ms"
  }
];

export default FeaturesSection;
