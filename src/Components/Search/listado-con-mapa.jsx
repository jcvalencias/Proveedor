import React from "react";
import PreLoader from "../Structure/Preloader";
import Header from "../Structure/Header";
import Footer from "../Structure/Footer";
import Options from "../Structure/Utils/Options";

const ListadoMapa = () => {

    const categories = ['Museums', 'Restaurant', 'Party Center', 'Fitness Zone', 'Game Field', 'Job & Feeds', 'Shooping', 'Art Gallery'];

    const locations=['Dhaka','Delhi','lahore','Rome','New york','Pris','Bern','Bangkok'];

    const prices=['$10-$30','$30-$70','$70-$100','$100-$130','$130-$150'];


    const DropdownList = ({name, list}) => {
        return (<div className="col-lg-3 col-md-6 col-sm-12">
        <div className="form_group">
            <select className="wide">
                <option data-dsplay="Category">{name}</option>
                <Options list={list} />
            </select>
        </div>
    </div>);
    }

    const ResultServicio = ({name, category, price, opiniones, contact_number, location, availability, image, rating}) => {

        const classRating = "ratings ratings-" + rating + " fondo-opiniones"

        return (
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="listing-item listing-grid-item-two mb-30">
                    <div className="listing-thumbnail">
                        <img src={image} alt={category}/>
                        <a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
                        <span className="featured-btn">{price}</span>
                        <ul className={classRating}>
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
                                <DropdownList name='Categoria de Servicios' list={categories} />
                                <DropdownList name='Selecciona tu zona' list={locations} />
                                <DropdownList name='Rango de Precios' list={prices} />
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
                                        <ResultServicio 
                                            name='Cuidado de Niños' 
                                            category='Baby sitting' 
                                            price='$50 x HORA' 
                                            opiniones='2' 
                                            contact_number='+98 (265) 3652 - 05' 
                                            location='Barrio XYZ, Bogotá' 
                                            availability='LIBRE HOY' 
                                            image='assets/images/en-tu-zona-baby-sitter.jpg'
                                            rating='three'
                                            />
                                        <ResultServicio 
                                            name='Cuidado de Niños 2' 
                                            category='Baby sitting 2' 
                                            price='$50 x HORA 2' 
                                            opiniones=' 22' 
                                            contact_number='+98 (265) 3652 - 05 2' 
                                            location='Barrio XYZ, Bogotá 2' 
                                            availability='LIBRE HOY 2' 
                                            image='assets/images/en-tu-zona-baby-sitter.jpg'
                                            rating='four'
                                            />
                                        <ResultServicio 
                                            name='Cuidado de Niños 3' 
                                            category='Baby sitting 3' 
                                            price='$50 x HORA 3' 
                                            opiniones=' 32' 
                                            contact_number='+98 (265) 3652 - 05 3' 
                                            location='Barrio XYZ, Bogotá 3' 
                                            availability='LIBRE HOY 3' 
                                            image='assets/images/en-tu-zona-baby-sitter.jpg'
                                            rating='two'
                                            />
                                        <ResultServicio 
                                            name='Cuidado de Niños 4' 
                                            category='Baby sitting 4' 
                                            price='$50 x HORA 4' 
                                            opiniones=' 42' 
                                            contact_number='+98 (265) 3652 - 05 4' 
                                            location='Barrio XYZ, Bogotá 4' 
                                            availability='LIBRE HOY 4' 
                                            image='assets/images/en-tu-zona-baby-sitter.jpg'
                                            rating='five'
                                            />
                                        <ResultServicio 
                                            name='Cuidado de Niños 5' 
                                            category='Baby sitting 5' 
                                            price='$50 x HORA 5' 
                                            opiniones=' 52' 
                                            contact_number='+98 (265) 3652 - 05 5' 
                                            location='Barrio XYZ, Bogotá 5' 
                                            availability='LIBRE HOY 5' 
                                            image='assets/images/en-tu-zona-baby-sitter.jpg'
                                            rating='four'
                                            />
                                        <ResultServicio 
                                            name='Cuidado de Niños 6' 
                                            category='Baby sitting 6' 
                                            price='$50 x HORA 6' 
                                            opiniones=' 62' 
                                            contact_number='+98 (265) 3652 - 05 6' 
                                            location='Barrio XYZ, Bogotá 6' 
                                            availability='LIBRE HOY 6' 
                                            image='assets/images/en-tu-zona-baby-sitter.jpg'
                                            rating='zero'
                                            />
                                        <ResultServicio 
                                            name='Cuidado de Niños 7' 
                                            category='Baby sitting 7' 
                                            price='$50 x HORA 7' 
                                            opiniones=' 72' 
                                            contact_number='+98 (265) 3652 - 05 7' 
                                            location='Barrio XYZ, Bogotá 7' 
                                            availability='LIBRE HOY 7' 
                                            image='assets/images/en-tu-zona-baby-sitter.jpg'
                                            rating='four'
                                            />
                                        <ResultServicio 
                                            name='Cuidado de Niños 8' 
                                            category='Baby sitting 8' 
                                            price='$50 x HORA 8' 
                                            opiniones=' 28' 
                                            contact_number='+98 (265) 3652 - 05 8' 
                                            location='Barrio XYZ, Bogotá 8' 
                                            availability='LIBRE HOY 8' 
                                            image='assets/images/en-tu-zona-baby-sitter.jpg'
                                            rating='five'
                                            />
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
                                        <ResultServicio 
                                            name='Limpieza del Hogar' 
                                            category='Limpieza de Casas' 
                                            price='$80 x hora' 
                                            opiniones='32' 
                                            contact_number='+98 (265) 3652 - 05 8' 
                                            location='Barrio XYZ, Bogotá 8' 
                                            availability='LIBRE DESDE EL 30/7' 
                                            image="assets/images/en-tu-zona-limpieza-casas.jpg"
                                        />
                                        <ResultServicio 
                                            name='Limpieza del Hogar' 
                                            category='Limpieza de Casas' 
                                            price='$80 x hora' 
                                            opiniones='32' 
                                            contact_number='+98 (265) 3652 - 05 8' 
                                            location='Barrio XYZ, Bogotá 8' 
                                            availability='LIBRE DESDE EL 30/7' 
                                            image="assets/images/en-tu-zona-limpieza-casas.jpg"
                                        />
                                        <ResultServicio 
                                            name='Limpieza del Hogar' 
                                            category='Limpieza de Casas' 
                                            price='$80 x hora' 
                                            opiniones='32' 
                                            contact_number='+98 (265) 3652 - 05 8' 
                                            location='Barrio XYZ, Bogotá 8' 
                                            availability='LIBRE DESDE EL 30/7' 
                                            image="assets/images/en-tu-zona-limpieza-casas.jpg"
                                        />
										
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="cat3">
                                    <div className="row">
                                        <ResultServicio 
                                            name='Limpieza del Hogar' 
                                            category='Limpieza de Casas' 
                                            price='$80 x hora' 
                                            opiniones='32' 
                                            contact_number='+98 (265) 3652 - 05 8' 
                                            location='Barrio XYZ, Bogotá 8' 
                                            availability='LIBRE DESDE EL 30/7' 
                                            image="assets/images/en-tu-zona-limpieza-casas.jpg"
                                        />
                                        <ResultServicio 
                                            name='Limpieza del Hogar' 
                                            category='Limpieza de Casas' 
                                            price='$80 x hora' 
                                            opiniones='32' 
                                            contact_number='+98 (265) 3652 - 05 8' 
                                            location='Barrio XYZ, Bogotá 8' 
                                            availability='LIBRE DESDE EL 30/7' 
                                            image="assets/images/en-tu-zona-limpieza-casas.jpg"
                                        />
                                        <ResultServicio 
                                            name='Limpieza del Hogar' 
                                            category='Limpieza de Casas' 
                                            price='$80 x hora' 
                                            opiniones='32' 
                                            contact_number='+98 (265) 3652 - 05 8' 
                                            location='Barrio XYZ, Bogotá 8' 
                                            availability='LIBRE DESDE EL 30/7' 
                                            image="assets/images/en-tu-zona-limpieza-casas.jpg"
                                        />
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="cat4">
                                    <div className="row">
                                        <ResultServicio 
                                            name='Limpieza del Hogar' 
                                            category='Limpieza de Casas' 
                                            price='$80 x hora' 
                                            opiniones='32' 
                                            contact_number='+98 (265) 3652 - 05 8' 
                                            location='Barrio XYZ, Bogotá 8' 
                                            availability='LIBRE DESDE EL 30/7' 
                                            image="assets/images/en-tu-zona-limpieza-casas.jpg"
                                        />
                                        <ResultServicio 
                                            name='Limpieza del Hogar' 
                                            category='Limpieza de Casas' 
                                            price='$80 x hora' 
                                            opiniones='32' 
                                            contact_number='+98 (265) 3652 - 05 8' 
                                            location='Barrio XYZ, Bogotá 8' 
                                            availability='LIBRE DESDE EL 30/7' 
                                            image="assets/images/en-tu-zona-limpieza-casas.jpg"
                                        />
                                        <ResultServicio 
                                            name='Limpieza del Hogar' 
                                            category='Limpieza de Casas' 
                                            price='$80 x hora' 
                                            opiniones='32' 
                                            contact_number='+98 (265) 3652 - 05 8' 
                                            location='Barrio XYZ, Bogotá 8' 
                                            availability='LIBRE DESDE EL 30/7' 
                                            image="assets/images/en-tu-zona-limpieza-casas.jpg"
                                        />
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="cat5">
                                    <div className="row">
                                        <ResultServicio 
                                            name='Limpieza del Hogar' 
                                            category='Limpieza de Casas' 
                                            price='$80 x hora' 
                                            opiniones='32' 
                                            contact_number='+98 (265) 3652 - 05 8' 
                                            location='Barrio XYZ, Bogotá 8' 
                                            availability='LIBRE DESDE EL 30/7' 
                                            image="assets/images/en-tu-zona-limpieza-casas.jpg"
                                        />
                                        <ResultServicio 
                                            name='Limpieza del Hogar' 
                                            category='Limpieza de Casas' 
                                            price='$80 x hora' 
                                            opiniones='32' 
                                            contact_number='+98 (265) 3652 - 05 8' 
                                            location='Barrio XYZ, Bogotá 8' 
                                            availability='LIBRE DESDE EL 30/7' 
                                            image="assets/images/en-tu-zona-limpieza-casas.jpg"
                                        />
                                        <ResultServicio 
                                            name='Limpieza del Hogar' 
                                            category='Limpieza de Casas' 
                                            price='$80 x hora' 
                                            opiniones='32' 
                                            contact_number='+98 (265) 3652 - 05 8' 
                                            location='Barrio XYZ, Bogotá 8' 
                                            availability='LIBRE DESDE EL 30/7' 
                                            image="assets/images/en-tu-zona-limpieza-casas.jpg"
                                        />
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="cat6">
                                    <div className="row">
                                        <ResultServicio 
                                            name='Limpieza del Hogar' 
                                            category='Limpieza de Casas' 
                                            price='$80 x hora' 
                                            opiniones='32' 
                                            contact_number='+98 (265) 3652 - 05 8' 
                                            location='Barrio XYZ, Bogotá 8' 
                                            availability='LIBRE DESDE EL 30/7' 
                                            image="assets/images/en-tu-zona-limpieza-casas.jpg"
                                        />
                                        <ResultServicio 
                                            name='Limpieza del Hogar' 
                                            category='Limpieza de Casas' 
                                            price='$80 x hora' 
                                            opiniones='32' 
                                            contact_number='+98 (265) 3652 - 05 8' 
                                            location='Barrio XYZ, Bogotá 8' 
                                            availability='LIBRE DESDE EL 30/7' 
                                            image="assets/images/en-tu-zona-limpieza-casas.jpg"
                                        />
                                        <ResultServicio 
                                            name='Limpieza del Hogar' 
                                            category='Limpieza de Casas' 
                                            price='$80 x hora' 
                                            opiniones='32' 
                                            contact_number='+98 (265) 3652 - 05 8' 
                                            location='Barrio XYZ, Bogotá 8' 
                                            availability='LIBRE DESDE EL 30/7' 
                                            image="assets/images/en-tu-zona-limpieza-casas.jpg"
                                        />
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
        <Footer />
        </body>
        </>
        );
};

export default ListadoMapa;

