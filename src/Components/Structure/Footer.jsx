import React, { useEffect } from "react";
import {WOW} from 'wow.js';

const Footer = () => {
  useEffect(() => {
    // Initialize WOW.js for animations
    new WOW.WOW().init();

  }, []);

  // Handle form submission or other interactions if needed
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add logic for form submission or additional features as needed
  };

  return (
    <footer className="footer-area">
      <div className="footer-wrapper-one fondo-verde-oscuro pt-90">
        <div className="footer-widget pb-60">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  className="widget about-widget mb-40 wow fadeInUp"
                  data-wow-delay="10ms"
                >
                  <h4 className="widget-title">Pruebalo desde tu Movil</h4>
                  <ul className="button">
                    <li>
                      <a href="#" className="app-btn android-btn">
                        <div className="icon">
                          <i className="ti-android" />
                        </div>
                        <div className="info">
                          <span>Descargalo en</span>
                          <h6>Google Play</h6>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="app-btn apple-btn">
                        <div className="icon">
                          <i className="ti-apple" />
                        </div>
                        <div className="info">
                          <span>Descargalo en</span>
                          <h6>App Store</h6>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <div className="footer-social">
                    <h4>Follow Us</h4>
                    <ul className="social-link">
                      <li>
                        <a href="#">
                          <i className="ti-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div
                  className="widget recent-post-widget mb-40 wow fadeInUp"
                  data-wow-delay="20ms"
                >
                  <h4 className="widget-title">Novedades</h4>
                  <ul className="post-widget-list">
                    <li className="post-content-item">
                      <div className="post-title-date">
                        <span className="posted-on">
                          <a href="#" className="verdes-logo">
                            22 Agosto - 2024
                          </a>
                        </span>
                        <h6 className="title">
                          <a href="#">Nueva Versión del Presupuestador</a>
                        </h6>
                      </div>
                    </li>
                    <li className="post-content-item">
                      <div className="post-title-date">
                        <span className="posted-on">
                          <a href="#" className="verdes-logo">
                            12 Septiembre - 2024
                          </a>
                        </span>
                        <h6 className="title">
                          <a href="#">
                            Adjunta fotos y videos en el Presupuestador
                          </a>
                        </h6>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12">
                <div
                  className="widget categories-widget mb-40 wow fadeInUp"
                  data-wow-delay="30ms"
                >
                  <h4 className="widget-title">Destacados</h4>
                  <ul className="categories-link">
                    <li>
                      <a href="#">Precios Fijados</a>
                    </li>
                    <li>
                      <a href="#">En Tu Zona</a>
                    </li>
                    <li>
                      <a href="#">Promocionales</a>
                    </li>
                    <li>
                      <a href="#">Consejos</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div
                  className="widget newsletter-widget mb-40 wow fadeInUp"
                  data-wow-delay="40ms"
                >
                  <h4 className="widget-title">Newsletter</h4>
                  <p>Recibe Cupones de Descuento, Ofertas y Novedades</p>
                  <form onSubmit={handleFormSubmit}>
                    <div className="form_group">
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Ingresa tu Email"
                        name="email"
                        required
                      />
                    </div>
                    <div className="form_group">
                      <button className="main-btn" type="submit">
                        Subscribete
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="copyright-text">
                  <p>
                    Desea ver su Servicio en SOLUKAY? <span>PUBLIQUE AQUI</span>
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="copyright-link">
                  <ul>
                    <li>
                      <a href="#">Terminos &amp; Condiciones</a>
                    </li>
                    <li>
                      <a href="#">Ayuda</a>
                    </li>
                    <li>
                      <a href="#">Trabajar Con Nosotros</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;