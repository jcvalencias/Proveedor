import React, { useEffect } from 'react';
import {WOW} from 'wow.js';

// Reusable BlogPost component
const BlogPost = ({ image, alt, date, category, title, comments, link }) => (
  <div className="col-lg-4 col-md-6 col-sm-12">
    <div className="blog-post-item blog-post-item-one mb-40 wow fadeInUp" data-wow-delay="10ms">
      <div className="post-thumbnail">
        <a href={link}>
          <img src={image} alt={alt} />
        </a>
        <div className="post-date">
          <a href="#" className="logo-verde-oscuro">
            <span>{date.month}</span>{date.day}
          </a>
        </div>
      </div>
      <div className="entry-content">
        <a href="#" className="cat-btn">
          <i className="ti-bookmark-alt" /> {category}
        </a>
        <h3 className="title verdes-logo">
          <a href={link}>{title}</a>
        </h3>
        <div className="post-meta">
          <ul>
            <li>
              <span>
                <i className="ti-comments-smiley" />
                <a href="#">{comments} Comentarios</a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const BlogSection = () => {
  // List of blog posts
  const blogPosts = [
    {
      image: 'assets/images/blog/articulo-pinturas-para-techos.jpg',
      alt: 'Como elegir una pintura impermeabilizante',
      date: { day: 20, month: 'Oct' },
      category: 'Reparaciones del Hogar',
      title: 'Como elegir una pintura impermeabilizante',
      comments: 5,
      link: '#',
    },
    {
      image: 'assets/images/blog/articulo-calefaccion-electrica-vs-gas.jpg',
      alt: 'Calefacción Eléctrica Vs Calefacción a Gas',
      date: { day: 20, month: 'Oct' },
      category: 'Recomendaciones',
      title: 'Calefacción Eléctrica Vs Calefacción a Gas',
      comments: 5,
      link: '#',
    },
    {
      image: 'assets/images/blog/articulo-asesoria-legal.jpg',
      alt: 'Asesoramiento Legal',
      date: { day: 20, month: 'Oct' },
      category: 'Asesoramiento Legal',
      title: 'Me ha llegado una carta documento, que hago?',
      comments: 5,
      link: '#',
    },
  ];

  useEffect(() => {
    // Initialize WOW.js for animations
    new WOW.WOW().init();
  }, []);

  return (
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
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
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
  );
};

export default BlogSection;
