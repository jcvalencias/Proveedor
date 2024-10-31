import React, { useEffect } from 'react';
import WOW from 'wow.js';

const NewsletterSection = () => {
  useEffect(() => {
    // Initialize WOW.js for animation effects
    new WOW().init();
  }, []);

  return (
    <section className="newsletter-area">
      <div className="container">
        <div
          className="newsletter-wrapper newsletter-wrapper-one bg_cover"
          style={{ backgroundImage: "url(assets/images/bg/newsletter-bg-1.jpg)" }}
        >
          <div className="row">
            <div className="col-lg-5">
              <div className="newsletter-content-box-one wow fadeInLeft">
                <div>
                  <img
                    src="assets/images/icono-descuentos.png"
                    alt="Descuentos por Email"
                  />
                </div>
                <div className="content">
                  <h2>Recibe Descuentos</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="newsletter-form wow fadeInRight">
                <div className="form_group">
                  <input
                    type="email"
                    className="form_control"
                    placeholder="Ingresa tu Email"
                    name="email"
                    required
                  />
                  <i className="ti-location-pin" />
                  <button className="main-btn">Suscribirse</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
