import React, { useEffect } from 'react';
import WOW from 'wow.js';

const HeroSection = () => {

  useEffect(() => {
    // Initialize WOW.js for animation effects
    new WOW().init();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <section className="hero-area">
      <div className="hero-wrapper-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="hero-content">
                <h1 className="wow fadeInUp blanco" data-wow-delay="30ms">
                  Busca, elige
                  <br />y soluciona
                  <br />
                  lo que sea
                </h1>
                <h3 className="wow fadeInDown blanco" data-wow-delay="50ms">
                  para ti, tu casa, el trabajo ...
                </h3>
                <div
                  className="hero-search-wrapper wow fadeInUp blanco"
                  data-wow-delay="70ms"
                >
                  <form onSubmit={handleFormSubmit}>
                    <div className="row">
                      <div className="col-lg-5 col-md-4 col-sm-12">
                        <div className="form_group">
                          <input
                            type="search"
                            className="form_control"
                            placeholder="Buscar por Servicio"
                            name="search"
                            required
                          />
                          <i className="ti-ink-pen" />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="tu zona"
                            name="location"
                            required
                          />
                          <i className="ti-location-pin" />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="form_group">
                          <button className="main-btn icon-btn">Buscar</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <p className="tags">
                  <span>
                    <strong>Popular:</strong>
                  </span>
                  <a href="#">
                    <em>Peluquerías</em>
                  </a>
                  <em>
                    , <a href="#">Restaurantes</a>, <a href="#">Plomeros</a>,{' '}
                    <a href="#">Abogados</a>, <a href="#">Contadores</a>,{' '}
                    <a href="#">Pintores</a>, <a href="#">Jardineros</a>
                  </em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
