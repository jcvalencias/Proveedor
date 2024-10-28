import React, { useEffect } from 'react';
import {WOW} from 'wow.js';

const ExploreSection = () => {
  useEffect(() => {
    // Initialize WOW.js for animation effects
    new WOW.WOW().init();
  }, []);

  return (
    <section className="intro-video">
      <div
        className="intro-wrapper-one bg_cover pt-115"
        style={{ backgroundImage: "url(assets/images/reparaciones-hogar.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5"></div>
            <div className="col-lg-7">
              <div className="intro-content-box intro-content-box-one wow fadeInRight">
                <div className="section-title section-title-left section-title-white mb-35">
                  <span className="sub-title">Soluciones para el Hogar</span>
                  <h2>Necesitas reparar o mejorar algo en tu hogar?</h2>
                </div>
                <p>
                  Desde esa canilla que pierde agua en tu cocina hasta
                  re-acondicionar el cuarto de los niños, todo está aquí. ¡Hasta el
                  arquitecto para esos planos!
                </p>
                <a href="#" className="main-btn icon-btn">
                  Explora las Categorías
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
