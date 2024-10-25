import React, { useState, useEffect } from "react";

const HeaderNavigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Handle mobile view check
  const handleResize = () => {
    const isMobileView = window.innerWidth <= 1199;
    setIsMobile(isMobileView);
  };

  // Handle menu toggle
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle dropdown toggle
  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // Add resize event listener
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`header-navigation ${isMobile ? "breakpoint-on" : ""}`}>
      <div className="container-fluid">
        <div className="primary-menu">
          <div className="row">
            <div className="col-lg-2 col-5">
              <div className="site-branding">
                <a href="/" className="brand-logo">
                  <img src="assets/images/logo/logo-1.png" alt="Brand Logo" />
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-2">
              <div className={`nav-menu ${menuOpen ? "menu-on" : ""}`}>
                <div className="navbar-close" onClick={toggleMenu}>
                  <i className="ti-close" />
                </div>
                <nav className="main-menu">
                  <ul>
                    <li className="menu-item has-children">
                      <a href="/" className="active">Home</a>
                      <ul className={`sub-menu ${activeDropdown === 0 ? "active" : ""}`}>
                        <li className="menu-item">
                          <a href="/listadoMapa">Search in Map</a>
                        </li>
                        <li className="menu-item">
                          <a href="index-2.html">Home Two</a>
                        </li>
                        <li className="menu-item">
                          <a href="index-3.html">Home Three</a>
                        </li>
                      </ul>
                      <span className="dd-trigger" onClick={() => handleDropdownToggle(0)}>
                        <i className="ti-arrow-down"></i>
                      </span>
                    </li>
                    <li className="menu-item">
                      <a href="about.html">About us</a>
                    </li>
                    <li className="menu-item has-children">
                      <a href="#">Listings</a>
                      <ul className={`sub-menu ${activeDropdown === 1 ? "active" : ""}`}>
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
                          <a href="listing-details-1.html">Listing Details One</a>
                        </li>
                        <li className="menu-item">
                          <a href="listing-details-2.html">Listing Details Two</a>
                        </li>
                      </ul>
                      <span className="dd-trigger" onClick={() => handleDropdownToggle(1)}>
                        <i className="ti-arrow-down"></i>
                      </span>
                    </li>
                    <li className="menu-item has-children">
                      <a href="#">Pages</a>
                      <ul className={`sub-menu ${activeDropdown === 2 ? "active" : ""}`}>
                        <li className="menu-item">
                          <a href="/Addlisting">Add Listing</a>
                        </li>
                        <li className="menu-item has-children">
                          <a href="#">Products</a>
                          <ul className={`sub-menu ${activeDropdown === 3 ? "active" : ""}`}>
                            <li>
                              <a href="products.html">Our Products</a>
                            </li>
                            <li>
                              <a href="product-details.html">Products Details</a>
                            </li>
                          </ul>
                          <span className="dd-trigger" onClick={() => handleDropdownToggle(3)}>
                            <i className="ti-arrow-down"></i>
                          </span>
                        </li>
                        <li className="menu-item">
                          <a href="how-work.html">How Work</a>
                        </li>
                        <li className="menu-item">
                          <a href="pricing.html">Pricing</a>
                        </li>
                      </ul>
                      <span className="dd-trigger" onClick={() => handleDropdownToggle(2)}>
                        <i className="ti-arrow-down"></i>
                      </span>
                    </li>
                    <li className="menu-item has-children">
                      <a href="#">Article</a>
                      <ul className={`sub-menu ${activeDropdown === 4 ? "active" : ""}`}>
                        <li className="menu-item">
                          <a href="blog.html">Our Blog</a>
                        </li>
                        <li className="menu-item">
                          <a href="blog-details.html">Blog details</a>
                        </li>
                      </ul>
                      <span className="dd-trigger" onClick={() => handleDropdownToggle(4)}>
                        <i className="ti-arrow-down"></i>
                      </span>
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
                    <a href="/SignIn" className="icon">
                      <i className="flaticon-avatar" />
                    </a>
                  </li>
                  <li className="hero-nav-btn">
                    <a href="/Addlisting" className="main-btn icon-btn">
                      Publica tu Servicio
                    </a>
                  </li>
                  <li className="nav-toggle-btn">
                    <div className="navbar-toggler" onClick={toggleMenu}>
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
  );
};

export default HeaderNavigation;
