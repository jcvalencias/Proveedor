import React, { useEffect } from 'react';
import WOW from 'wow.js';
import CounterUp from 'react-countup';

const DownloadSection = () => {
  useEffect(() => {
    // Initialize WOW.js for animation effects
    new WOW().init();
  }, []);

  return (
    <section className="download-app">
      <div className="download-wrapper-one pt-115">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="app-img wow fadeInLeft">
                <img
                  src="assets/images/descargar-solukay.png"
                  alt="Descargar la App de Solukay"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="download-content-box download-content-box-one">
                <div className="section-title section-title-left mb-25 wow fadeInUp">
                  <span
                    className="sub-title"
                    style={{
                      color: "#fff",
                      backgroundColor: "#a6ce39",
                      padding: 10,
                      borderRadius: 15,
                      display: "inline-block",
                    }}
                  >
                    Descarga Nuestra App
                  </span>
                  <h2 style={{ color: "#fff", textShadow: "2px 2px 2px #030" }}>
                    Soluciona lo que sea desde el alcance de tu mano!
                  </h2>
                </div>
                <p>
                  <strong>
                    Ahora ya puedes gestionar todo Solukay desde tu teléfono móvil
                  </strong>
                </p>
                <ul className="button wow fadeInDown">
                  <li>
                    <a href="#" className="app-btn">
                      <div className="icon">
                        <i className="ti-android" />
                      </div>
                      <div className="info">
                        <span>Consíguelo en</span>
                        <h6>Google Play</h6>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="app-btn">
                      <div className="icon">
                        <i className="ti-apple" />
                      </div>
                      <div className="info">
                        <span>Consíguelo en</span>
                        <h6>App Store</h6>
                      </div>
                    </a>
                  </li>
                </ul>
                <div className="counter-area pt-120">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-ms-12">
                      <div className="counter-item counter-item-one wow fadeInUp">
                        <div className="info">
                          <h3>
                            <CounterUp start={0} end={25} duration={2} />
                          </h3>
                          <h4>
                            <span>Categorias</span> de Servicios
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-ms-12">
                      <div className="counter-item counter-item-one wow fadeInUp">
                        <div className="info">
                          <h3>
                            <CounterUp start={0} end={12345} duration={2} />
                          </h3>
                          <h4>
                            <span>Usuarios</span> Activos
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-ms-12">
                      <div className="counter-item counter-item-one wow fadeInUp">
                        <div className="info">
                          <h3>
                            <CounterUp start={0} end={97.4} decimals={1} duration={2} />
                            %
                          </h3>
                          <h4>
                            <span>Usuarios</span> Satisfechos
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
