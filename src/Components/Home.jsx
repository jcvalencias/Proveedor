import { useState, useEffect } from 'react';
import UsuarioForm from './Admin/Admin';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';

const Home = () => {

  const PreLoader = () => {
    return (
      <div className="preloader">
            <div className="loader">
                <img src="assets/images/loader.png" alt="loader" />
            </div>
        </div>
    );
  }

  const Header = () => {
    return (<header className="header-area header-area-one fondo-blanco">
    <div className="header-top">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <div className="top-social">
              <ul className="social-link">
                <li>
                  <span>Siguenos en:</span>
                </li>
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
          <div className="col-md-4">
            <div className="top-content text-center">
              <p>
                Recibe ofertas y promos en tu email al{" "}
                <a href="#">Suscribirte a nuestro Newsletter</a>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="top-right">
              <ul className="d-flex">
                <li>
                  <a href='index.html'>
                  {/* <Link to="/admin"> */}
                    <i className="ti-search" />
                    <span>Agregar un Proveedor</span>
                  {/* </Link> */}
                  </a>
                </li>
                <li>
                  <a href="index.html">
                    <i className="ti-heart" />
                    <span>Favoritos</span>
                  </a>
                </li>
                <li>
                  <a href="index.html">
                    <i className="ti-layout-list-thumb" />
                    <span>Presupuestos</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="header-navigation">
      <div className="container-fluid">
        <div className="primary-menu">
          <div className="row">
            <div className="col-lg-2 col-5">
              <div className="site-branding">
                <a href="index.html" className="brand-logo">
                  <img src="assets/images/logo/logo-1.png" alt="Brand Logo" />
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-2">
              <div className="nav-menu">
                <div className="navbar-close">
                  <i className="ti-close" />
                </div>
                <nav className="main-menu">
                  <ul>
                    <li className="menu-item has-children">
                      <a href="index.html" className="active">
                        Home
                      </a>
                      <ul className="sub-menu">
                        <li className="menu-item">
                          <a href="index.html">Home One</a>
                        </li>
                        <li className="menu-item">
                          <a href="index-2.html">Home Two</a>
                        </li>
                        <li className="menu-item">
                          <a href="index-3.html">Home Three</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item">
                      <a href="about.html">About us</a>
                    </li>
                    <li className="menu-item has-children">
                      <a href="#">Listings</a>
                      <ul className="sub-menu">
                        <li className="menu-item">
                          <a href="listing-list.html">Listing List</a>
                        </li>
                        <li className="menu-item">
                          <a href="listing-grid.html">Listing Grid</a>
                        </li>
                        <li className="menu-item">
                          <a href="listing-map.html">Listing Map Grid</a>
                        </li>
                        <li className="menu-item">
                          <a href="listing-details-1.html">
                            Listing Details One
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="listing-details-2.html">
                            Listing Details Two
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item has-children">
                      <a href="#">Pages</a>
                      <ul className="sub-menu">
                        <li className="menu-item">
                          <a href="add-listing.html">Add Listing</a>
                        </li>
                        <li className="menu-item has-children">
                          <a href="#">Products</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="products.html">Our Products</a>
                            </li>
                            <li>
                              <a href="product-details.html">
                                Products Details
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item">
                          <a href="how-work.html">How Work</a>
                        </li>
                        <li className="menu-item">
                          <a href="pricing.html">Pricing</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item has-children">
                      <a href="#">Article</a>
                      <ul className="sub-menu">
                        <li className="menu-item">
                          <a href="blog.html">Our Blog</a>
                        </li>
                        <li className="menu-item">
                          <a href="blog-details.html">Blog details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item">
                      <a href="contact.html">Contact</a>
                    </li>
                    <li className="nav-btn">
                      <a href="add-listing.html" className="main-btn icon-btn">
                        Add Listing
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-lg-4 col-5">
              <div className="header-right-nav">
                <ul className="d-flex align-items-center">
                  <li className="user-btn">
                    <a href="index.html" className="icon">
                      <i className="flaticon-avatar" />
                    </a>
                  </li>
                  <li className="hero-nav-btn">
                    <a href="add-listing.html" className="main-btn icon-btn">
                      Publica tu Servicio
                    </a>
                  </li>
                  <li className="nav-toggle-btn">
                    <div className="navbar-toggler">
                      <span />
                      <span />
                      <span />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>);
  }

  const Footer = () => {
    return (<footer className="footer-area">
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
                        <a href="">Nueva Versión del Presupuestador</a>
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
                        <a href="">
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
                <form>
                  <div className="form_group">
                    <input
                      type="email"
                      className="form_control"
                      placeholder="Ingresa tu Email"
                      name="email"
                      required=""
                    />
                  </div>
                  <div className="form_group">
                    <button className="main-btn">Subscribete</button>
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
  </footer>);
  }

  const Body = () => {
    return (
      <>
      {/*====== Start Hero Section ======*/}
      <section className="hero-area">
        <div className="hero-wrapper-one">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="hero-content">
                  <h1 className="wow fadeInUp blanco" wow-data-delay="30mss">
                    Busca, elige
                    <br />y soluciona
                    <br />
                    lo que sea
                  </h1>
                  <h3 className="wow fadeInDown blanco" wow-data-delay="50ms">
                    para ti, tu casa, el trabajo ...
                  </h3>
                  <div
                    className="hero-search-wrapper wow fadeInUp blanco"
                    wow-data-delay="70ms"
                  >
                    <form>
                      <div className="row">
                        <div className="col-lg-5 col-md-4 col-sm-12">
                          <div className="form_group">
                            <input
                              type="search"
                              className="form_control"
                              placeholder="Buscar por Servicio"
                              name="search"
                              required=""
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
                              required=""
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
                      , <a href="#">Restaurantes</a>, <a href="#">Plomeros</a>,{" "}
                      <a href="#">Abogados</a>, <a href="#">Contadores</a>,{" "}
                      <a href="#">Pintores</a>, <a href="#">Jardineros</a>
                    </em>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Hero Section ======*/}
      {/*====== Start Category Section ======*/}
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
      {/*====== End Category Section ======*/}
      {/*====== Start category Section ======*/}
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
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="category-item category-item-two mb-50 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="category-img">
                  <img
                    src="assets/images/servicios/servicio-plomeria.jpg"
                    alt="Servicio de Plomeria"
                  />
                  <div className="category-overlay">
                    <div className="category-content">
                      <a href="servicio-plomeria.html">
                        <img
                          src="assets/images/logo-v.png"
                          height={75}
                          width={120}
                          alt="Servicio de Plomeria"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="info">
                  <div className="icon">
                    <i className="flaticon-government" />
                  </div>
                  <h3 className="title">
                    <a href="#">Plomeros</a>
                  </h3>
                  <span className="listing">15 Proveedores</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="category-item category-item-two mb-50 wow fadeInUp"
                data-wow-delay=".25s"
              >
                <div className="category-img">
                  <img
                    src="assets/images/servicios/servicio-gasista.jpg"
                    alt="Servicio de Gasista"
                  />
                  <div className="category-overlay">
                    <div className="category-content">
                      <a href="servicio-gasista.html">
                        <img
                          src="assets/images/logo-v.png"
                          height={75}
                          width={120}
                          alt="Servicio de Gasista"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="info">
                  <div className="icon">
                    <i className="flaticon-serving-dish" />
                  </div>
                  <h3 className="title">
                    <a href="#">Gasista</a>
                  </h3>
                  <span className="listing">24 Proveedores</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="category-item category-item-two mb-50 wow fadeInUp"
                data-wow-delay=".30s"
              >
                <div className="category-img">
                  <img
                    src="assets/images/servicios/servicio-electricista.jpg"
                    alt="Servicio de Electricista"
                  />
                  <div className="category-overlay">
                    <div className="category-content">
                      <a href="servicio-electricista.html">
                        <img
                          src="assets/images/logo-v.png"
                          height={75}
                          width={120}
                          alt="Servicio de Electricista"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="info">
                  <div className="icon">
                    <i className="flaticon-dumbbell" />
                  </div>
                  <h3 className="title">
                    <a href="#">Electricista</a>
                  </h3>
                  <span className="listing">55 Proveedores</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="category-item category-item-two mb-50 wow fadeInUp"
                data-wow-delay=".35s"
              >
                <div className="category-img">
                  <img
                    src="assets/images/servicios/servicio-pintor.jpg"
                    alt="Servicio de Pintor"
                  />
                  <div className="category-overlay">
                    <div className="category-content">
                      <a href="servicio-pintor.html">
                        <img
                          src="assets/images/logo-v.png"
                          height={75}
                          width={120}
                          alt="Servicio de Pintor"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="info">
                  <div className="icon">
                    <i className="flaticon-gift-box" />
                  </div>
                  <h3 className="title">
                    <a href="#">Pintor</a>
                  </h3>
                  <span className="listing">35 Proveedores</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="category-item category-item-two mb-50 wow fadeInUp"
                data-wow-delay=".40s"
              >
                <div className="category-img">
                  <img
                    src="assets/images/servicios/servicio-jardinero.jpg"
                    alt="Servicio de Jardinero"
                  />
                  <div className="category-overlay">
                    <div className="category-content">
                      <a href="servicio-jardinero.html">
                        <img
                          src="assets/images/logo-v.png"
                          height={75}
                          width={120}
                          alt="Servicio de Jardinero"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="info">
                  <div className="icon">
                    <i className="flaticon-game-controller" />
                  </div>
                  <h3 className="title">
                    <a href="#">Jardinero</a>
                  </h3>
                  <span className="listing">5 Provedores</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="category-item category-item-two mb-50 wow fadeInUp"
                data-wow-delay=".45s"
              >
                <div className="category-img">
                  <img
                    src="assets/images/servicios/servicio-aire-acondicionado.jpg"
                    alt="Servicio de Aires Acondicionados"
                  />
                  <div className="category-overlay">
                    <div className="category-content">
                      <a href="servicio-aire-acondicionado.html">
                        <img
                          src="assets/images/logo-v.png"
                          height={75}
                          width={120}
                          alt="Servicio de Aires Acondicionados"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="info">
                  <div className="icon">
                    <i className="flaticon-suitcase" />
                  </div>
                  <h3 className="title">
                    <a href="#">Aires Acondicionados</a>
                  </h3>
                  <span className="listing">7 Proveedores</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="category-item category-item-two mb-50 wow fadeInUp"
                data-wow-delay=".50s"
              >
                <div className="category-img">
                  <img
                    src="assets/images/servicios/servicio-cerrajero.jpg"
                    alt="Servicio de Cerrajero"
                  />
                  <div className="category-overlay">
                    <div className="category-content">
                      <a href="servicio-cerrajero.html">
                        <img
                          src="assets/images/logo-v.png"
                          height={75}
                          width={120}
                          alt="Servicio de Cerrajero"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="info">
                  <div className="icon">
                    <i className="flaticon-shopping" />
                  </div>
                  <h3 className="title">
                    <a href="#">Cerrajero</a>
                  </h3>
                  <span className="listing">3 Proveedores</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="category-item category-item-two mb-50 wow fadeInUp"
                data-wow-delay=".55s"
              >
                <div className="category-img">
                  <img
                    src="assets/images/servicios/servicio-techista.jpg"
                    alt="Servicio de Techista"
                  />
                  <div className="category-overlay">
                    <div className="category-content">
                      <a href="servicio-techista.html">
                        <img
                          src="assets/images/logo-v.png"
                          height={75}
                          width={120}
                          alt="Servicio de Techista"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="info">
                  <div className="icon">
                    <i className="flaticon-color-palette" />
                  </div>
                  <h3 className="title">
                    <a href="#">Techista</a>
                  </h3>
                  <span className="listing">2 Proveedores</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End category Section ======*/}
      {/*====== Start Listing Section ======*/}
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
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="listing-item listing-grid-one mb-45 wow fadeInUp"
                dta-wow-delay="10ms"
              >
                <div className="listing-thumbnail">
                  <img
                    src="assets/images/servicios/promo-canaletas.jpg"
                    alt="Instalacion y Reparacion de Canaletas"
                  />
                  <span className="featured-btn">Con Garantía</span>
                  <div className="thumbnail-meta d-flex justify-content-between align-items-center">
                    <div className="meta-icon-title d-flex align-items-center">
                      <div className="icon">
                        <i className="flaticon-chef" />
                      </div>
                      <div className="title">
                        <h6>Juan Perez Techos</h6>
                      </div>
                    </div>
                    <span className="status st-open">Abierto</span>
                  </div>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <a href="">Zingería y Techos</a>
                  </h3>
                  <div className="ratings">
                    <ul className="ratings ratings-three">
                      <li className="star">
                        <i className="flaticon-star-1" />
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1" />
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1" />
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1" />
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1" />
                      </li>
                      <li>
                        <span>
                          <a href="#">(02 Opiniones)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <span className="price">Desde: $80</span>
                  <span className="phone-meta">
                    <i className="ti-tablet" />
                    <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                  </span>
                  <div className="listing-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="ti-location-pin" />
                          Bogotá, y alrededores
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
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="listing-item listing-grid-one mb-45 wow fadeInUp"
                dta-wow-delay="20ms"
              >
                <div className="listing-thumbnail">
                  <img
                    src="assets/images/servicios/promo-corte-de-pelo.jpg"
                    alt="Corte de Pelo Masculino en Promocion"
                  />
                  <span className="featured-btn">25% DE DESCUENTO</span>
                  <div className="thumbnail-meta d-flex justify-content-between align-items-center">
                    <div className="meta-icon-title d-flex align-items-center">
                      <div className="icon">
                        <i className="flaticon-government" />
                      </div>
                      <div className="title">
                        <h6>Peluquerías XYZ</h6>
                      </div>
                    </div>
                    <span className="status st-open">Cierra Pronto</span>
                  </div>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <a href="">Corte de Pelo Masculino</a>
                  </h3>
                  <div className="ratings">
                    <ul className="ratings ratings-three">
                      <li className="star">
                        <i className="flaticon-star-1" />
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1" />
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1" />
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1" />
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1" />
                      </li>
                      <li>
                        <span>
                          <a href="#">(10 Opiniones)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <span className="price">
                    <s>$1500</s> - $1125
                  </span>
                  <span className="phone-meta">
                    <i className="ti-tablet" />
                    <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                  </span>
                  <div className="listing-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="ti-location-pin" />
                          Cali, Bogotá
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
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="listing-item listing-grid-one mb-45 wow fadeInUp"
                dta-wow-delay="30ms"
              >
                <div className="listing-thumbnail">
                  <img
                    src="assets/images/servicios/promo-protector-celular.jpg"
                    alt="Cambio de GorillaGlass del Celular en Promocion"
                  />
                  <span className="featured-btn">2x1</span>
                  <div className="thumbnail-meta d-flex justify-content-between align-items-center">
                    <div className="meta-icon-title d-flex align-items-center">
                      <div className="icon">
                        <i className="flaticon-dumbbell" />
                      </div>
                      <div className="title">
                        <h6>Accesorios Mobiles ABC</h6>
                      </div>
                    </div>
                    <span className="status st-close">Cerrado</span>
                  </div>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <a href="listing-details-1.html">
                      Cambio de GorillaGlass del Celular
                    </a>
                  </h3>
                  <div className="ratings">
                    <ul className="ratings ratings-three">
                      <li className="star">
                        <i className="flaticon-star-1" />
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1" />
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1" />
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1" />
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1" />
                      </li>
                      <li>
                        <span>
                          <a href="#">(12 Opiniones)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <span className="price">$05.00 - $80.00</span>
                  <span className="phone-meta">
                    <i className="ti-tablet" />
                    <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                  </span>
                  <div className="listing-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="ti-location-pin" />
                          Medellín
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
          </div>
        </div>
      </section>
      {/*====== End Listing Section ======*/}
      {/*====== Start offer Section ======*/}
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
      {/*====== End offer Section ======*/}
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
                    <li className="list-item wow fadeInUp" data-wow-delay="10ms">
                      <div className="icon">
                        <img
                          src="assets/images/icono-camara.png"
                          alt="sacar fotos"
                        />
                      </div>
                      <div className="content">
                        <h5>
                          <strong>Agrega Fotos y Video</strong>
                        </h5>
                        <p>
                          Para mostrar mejor lo que necesitas, ahora puedes subir
                          fotos y video a tus pedidos de presupuesto.
                        </p>
                      </div>
                    </li>
                    <li className="list-item wow fadeInUp" data-wow-delay="20ms">
                      <div className="icon">
                        <img
                          src="assets/images/icono-comparar.png"
                          alt="comparar proveedores"
                        />
                      </div>
                      <div className="content">
                        <h5>
                          <strong>Compara antes de Elegir</strong>
                        </h5>
                        <p>
                          Cuantas más opciones, mejor. Y así sabrás qué tipo de
                          servicio, que alternativas tienes y a que precio
                          solucionarlo.
                        </p>
                      </div>
                    </li>
                    <li className="list-item wow fadeInUp" data-wow-delay="30ms">
                      <div className="icon">
                        <img
                          src="assets/images/icono-filtrar.png"
                          alt="filtra a los proveedores"
                        />
                      </div>
                      <div className="content">
                        <h5>
                          <strong>Elige que es lo más importante para ti</strong>
                        </h5>
                        <p>
                          Puedes filtrar proveedores por precio, disponibilidad,
                          opiniones de otros usuarios que lo hayan contratado, etc.
                          Tu decides!
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start Place Section ======*/}
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
            <div className="place-item place-item-one">
              <div className="place-thumbnail">
                <img
                  src="assets/images/precio-fijado-dentista.jpg"
                  alt="Precio Fijado: Consulta con el Odontologo"
                />
                <div className="place-overlay">
                  <div className="place-content text-center">
                    <span className="listing">10 Proveedores</span>
                    <h3 className="title">Consulta Odontológica</h3>
                    <a href="" className="arrow-btn">
                      <i className="ti-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="place-item place-item-one">
              <div className="place-thumbnail">
                <img
                  src="assets/images/precio-fijado-limpieza-piscinas.jpg"
                  alt="Precio Fijado: Limpieza Piscinas"
                />
                <div className="place-overlay">
                  <div className="place-content text-center">
                    <span className="listing">5 Proveedores</span>
                    <h3 className="title">Limpieza de Piscinas</h3>
                    <a href="" className="arrow-btn">
                      <i className="ti-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="place-item place-item-one">
              <div className="place-thumbnail">
                <img
                  src="assets/images/precio-fijado-pintor.jpg"
                  alt="Precio Fijado: Pintor x M2"
                />
                <div className="place-overlay">
                  <div className="place-content text-center">
                    <span className="listing">33 Proveedores</span>
                    <h3 className="title">Pintor x M2</h3>
                    <a href="listing-grid.html" className="arrow-btn">
                      <i className="ti-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="place-item place-item-one">
              <div className="place-thumbnail">
                <img
                  src="assets/images/precio-fijado-instalacion-de-aires-acondicionados.jpg"
                  alt="Precio Fijado: Instalacion de Aires Acondicionados"
                />
                <div className="place-overlay">
                  <div className="place-content text-center">
                    <span className="listing">7 Proveedores</span>
                    <h3 className="title">Australia</h3>
                    <a href="" className="arrow-btn">
                      <i className="ti-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="place-item place-item-one">
              <div className="place-thumbnail">
                <img
                  src="assets/images/precio-fijado-jardineria.jpg"
                  alt="Precio Fijado: Jardineria"
                />
                <div className="place-overlay">
                  <div className="place-content text-center">
                    <span className="listing">2 Proveedores</span>
                    <h3 className="title">Jardineros</h3>
                    <a href="" className="arrow-btn">
                      <i className="ti-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Place Section ======*/}
      {/*====== Start Download Section ======*/}
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
                        display: "inline-block"
                      }}
                    >
                      Descarga Nuestra App
                    </span>
                    <h2 style={{ color: "#fff", textShadow: "2px 2px 2px #030" }}>
                      Soluciona lo que sea desde al alcance de tu mano!
                    </h2>
                  </div>
                  <p>
                    <strong>
                      Ahora ya puedes gestionar todo Solukay desde tu teléfono móvil
                    </strong>
                  </p>
                  <ul className="button wow fadeInDown">
                    <li>
                      <a href="" className="app-btn">
                        <div className="icon">
                          <i className="ti-android" />
                        </div>
                        <div className="info">
                          <span>Consíguelo en</span>
                          <h6>Goole Play</h6>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="" className="app-btn">
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
                              <span className="count">25</span>
                            </h3>
                            <h4>
                              <span>Categorias</span>de Servicios
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-ms-12">
                        <div className="counter-item counter-item-one wow fadeInUp">
                          <div className="info">
                            <h3>
                              <span className="count">12345</span>
                            </h3>
                            <h4>
                              <span>Usuarios</span>Activos
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-ms-12">
                        <div className="counter-item counter-item-one wow fadeInUp">
                          <div className="info">
                            <h3>
                              <span className="count">97.4</span>%
                            </h3>
                            <h4>
                              <span>Usuarios</span>Satisfechos
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
      {/*====== End Download Section ======*/}
      {/*====== Start Popular Listing Section ======*/}
      <section className="listing-grid-area pt-75 pb-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-60 wow fadeInUp">
                <span className="sub-title">
                  Aprovecha Soluciones que estan cerca tuyo
                </span>
                <h2>Destacados en Tu Zona</h2>
              </div>
            </div>
          </div>
          <div className="listing-slider-one wow fadeInDown">
            <div className="listing-item listing-grid-item-two">
              <div className="listing-thumbnail">
                <img
                  src="assets/images/en-tu-zona-cortar-pasto.jpg"
                  alt="Cortar el Pasto"
                />
                <a href="#" className="cat-btn">
                  <i className="flaticon-chef" />
                </a>
                <span className="featured-btn">VISITA SIN CARGO</span>
                <ul className="ratings ratings-five fondo-opiniones">
                  <li className="star">
                    <i className="flaticon-star-1" />
                  </li>
                  <li className="star">
                    <i className="flaticon-star-1" />
                  </li>
                  <li className="star">
                    <i className="flaticon-star-1" />
                  </li>
                  <li className="star">
                    <i className="flaticon-star-1" />
                  </li>
                  <li className="star">
                    <i className="flaticon-star-1" />
                  </li>
                  <li>
                    <span>
                      <a href="#">(12 Opiniones)</a>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="listing-content">
                <h3 className="title">
                  <a href="listing-details-1.html">Cortado de Pasto</a>
                </h3>
                <p>Incluye Limpieza de Malezas</p>
                <span className="phone-meta">
                  <i className="ti-tablet" />
                  <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                  <span className="status st-open">ATIENDE HOY</span>
                </span>
                <div className="listing-meta">
                  <ul>
                    <li>
                      <span>
                        <i className="ti-location-pin" />
                        Barrio XYZ, Bogotá
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
            <div className="listing-item listing-grid-item-two">
              <div className="listing-thumbnail">
                <img
                  src="assets/images/en-tu-zona-limpieza-casas.jpg"
                  alt="Limpieza de Casas"
                />
                <a href="#" className="cat-btn">
                  <i className="flaticon-chef" />
                </a>
                <span className="featured-btn">$80 x hora</span>
                <ul className="ratings ratings-four fondo-opiniones">
                  <li className="star">
                    <i className="flaticon-star-1" />
                  </li>
                  <li className="star">
                    <i className="flaticon-star-1" />
                  </li>
                  <li className="star">
                    <i className="flaticon-star-1" />
                  </li>
                  <li className="star">
                    <i className="flaticon-star-1" />
                  </li>
                  <li className="star">
                    <i className="flaticon-star-1" />
                  </li>
                  <li>
                    <span>
                      <a href="#">(32 Opiniones)</a>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="listing-content">
                <h3 className="title">
                  <a href="listing-details-1.html">Limpieza del Hogar</a>
                </h3>
                <p>Ofrece Servicio de Planchado</p>
                <span className="phone-meta">
                  <i className="ti-tablet" />
                  <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                  <span className="status st-open">LIBRE DESDE EL 30/7</span>
                </span>
                <div className="listing-meta">
                  <ul>
                    <li>
                      <span>
                        <i className="ti-location-pin" />
                        Barrio XYZ, Bogotá
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
            <div className="listing-item listing-grid-item-two">
              <div className="listing-thumbnail">
                <img
                  src="assets/images/en-tu-zona-baby-sitter.jpg"
                  alt="Baby Sitting"
                />
                <a href="#" className="cat-btn">
                  <i className="flaticon-chef" />
                </a>
                <span className="featured-btn">$50 x hora</span>
                <ul className="ratings ratings-four fondo-opiniones">
                  <li className="star">
                    <i className="flaticon-star-1" />
                  </li>
                  <li className="star">
                    <i className="flaticon-star-1" />
                  </li>
                  <li className="star">
                    <i className="flaticon-star-1" />
                  </li>
                  <li className="star">
                    <i className="flaticon-star-1" />
                  </li>
                  <li className="star">
                    <i className="flaticon-star-1" />
                  </li>
                  <li>
                    <span>
                      <a href="#">(2 Opiniones)</a>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="listing-content">
                <h3 className="title">
                  <a href="listing-details-1.html">Cuidado de Niños</a>
                </h3>
                <p>Baby sitting</p>
                <span className="phone-meta">
                  <i className="ti-tablet" />
                  <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                  <span className="status st-open">LIBRE HOY</span>
                </span>
                <div className="listing-meta">
                  <ul>
                    <li>
                      <span>
                        <i className="ti-location-pin" />
                        Barrio XYZ, Bogotá
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
            <div className="listing-item listing-grid-item-two">
              <div className="listing-thumbnail">
                <img
                  src="assets/images/en-tu-zona-cambio-aceite.jpg"
                  alt="Cambio de Aceite Automotor"
                />
                <a href="#" className="cat-btn">
                  <i className="flaticon-chef" />
                </a>
                <span className="featured-btn">desde $250</span>
                <ul className="ratings ratings-five fondo-opiniones">
                  <li className="star">
                    <i className="flaticon-star-1" />
                  </li>
                  <li className="star">
                    <i className="flaticon-star-1" />
                  </li>
                  <li className="star">
                    <i className="flaticon-star-1" />
                  </li>
                  <li className="star">
                    <i className="flaticon-star-1" />
                  </li>
                  <li className="star">
                    <i className="flaticon-star-1" />
                  </li>
                  <li>
                    <span>
                      <a href="#">(12 Opiniones)</a>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="listing-content">
                <h3 className="title">
                  <a href="listing-details-1.html">Cambio de Aceite Automotor</a>
                </h3>
                <p>Baby sitting</p>
                <span className="phone-meta">
                  <i className="ti-tablet" />
                  <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                  <span className="status st-open">LIBRE HOY</span>
                </span>
                <div className="listing-meta">
                  <ul>
                    <li>
                      <span>
                        <i className="ti-location-pin" />
                        Barrio XYZ, Bogotá
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
        </div>
      </section>
      {/*====== End Popular Listing Section ======*/}
      {/*====== Start Intro Video Section ======*/}
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
                    re-acondicionar el cuarto de los niños, todo esta aquí. Hasta el
                    aquitecto para esos planos!
                  </p>
                  <a href="" className="main-btn icon-btn">
                    Explora las Categorías
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Intro Video Section ======*/}
      {/*====== Start Newsletter Section ======*/}
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
                      required=""
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
      {/*====== End Newsletter Section ======*/}
      {/*====== Start Client Section ======*/}
      <section className="client-area pt-120">
        <div className="client-wrapper-one pb-120">
          <div className="container">
            <div className="client-slider-one wow fadeInDown">
              <div className="client-item">
                <div className="client-img">
                  <a href="#">
                    <img
                      src="assets/images/marcas/homecenter.jpg"
                      alt="HOMECENTER"
                    />
                  </a>
                </div>
              </div>
              <div className="client-item">
                <div className="client-img">
                  <a href="#">
                    <img
                      src="assets/images/marcas/pinturas-pintuco.jpg"
                      alt="PINTURAS PINTUCO"
                    />
                  </a>
                </div>
              </div>
              <div className="client-item">
                <div className="client-img">
                  <a href="#">
                    <img src="assets/images/marcas/pavco.jpg" alt="CAÑOS PLAVCO" />
                  </a>
                </div>
              </div>
              <div className="client-item">
                <div className="client-img">
                  <a href="#">
                    <img
                      src="assets/images/marcas/pinturas-bler.jpg"
                      alt="PINTURAS BLER"
                    />
                  </a>
                </div>
              </div>
              <div className="client-item">
                <div className="client-img">
                  <a href="#">
                    <img
                      src="assets/images/marcas/corona.jpg"
                      alt="SANITARIOS CORONA"
                    />
                  </a>
                </div>
              </div>
              <div className="client-item">
                <div className="client-img">
                  <a href="#">
                    <img
                      src="assets/images/marcas/hcm.jpg"
                      alt="IMPERMEABILIZANTES HCM"
                    />
                  </a>
                </div>
              </div>
              <div className="client-item">
                <div className="client-img">
                  <a href="#">
                    <img
                      src="assets/images/marcas/colgres.jpg"
                      alt="LADRILLOS COLGRES"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Client Section ======*/}
      {/*====== Start Blog Section ======*/}
      <section className="blog-area pt-115 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-60 wow fadeInUp">
                <span className="sub-title">Nuestros Articulos más Recientes</span>
                <h2>Novedades, Consejos, Trucos y más...</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="blog-post-item blog-post-item-one mb-40 wow fadeInUp"
                data-wow-delay="10ms"
              >
                <div className="post-thumbnail">
                  <a href="">
                    <img
                      src="assets/images/blog/articulo-pinturas-para-techos.jpg"
                      alt="Como elegir una pintura impermeabilizante"
                    />
                  </a>
                  <div className="post-date">
                    <a href="#" className="logo-verde-oscuro">
                      <span>Oct</span>20
                    </a>
                  </div>
                </div>
                <div className="entry-content">
                  <a href="#" className="cat-btn">
                    <i className="ti-bookmark-alt" /> Reparaciones del Hogar
                  </a>
                  <h3 className="title verdes-logo">
                    <a href="">Como elegir una pintura impermeabilizante</a>
                  </h3>
                  <div className="post-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="ti-comments-smiley" />
                          <a href="#">5 Comentarios</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="blog-post-item blog-post-item-one mb-40 wow fadeInUp"
                data-wow-delay="20ms"
              >
                <div className="post-thumbnail">
                  <a href="">
                    <img
                      src="assets/images/blog/articulo-calefaccion-electrica-vs-gas.jpg"
                      alt="Calefacción Eléctrica Vs Calefacción a Gas"
                    />
                  </a>
                  <div className="post-date">
                    <a href="#" className="logo-verde-oscuro">
                      20 <span>Oct</span>
                    </a>
                  </div>
                </div>
                <div className="entry-content">
                  <a href="#" className="cat-btn">
                    <i className="ti-bookmark-alt" /> Recomendaciones
                  </a>
                  <h3 className="title verdes-logo">
                    <a href="">Calefacción Eléctrica Vs Calefacción a Gas</a>
                  </h3>
                  <div className="post-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="ti-comments-smiley" />
                          <a href="#">5 Comentarios</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="blog-post-item blog-post-item-one mb-40 wow fadeInUp"
                data-wow-delay="310ms"
              >
                <div className="post-thumbnail">
                  <a href="">
                    <img
                      src="assets/images/blog/articulo-asesoria-legal.jpg"
                      alt="Asesoramiento Legal"
                    />
                  </a>
                  <div className="post-date">
                    <a href="#" className="logo-verde-oscuro">
                      20 <span>Oct</span>
                    </a>
                  </div>
                </div>
                <div className="entry-content">
                  <a href="#" className="cat-btn">
                    <i className="ti-bookmark-alt" /> Asesoramiento Legal
                  </a>
                  <h3 className="title verdes-logo">
                    <a href="">Me ha llegado una carta documento, que hago?</a>
                  </h3>
                  <div className="post-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="ti-comments-smiley" />
                          <a href="#">5 Comentarios</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="button text-center mt-40">
                <a href="blog.html" className="main-btn icon-btn redondeado">
                  VER MAS ARTICULOS
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Blog Section ======*/}
          </>
    )
  }

  return (
  // <>
  // {/* ====== Start Preloader ======*/}  
  //   {/* <PreLoader/> */}
  // {/*====== End Preloader ======*/}
  // <BrowserRouter>
  // {/*====== Start Header Section ======*/}
  // <Header/>
  // {/*====== End Header Section ======*/}
  // {/*====== Start Form Admin Section ======*/}
  // <Switch>
  // <Route exact path="/admin">
  //   <UsuarioForm />
  // </Route>
  // <Route path="/">
  //   <Body/>
  // </Route>
  // </Switch>
  // {/* End Body */}
  // </BrowserRouter>
  // {/*====== Start Footer ======*/}
  // <Footer/>
  // {/*====== End Footer ======*/}
  // {/*====== back-to-top ======*/}
  // <a href="#" className="back-to-top">
  //   <i className="ti-angle-up" />
  // </a>
  // </>
  <UsuarioForm/>

  );
}

export default Home;