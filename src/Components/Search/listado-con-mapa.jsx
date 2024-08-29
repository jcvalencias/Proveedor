import React from "react";
import PreLoader from "../Structure/Preloader";
import Header from "../Structure/Header";

const ListadoMapa = () => {

    const ResultServicio = ({name, category, price, opiniones, contact_number, location, availability, image}) => {
        console.log(opiniones);

        return (
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="listing-item listing-grid-item-two mb-30">
                    <div className="listing-thumbnail">
                        <img src={image} alt={category}/>
                        <a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
                        <span className="featured-btn">{price}</span>
                        <ul className="ratings ratings-four fondo-opiniones">
                            <li className="star"><i className="flaticon-star-1"></i></li>
                            <li className="star"><i className="flaticon-star-1"></i></li>
                            <li className="star"><i className="flaticon-star-1"></i></li>
                            <li className="star"><i className="flaticon-star-1"></i></li>
                            <li className="star"><i className="flaticon-star-1"></i></li>
                            <li><span><a href="#">({opiniones} Opiniones)</a></span></li>
                        </ul>
                    </div>
                    <div className="listing-content">
                        <h3 className="title verdes-logo"><a href="listing-details-1.html">{name}</a></h3>
                        <p>{category}</p>
                        <span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">{contact_number}</a><span className="status st-open">{availability}</span></span>
                        <div className="listing-meta">
                            <ul>
                                <li><span><i className="ti-location-pin"></i>{location}</span></li>
                                <li><span><i className="ti-heart"></i><a href="#">Guardar</a></span></li>
                            </ul>
                        </div>
                    </div>
				</div>
			</div>
        );
    }
    return (
        <>
        <body>
        {/* <!--====== Start Preloader ======--> */}
        <PreLoader />
        {/* <!--====== End Preloader ======--> */}
        {/* <!--====== Start Header Section ======--> */}
        <Header />
        {/* <!--====== End Header Section ======--> */}
        {/* <!--====== Start Hero Section ======--> */}
        <section className="hero-area">
            <div className="breadcrumbs-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="page-title">
                                <h1 className="title">Soluciones en<br/>Categoría XYZ</h1>
                                <ul className="breadcrumbs-link">
                                    <li><a href="index.html">Inicio</a></li>
                                    <li className="active">Listado de Categoria XYZ</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--====== End Hero Section ======--> */}
        {/* <!--====== Start Map Section ======--> */}
        <section className="map-area">
            <div className="map-box"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15452.641656719692!2d-74.10309464502281!3d4.707438660741199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2sBogot%C3%A1%2C%20Colombia!5e0!3m2!1ses-419!2sar!4v1721933203873!5m2!1ses-419!2sar" width="100%" height="450" style={{"border":"0;"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
        {/* <!--====== End Map Section ======--> */}
        {/* <!--====== Start listing Section ======--> */}
        <section className="listing-grid-area pb-120 fondo-logo-celeste">
            <form>
                <div className="container">
                    <div className="col-lg-12">
                        <div className="listing-search-form mb-60 wow fadeInUp" style={{'background-image': 'url(assets/images/bg/newsletter-bg-1.jpg);'}}>
                            <div className="row">
                                
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="form_group">
                                        <select className="wide">
                                            <option data-dsplay="Category">Categoría de Servicios</option>
                                            <option value="01">Museums</option>
                                            <option value="02">Restaurant</option>
                                            <option value="03">Party Center</option>
                                            <option value="04">Fitness Zone</option>
                                            <option value="05">Game Field</option>
                                            <option value="06">Job & Feeds</option>
                                            <option value="07">Shooping</option>
                                            <option value="08">Art Gallery</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="form_group">
                                        <select className="wide">
                                            <option data-dsplay="Location">en que Zona?</option>
                                            <option value="01">Dhaka</option>
                                            <option value="02">Delhi</option>
                                            <option value="03">lahore</option>
                                            <option value="04">Rome</option>
                                            <option value="05">New york</option>
                                            <option value="06">Pris</option>
                                            <option value="07">Bern</option>
                                            <option value="08">Bangkok</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="form_group">
                                        <select className="wide">
                                            <option data-dsplay="Default price">Rango de Precios</option>
                                            <option value="01">$10-$30</option>
                                            <option value="02">$30-$70</option>
                                            <option value="03">$70-$100</option>
                                            <option value="04">$100-$130</option>
                                            <option value="05">$130-$150</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="form_group">
                                        <button className="main-btn icon-btn">BUSCAR</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="listing-tab-filter mb-50">
                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="tab" href="#all">All</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#cat1">Food</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#cat2">Career</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#cat3">Shopping</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#cat4">Parking</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#cat5">Business</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#cat6">Museums</a>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="all">
                                    <div className="row">
                                        <ResultServicio name='Cuidado de Niños' category='Baby sitting' price='$50 x HORA' opiniones='2' contact_number='+98 (265) 3652 - 05' location='Barrio XYZ, Bogotá' availability='LIBRE HOY' image='assets/images/en-tu-zona-baby-sitter.jpg'/>
                                        <ResultServicio name='Prueba Cuidado de Niños' category='Prueba Baby sitting' price='Prueba $50 x HORA' opiniones='Prueba 2' contact_number='Prueba +98 (265) 3652 - 05' location='Prueba Barrio XYZ, Bogotá' availability='Prueba LIBRE HOY' image='assets/images/en-tu-zona-baby-sitter.jpg'/>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
												<div className="listing-thumbnail">
													<img src="assets/images/en-tu-zona-baby-sitter.jpg" alt="Baby Sitting"/>
													<a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
													<span className="featured-btn">$50 x hora</span>
													<ul className="ratings ratings-four fondo-opiniones">
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li><span><a href="#">(2 Opiniones)</a></span></li>
													</ul>
												</div>
												<div className="listing-content">
													<h3 className="title verdes-logo"><a href="listing-details-1.html">Cuidado de Niños</a></h3>
													<p>Baby sitting</p>
													<span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">LIBRE HOY</span></span>
													<div className="listing-meta">
														<ul>
															<li><span><i className="ti-location-pin"></i>Barrio XYZ, Bogotá</span></li>
															<li><span><i className="ti-heart"></i><a href="#">Guardar</a></span></li>
														</ul>
													</div>
												</div>
											</div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
												<div className="listing-thumbnail">
													<img src="assets/images/en-tu-zona-baby-sitter.jpg" alt="Baby Sitting"/>
													<a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
													<span className="featured-btn">$50 x hora</span>
													<ul className="ratings ratings-four fondo-opiniones">
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li><span><a href="#">(2 Opiniones)</a></span></li>
													</ul>
												</div>
												<div className="listing-content">
													<h3 className="title verdes-logo"><a href="listing-details-1.html">Cuidado de Niños</a></h3>
													<p>Baby sitting</p>
													<span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">LIBRE HOY</span></span>
													<div className="listing-meta">
														<ul>
															<li><span><i className="ti-location-pin"></i>Barrio XYZ, Bogotá</span></li>
															<li><span><i className="ti-heart"></i><a href="#">Guardar</a></span></li>
														</ul>
													</div>
												</div>
											</div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
												<div className="listing-thumbnail">
													<img src="assets/images/en-tu-zona-baby-sitter.jpg" alt="Baby Sitting"/>
													<a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
													<span className="featured-btn">$50 x hora</span>
													<ul className="ratings ratings-four fondo-opiniones">
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li><span><a href="#">(2 Opiniones)</a></span></li>
													</ul>
												</div>
												<div className="listing-content">
													<h3 className="title verdes-logo"><a href="listing-details-1.html">Cuidado de Niños</a></h3>
													<p>Baby sitting</p>
													<span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">LIBRE HOY</span></span>
													<div className="listing-meta">
														<ul>
															<li><span><i className="ti-location-pin"></i>Barrio XYZ, Bogotá</span></li>
															<li><span><i className="ti-heart"></i><a href="#">Guardar</a></span></li>
														</ul>
													</div>
												</div>
											</div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
												<div className="listing-thumbnail">
													<img src="assets/images/en-tu-zona-baby-sitter.jpg" alt="Baby Sitting"/>
													<a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
													<span className="featured-btn">$50 x hora</span>
													<ul className="ratings ratings-four fondo-opiniones">
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li><span><a href="#">(2 Opiniones)</a></span></li>
													</ul>
												</div>
												<div className="listing-content">
													<h3 className="title verdes-logo"><a href="listing-details-1.html">Cuidado de Niños</a></h3>
													<p>Baby sitting</p>
													<span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">LIBRE HOY</span></span>
													<div className="listing-meta">
														<ul>
															<li><span><i className="ti-location-pin"></i>Barrio XYZ, Bogotá</span></li>
															<li><span><i className="ti-heart"></i><a href="#">Guardar</a></span></li>
														</ul>
													</div>
												</div>
											</div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
												<div className="listing-thumbnail">
													<img src="assets/images/en-tu-zona-baby-sitter.jpg" alt="Baby Sitting"/>
													<a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
													<span className="featured-btn">$50 x hora</span>
													<ul className="ratings ratings-four fondo-opiniones">
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li><span><a href="#">(2 Opiniones)</a></span></li>
													</ul>
												</div>
												<div className="listing-content">
													<h3 className="title verdes-logo"><a href="listing-details-1.html">Cuidado de Niños</a></h3>
													<p>Baby sitting</p>
													<span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">LIBRE HOY</span></span>
													<div className="listing-meta">
														<ul>
															<li><span><i className="ti-location-pin"></i>Barrio XYZ, Bogotá</span></li>
															<li><span><i className="ti-heart"></i><a href="#">Guardar</a></span></li>
														</ul>
													</div>
												</div>
											</div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
												<div className="listing-thumbnail">
													<img src="assets/images/en-tu-zona-baby-sitter.jpg" alt="Baby Sitting"/>
													<a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
													<span className="featured-btn">$50 x hora</span>
													<ul className="ratings ratings-four fondo-opiniones">
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li><span><a href="#">(2 Opiniones)</a></span></li>
													</ul>
												</div>
												<div className="listing-content">
													<h3 className="title verdes-logo"><a href="listing-details-1.html">Cuidado de Niños</a></h3>
													<p>Baby sitting</p>
													<span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">LIBRE HOY</span></span>
													<div className="listing-meta">
														<ul>
															<li><span><i className="ti-location-pin"></i>Barrio XYZ, Bogotá</span></li>
															<li><span><i className="ti-heart"></i><a href="#">Guardar</a></span></li>
														</ul>
													</div>
												</div>
											</div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
												<div className="listing-thumbnail">
													<img src="assets/images/en-tu-zona-baby-sitter.jpg" alt="Baby Sitting"/>
													<a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
													<span className="featured-btn">$50 x hora</span>
													<ul className="ratings ratings-four fondo-opiniones">
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li><span><a href="#">(2 Opiniones)</a></span></li>
													</ul>
												</div>
												<div className="listing-content">
													<h3 className="title verdes-logo"><a href="listing-details-1.html">Cuidado de Niños</a></h3>
													<p>Baby sitting</p>
													<span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">LIBRE HOY</span></span>
													<div className="listing-meta">
														<ul>
															<li><span><i className="ti-location-pin"></i>Barrio XYZ, Bogotá</span></li>
															<li><span><i className="ti-heart"></i><a href="#">Guardar</a></span></li>
														</ul>
													</div>
												</div>
											</div>
                                        </div>
										
                                    </div>
                                </div>
                                <div className="tab-pane fade show active" id="cat1">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
												<div className="listing-thumbnail">
													<img src="assets/images/en-tu-zona-cortar-pasto.jpg" alt="Cortar el Pasto"/>
													<a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
													<span className="featured-btn">VISITA SIN CARGO</span>
													<ul className="ratings ratings-five fondo-opiniones">
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li><span><a href="#">(12 Opiniones)</a></span></li>
													</ul>
												</div>
												<div className="listing-content">
													<h3 className="title verdes-logo"><a href="listing-details-1.html">Cortado de Pasto</a></h3>
													<p>Incluye Limpieza de Malezas</p>
													<span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">ATIENDE HOY</span></span>
													<div className="listing-meta">
														<ul>
															<li><span><i className="ti-location-pin"></i>Barrio XYZ, Bogotá</span></li>
															<li><span><i className="ti-heart"></i><a href="#">Guardar</a></span></li>
														</ul>
													</div>
												</div>
											</div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
												<div className="listing-thumbnail">
													<img src="assets/images/en-tu-zona-cortar-pasto.jpg" alt="Cortar el Pasto"/>
													<a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
													<span className="featured-btn">VISITA SIN CARGO</span>
													<ul className="ratings ratings-five fondo-opiniones">
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li><span><a href="#">(12 Opiniones)</a></span></li>
													</ul>
												</div>
												<div className="listing-content">
													<h3 className="title verdes-logo"><a href="listing-details-1.html">Cortado de Pasto</a></h3>
													<p>Incluye Limpieza de Malezas</p>
													<span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">ATIENDE HOY</span></span>
													<div className="listing-meta">
														<ul>
															<li><span><i className="ti-location-pin"></i>Barrio XYZ, Bogotá</span></li>
															<li><span><i className="ti-heart"></i><a href="#">Guardar</a></span></li>
														</ul>
													</div>
												</div>
											</div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
												<div className="listing-thumbnail">
													<img src="assets/images/en-tu-zona-cortar-pasto.jpg" alt="Cortar el Pasto"/>
													<a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
													<span className="featured-btn">VISITA SIN CARGO</span>
													<ul className="ratings ratings-five fondo-opiniones">
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li><span><a href="#">(12 Opiniones)</a></span></li>
													</ul>
												</div>
												<div className="listing-content">
													<h3 className="title verdes-logo"><a href="listing-details-1.html">Cortado de Pasto</a></h3>
													<p>Incluye Limpieza de Malezas</p>
													<span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">ATIENDE HOY</span></span>
													<div className="listing-meta">
														<ul>
															<li><span><i className="ti-location-pin"></i>Barrio XYZ, Bogotá</span></li>
															<li><span><i className="ti-heart"></i><a href="#">Guardar</a></span></li>
														</ul>
													</div>
												</div>
											</div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
												<div className="listing-thumbnail">
													<img src="assets/images/en-tu-zona-cortar-pasto.jpg" alt="Cortar el Pasto"/>
													<a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
													<span className="featured-btn">VISITA SIN CARGO</span>
													<ul className="ratings ratings-five fondo-opiniones">
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li><span><a href="#">(12 Opiniones)</a></span></li>
													</ul>
												</div>
												<div className="listing-content">
													<h3 className="title verdes-logo"><a href="listing-details-1.html">Cortado de Pasto</a></h3>
													<p>Incluye Limpieza de Malezas</p>
													<span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">ATIENDE HOY</span></span>
													<div className="listing-meta">
														<ul>
															<li><span><i className="ti-location-pin"></i>Barrio XYZ, Bogotá</span></li>
															<li><span><i className="ti-heart"></i><a href="#">Guardar</a></span></li>
														</ul>
													</div>
												</div>
											</div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
												<div className="listing-thumbnail">
													<img src="assets/images/en-tu-zona-cortar-pasto.jpg" alt="Cortar el Pasto"/>
													<a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
													<span className="featured-btn">VISITA SIN CARGO</span>
													<ul className="ratings ratings-five fondo-opiniones">
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li><span><a href="#">(12 Opiniones)</a></span></li>
													</ul>
												</div>
												<div className="listing-content">
													<h3 className="title verdes-logo"><a href="listing-details-1.html">Cortado de Pasto</a></h3>
													<p>Incluye Limpieza de Malezas</p>
													<span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">ATIENDE HOY</span></span>
													<div className="listing-meta">
														<ul>
															<li><span><i className="ti-location-pin"></i>Barrio XYZ, Bogotá</span></li>
															<li><span><i className="ti-heart"></i><a href="#">Guardar</a></span></li>
														</ul>
													</div>
												</div>
											</div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
												<div className="listing-thumbnail">
													<img src="assets/images/en-tu-zona-cortar-pasto.jpg" alt="Cortar el Pasto"/>
													<a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
													<span className="featured-btn">VISITA SIN CARGO</span>
													<ul className="ratings ratings-five fondo-opiniones">
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li><span><a href="#">(12 Opiniones)</a></span></li>
													</ul>
												</div>
												<div className="listing-content">
													<h3 className="title verdes-logo"><a href="listing-details-1.html">Cortado de Pasto</a></h3>
													<p>Incluye Limpieza de Malezas</p>
													<span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">ATIENDE HOY</span></span>
													<div className="listing-meta">
														<ul>
															<li><span><i className="ti-location-pin"></i>Barrio XYZ, Bogotá</span></li>
															<li><span><i className="ti-heart"></i><a href="#">Guardar</a></span></li>
														</ul>
													</div>
												</div>
											</div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
												<div className="listing-thumbnail">
													<img src="assets/images/en-tu-zona-cortar-pasto.jpg" alt="Cortar el Pasto"/>
													<a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
													<span className="featured-btn">VISITA SIN CARGO</span>
													<ul className="ratings ratings-five fondo-opiniones">
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li><span><a href="#">(12 Opiniones)</a></span></li>
													</ul>
												</div>
												<div className="listing-content">
													<h3 className="title verdes-logo"><a href="listing-details-1.html">Cortado de Pasto</a></h3>
													<p>Incluye Limpieza de Malezas</p>
													<span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">ATIENDE HOY</span></span>
													<div className="listing-meta">
														<ul>
															<li><span><i className="ti-location-pin"></i>Barrio XYZ, Bogotá</span></li>
															<li><span><i className="ti-heart"></i><a href="#">Guardar</a></span></li>
														</ul>
													</div>
												</div>
											</div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
												<div className="listing-thumbnail">
													<img src="assets/images/en-tu-zona-cortar-pasto.jpg" alt="Cortar el Pasto"/>
													<a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
													<span className="featured-btn">VISITA SIN CARGO</span>
													<ul className="ratings ratings-five fondo-opiniones">
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li><span><a href="#">(12 Opiniones)</a></span></li>
													</ul>
												</div>
												<div className="listing-content">
													<h3 className="title verdes-logo"><a href="listing-details-1.html">Cortado de Pasto</a></h3>
													<p>Incluye Limpieza de Malezas</p>
													<span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">ATIENDE HOY</span></span>
													<div className="listing-meta">
														<ul>
															<li><span><i className="ti-location-pin"></i>Barrio XYZ, Bogotá</span></li>
															<li><span><i className="ti-heart"></i><a href="#">Guardar</a></span></li>
														</ul>
													</div>
												</div>
											</div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
												<div className="listing-thumbnail">
													<img src="assets/images/en-tu-zona-cortar-pasto.jpg" alt="Cortar el Pasto"/>
													<a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
													<span className="featured-btn">VISITA SIN CARGO</span>
													<ul className="ratings ratings-five fondo-opiniones">
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li><span><a href="#">(12 Opiniones)</a></span></li>
													</ul>
												</div>
												<div className="listing-content">
													<h3 className="title verdes-logo"><a href="listing-details-1.html">Cortado de Pasto</a></h3>
													<p>Incluye Limpieza de Malezas</p>
													<span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">ATIENDE HOY</span></span>
													<div className="listing-meta">
														<ul>
															<li><span><i className="ti-location-pin"></i>Barrio XYZ, Bogotá</span></li>
															<li><span><i className="ti-heart"></i><a href="#">Guardar</a></span></li>
														</ul>
													</div>
												</div>
											</div>
                                        </div>
										
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="cat2">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
												<div className="listing-thumbnail">
													<img src="assets/images/en-tu-zona-limpieza-casas.jpg" alt="Limpieza de Casas"/>
													<a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
													<span className="featured-btn">$80 x hora</span>
													<ul className="ratings ratings-four fondo-opiniones">
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li><span><a href="#">(32 Opiniones)</a></span></li>
													</ul>
												</div>
												<div className="listing-content">
													<h3 className="title verdes-logo"><a href="listing-details-1.html">Limpieza del Hogar</a></h3>
													<p>Ofrece Servicio de Planchado</p>
													<span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">LIBRE DESDE EL 30/7</span></span>
													<div className="listing-meta">
														<ul>
															<li><span><i className="ti-location-pin"></i>Barrio XYZ, Bogotá</span></li>
															<li><span><i className="ti-heart"></i><a href="#">Guardar</a></span></li>
														</ul>
													</div>
												</div>
											</div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
												<div className="listing-thumbnail">
													<img src="assets/images/en-tu-zona-limpieza-casas.jpg" alt="Limpieza de Casas"/>
													<a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
													<span className="featured-btn">$80 x hora</span>
													<ul className="ratings ratings-four fondo-opiniones">
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li className="star"><i className="flaticon-star-1"></i></li>
														<li><span><a href="#">(32 Opiniones)</a></span></li>
													</ul>
												</div>
												<div className="listing-content">
													<h3 className="title verdes-logo"><a href="listing-details-1.html">Limpieza del Hogar</a></h3>
													<p>Ofrece Servicio de Planchado</p>
													<span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">LIBRE DESDE EL 30/7</span></span>
													<div className="listing-meta">
														<ul>
															<li><span><i className="ti-location-pin"></i>Barrio XYZ, Bogotá</span></li>
															<li><span><i className="ti-heart"></i><a href="#">Guardar</a></span></li>
														</ul>
													</div>
												</div>
											</div>
                                        </div>
										
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="cat3">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
                                                <div className="listing-thumbnail">
                                                    <img src="assets/images/listing/listing-grid-24.jpg" alt="Listing Image"/>
                                                    <a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
                                                    <ul className="ratings ratings-four">
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li><span><a href="#">(02 Reviews)</a></span></li>
                                                    </ul>
                                                </div>
                                                <div className="listing-content">
                                                    <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                                    <p>Popular restaurant in california</p>
                                                    <span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">Open</span></span>
                                                    <div className="listing-meta">
                                                        <ul>
                                                            <li><span><i className="ti-location-pin"></i>California, USA</span></li>
                                                            <li><span><i className="ti-heart"></i><a href="#">Save</a></span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
                                                <div className="listing-thumbnail">
                                                    <img src="assets/images/listing/listing-grid-25.jpg" alt="Listing Image"/>
                                                    <a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
                                                    <ul className="ratings ratings-four">
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li><span><a href="#">(02 Reviews)</a></span></li>
                                                    </ul>
                                                </div>
                                                <div className="listing-content">
                                                    <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                                    <p>Popular restaurant in california</p>
                                                    <span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-close">Close</span></span>
                                                    <div className="listing-meta">
                                                        <ul>
                                                            <li><span><i className="ti-location-pin"></i>California, USA</span></li>
                                                            <li><span><i className="ti-heart"></i><a href="#">Save</a></span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
                                                <div className="listing-thumbnail">
                                                    <img src="assets/images/listing/listing-grid-26.jpg" alt="Listing Image"/>
                                                    <a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
                                                    <span className="featured-btn">Featured</span>
                                                    <ul className="ratings ratings-four">
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li><span><a href="#">(02 Reviews)</a></span></li>
                                                    </ul>
                                                </div>
                                                <div className="listing-content">
                                                    <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                                    <p>Popular restaurant in california</p>
                                                    <span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">Open</span></span>
                                                    <div className="listing-meta">
                                                        <ul>
                                                            <li><span><i className="ti-location-pin"></i>California, USA</span></li>
                                                            <li><span><i className="ti-heart"></i><a href="#">Save</a></span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="cat4">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
                                                <div className="listing-thumbnail">
                                                    <img src="assets/images/listing/listing-grid-27.jpg" alt="Listing Image"/>
                                                    <a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
                                                    <span className="featured-btn">Featured</span>
                                                    <ul className="ratings ratings-four">
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li><span><a href="#">(02 Reviews)</a></span></li>
                                                    </ul>
                                                </div>
                                                <div className="listing-content">
                                                    <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                                    <p>Popular restaurant in california</p>
                                                    <span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">Open</span></span>
                                                    <div className="listing-meta">
                                                        <ul>
                                                            <li><span><i className="ti-location-pin"></i>California, USA</span></li>
                                                            <li><span><i className="ti-heart"></i><a href="#">Save</a></span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
                                                <div className="listing-thumbnail">
                                                    <img src="assets/images/listing/listing-grid-28.jpg" alt="Listing Image"/>
                                                    <a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
                                                    <ul className="ratings ratings-four">
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li><span><a href="#">(02 Reviews)</a></span></li>
                                                    </ul>
                                                </div>
                                                <div className="listing-content">
                                                    <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                                    <p>Popular restaurant in california</p>
                                                    <span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">Open</span></span>
                                                    <div className="listing-meta">
                                                        <ul>
                                                            <li><span><i className="ti-location-pin"></i>California, USA</span></li>
                                                            <li><span><i className="ti-heart"></i><a href="#">Save</a></span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
                                                <div className="listing-thumbnail">
                                                    <img src="assets/images/listing/listing-grid-29.jpg" alt="Listing Image"/>
                                                    <a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
                                                    <ul className="ratings ratings-four">
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li><span><a href="#">(02 Reviews)</a></span></li>
                                                    </ul>
                                                </div>
                                                <div className="listing-content">
                                                    <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                                    <p>Popular restaurant in california</p>
                                                    <span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-close">Close</span></span>
                                                    <div className="listing-meta">
                                                        <ul>
                                                            <li><span><i className="ti-location-pin"></i>California, USA</span></li>
                                                            <li><span><i className="ti-heart"></i><a href="#">Save</a></span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="cat5">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
                                                <div className="listing-thumbnail">
                                                    <img src="assets/images/listing/listing-grid-24.jpg" alt="Listing Image"/>
                                                    <a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
                                                    <ul className="ratings ratings-four">
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li><span><a href="#">(02 Reviews)</a></span></li>
                                                    </ul>
                                                </div>
                                                <div className="listing-content">
                                                    <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                                    <p>Popular restaurant in california</p>
                                                    <span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">Open</span></span>
                                                    <div className="listing-meta">
                                                        <ul>
                                                            <li><span><i className="ti-location-pin"></i>California, USA</span></li>
                                                            <li><span><i className="ti-heart"></i><a href="#">Save</a></span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
                                                <div className="listing-thumbnail">
                                                    <img src="assets/images/listing/listing-grid-25.jpg" alt="Listing Image"/>
                                                    <a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
                                                    <span className="featured-btn">Featured</span>
                                                    <ul className="ratings ratings-four">
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li><span><a href="#">(02 Reviews)</a></span></li>
                                                    </ul>
                                                </div>
                                                <div className="listing-content">
                                                    <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                                    <p>Popular restaurant in california</p>
                                                    <span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-close">Close</span></span>
                                                    <div className="listing-meta">
                                                        <ul>
                                                            <li><span><i className="ti-location-pin"></i>California, USA</span></li>
                                                            <li><span><i className="ti-heart"></i><a href="#">Save</a></span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
                                                <div className="listing-thumbnail">
                                                    <img src="assets/images/listing/listing-grid-26.jpg" alt="Listing Image"/>
                                                    <a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
                                                    <ul className="ratings ratings-four">
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li><span><a href="#">(02 Reviews)</a></span></li>
                                                    </ul>
                                                </div>
                                                <div className="listing-content">
                                                    <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                                    <p>Popular restaurant in california</p>
                                                    <span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">Open</span></span>
                                                    <div className="listing-meta">
                                                        <ul>
                                                            <li><span><i className="ti-location-pin"></i>California, USA</span></li>
                                                            <li><span><i className="ti-heart"></i><a href="#">Save</a></span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="cat6">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
                                                <div className="listing-thumbnail">
                                                    <img src="assets/images/listing/listing-grid-27.jpg" alt="Listing Image"/>
                                                    <a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
                                                    <span className="featured-btn">Featured</span>
                                                    <ul className="ratings ratings-four">
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li><span><a href="#">(02 Reviews)</a></span></li>
                                                    </ul>
                                                </div>
                                                <div className="listing-content">
                                                    <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                                    <p>Popular restaurant in california</p>
                                                    <span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">Open</span></span>
                                                    <div className="listing-meta">
                                                        <ul>
                                                            <li><span><i className="ti-location-pin"></i>California, USA</span></li>
                                                            <li><span><i className="ti-heart"></i><a href="#">Save</a></span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
                                                <div className="listing-thumbnail">
                                                    <img src="assets/images/listing/listing-grid-28.jpg" alt="Listing Image"/>
                                                    <a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
                                                    <ul className="ratings ratings-four">
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li><span><a href="#">(02 Reviews)</a></span></li>
                                                    </ul>
                                                </div>
                                                <div className="listing-content">
                                                    <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                                    <p>Popular restaurant in california</p>
                                                    <span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">Open</span></span>
                                                    <div className="listing-meta">
                                                        <ul>
                                                            <li><span><i className="ti-location-pin"></i>California, USA</span></li>
                                                            <li><span><i className="ti-heart"></i><a href="#">Save</a></span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
                                                <div className="listing-thumbnail">
                                                    <img src="assets/images/listing/listing-grid-29.jpg" alt="Listing Image"/>
                                                    <a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
                                                    <span className="featured-btn">Featured</span>
                                                    <ul className="ratings ratings-four">
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li><span><a href="#">(02 Reviews)</a></span></li>
                                                    </ul>
                                                </div>
                                                <div className="listing-content">
                                                    <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                                    <p>Popular restaurant in california</p>
                                                    <span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-close">Close</span></span>
                                                    <div className="listing-meta">
                                                        <ul>
                                                            <li><span><i className="ti-location-pin"></i>California, USA</span></li>
                                                            <li><span><i className="ti-heart"></i><a href="#">Save</a></span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="button text-center mt-30">
                                <a href="listing-map.html" className="main-btn icon-btn">CARGAR MAS SERVICIOS</a>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
        {/* <!--====== End listing Section ======--> */}
        {/* <!--====== Start Footer ======--> */}
        <footer className="footer-area">
            <div className="footer-wrapper-one fondo-verde-oscuro pt-90">
                <div className="footer-widget pb-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="widget about-widget mb-40 wow fadeInUp" data-wow-delay="10ms">
                                    <h4 className="widget-title">Pruebalo desde tu Movil</h4>
                                    <ul className="button">
                                        <li>
                                            <a href="#" className="app-btn android-btn">
                                                <div className="icon">
                                                    <i className="ti-android"></i>
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
                                                    <i className="ti-apple"></i>
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
                                            <li><a href="#"><i className="ti-facebook"></i></a></li>
                                            <li><a href="#"><i className="ti-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="widget recent-post-widget mb-40 wow fadeInUp" data-wow-delay="20ms">
                                    <h4 className="widget-title">Novedades</h4>
                                    <ul className="post-widget-list">
                                        <li className="post-content-item">
                                            <div className="post-title-date">
                                                <span className="posted-on"><a href="#" className="verdes-logo">22 Agosto - 2024</a></span>
                                                <h6 className="title"><a href="">Nueva Versión del Presupuestador</a></h6>
                                            </div>
                                        </li>
                                        <li className="post-content-item">
                                            <div className="post-title-date">
                                                <span className="posted-on"><a href="#" className="verdes-logo">12 Septiembre - 2024</a></span>
                                                <h6 className="title"><a href="">Adjunta fotos y videos en el Presupuestador</a></h6>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="widget categories-widget mb-40 wow fadeInUp" data-wow-delay="30ms">
                                    <h4 className="widget-title">Destacados</h4>
                                    <ul className="categories-link">
                                        <li><a href="precios-fijados.html">Precios Fijados</a></li>
                                        <li><a href="en-tu-zona.html">En Tu Zona</a></li>
                                        <li><a href="promociones.html">Promociones</a></li>
                                        <li><a href="consejos.html">Consejos</a></li>
										<li><a href="contactenos.html">Contáctenos</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="widget newsletter-widget mb-40 wow fadeInUp" data-wow-delay="40ms">
                                    <h4 className="widget-title">Newsletter</h4>
                                    <p>Recibe Cupones de Descuento, Ofertas y Novedades</p>
                                    <form>
                                        <div className="form_group">
                                            <input type="email" className="form_control" placeholder="Ingresa tu Email" name="email" required/>
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
                                    <p>Desea ver su Servicio en SOLUKAY? <span>PUBLIQUE AQUI</span></p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="copyright-link">
                                    <ul>
                                        <li><a href="#">Terminos & Condiciones</a></li>
                                        <li><a href="#">Ayuda</a></li>
                                        <li><a href="#">Trabajar Con Nosotros</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </body>
        </>
        );
};

export default ListadoMapa;

