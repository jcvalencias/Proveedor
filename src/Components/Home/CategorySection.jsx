import React, { useEffect } from 'react';
import WOW from 'wow.js';

const CategorySection = () => {

  useEffect(() => {
    // Initialize WOW.js for animation effects
    new WOW().init();
  }, []);

  return (
    <section className="category-area">
      <div className="container">
        <div className="category-wrapper-one wow fadeInDown">
          <div className="row no-gutters">
            <div className="col-lg-2 col-md-4 category-column">
              <div className="category-item category-item-one">
                <div className="info text-center">
                  <div className="icon">
                    <img
                      src="assets/images/svg/para-el-hombre.svg"
                      height={68}
                      alt="Soluciones para el Hombre"
                    />
                  </div>
                  <h6>Para el Hombre</h6>
                </div>
                <a href="index.html" className="category-btn">
                  <i className="ti-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 category-column">
              <div className="category-item category-item-one">
                <div className="info text-center">
                  <div className="icon">
                    <img
                      src="assets/images/svg/para-la-mujer.svg"
                      height={68}
                      alt="Soluciones para la Mujer"
                    />
                  </div>
                  <h6>Para la Mujer</h6>
                </div>
                <a href="index.html" className="category-btn">
                  <i className="ti-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 category-column">
              <div className="category-item category-item-one">
                <div className="info text-center">
                  <div className="icon">
                    <img
                      src="assets/images/svg/para-la-pareja.svg"
                      height={68}
                      alt="Soluciones para la Pareja"
                    />
                  </div>
                  <h6>Para la Pareja</h6>
                </div>
                <a href="index.html" className="category-btn">
                  <i className="ti-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 category-column">
              <div className="category-item category-item-one">
                <div className="info text-center">
                  <div className="icon">
                    <img
                      src="assets/images/svg/para-la-casa.svg"
                      height={68}
                      alt="Soluciones para la Casa"
                    />
                  </div>
                  <h6>Para la Casa</h6>
                </div>
                <a href="index.html" className="category-btn">
                  <i className="ti-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 category-column">
              <div className="category-item category-item-one">
                <div className="info text-center">
                  <div className="icon">
                    <img
                      src="assets/images/svg/para-el-trabajo.svg"
                      height={68}
                      alt="Soluciones para el Trabajo"
                    />
                  </div>
                  <h6>Para el Trabajo</h6>
                </div>
                <a href="index.html" className="category-btn">
                  <i className="ti-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 category-column">
              <div className="category-item category-item-one">
                <div className="info text-center">
                  <div className="icon">
                    <img
                      src="assets/images/svg/para-las-novedades.svg"
                      height={68}
                      alt="Nuevas Soluciones!"
                    />
                  </div>
                  <h6>Novedades</h6>
                </div>
                <a href="index.html" className="category-btn">
                  <i className="ti-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
