import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderNavigation from "./HeaderNavigation";

const Header = () => {
  // State for menu toggling
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle Menu Toggle
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle Breakpoint Check for mobile view
  const handleResize = () => {
    const isMobileView = window.innerWidth <= 1199;
    setIsMobile(isMobileView);
  };

  // Handle Scroll for Sticky Header
  const handleScroll = () => {
    const sticky = window.scrollY >= 190;
    setIsSticky(sticky);
  };

  // Add event listeners for scroll and resize
  useEffect(() => {
    handleResize(); // Initial check for mobile view
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const Prelaunch = () => {
    return (
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
                    <Link to='/admin'>
                      <i className="ti-search" />
                      <span>Agregar un Proveedor</span>
                    </Link>
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
    );
  }

  return (
    <header className={`header-area header-area-one fondo-blanco ${isSticky ? 'sticky' : ''} ${isMobile ? 'breakpoint-on' : ''}`}>
      

      {/* Navigation Bar */}
      <nav className={`header-navigation ${menuOpen ? 'menu-on' : ''}`}>
        <div className="navbar-toggler" onClick={toggleMenu}>
          <span className={`navbar-toggler-icon ${menuOpen ? 'active' : ''}`}></span>
        </div>
        <HeaderNavigation />
        <div className="navbar-close" onClick={() => setMenuOpen(false)}>
          <i className="ti-close"></i>
        </div>
      </nav>

      {/* Back to Top Button */}
      <div className="back-to-top" style={{ display: window.scrollY > 600 ? 'block' : 'none' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <i className="ti-arrow-up"></i>
      </div>
    </header>
  );
};

export default Header;
