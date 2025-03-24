import React, { useEffect, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { WOW } from 'wowjs';
import 'wowjs/css/libs/animate.css';
import TestimonialsSection from '../components/Testimonials/TestimonialsSection';

function Testimonials() {
  useEffect(() => {
    new WOW().init();
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0, { behavior: 'smooth' })
  });

  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container text-center py-5">
          <h1 className="display-3 text-white mb-4 animated fadeIn">Témoignages</h1>
          <nav aria-label="breadcrumb animated fadeIn">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Témoignages</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}

      {/* Testimonial Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
              <p className="fs-5 fw-bold text-primary">Témoignages</p>
              <h1 className="display-5 mb-5">Ce que nos clients disent !</h1>
              <p className="mb-4">Découvrez pourquoi nos clients nous font confiance pour leurs projets de piscines et jardins depuis plus de 50 ans. Lisez leurs expériences et découvrez notre engagement pour l'excellence.</p>
              <Link to="/contact" className="btn btn-primary py-3 px-4">Contactez-nous</Link>
            </div>
            <TestimonialsSection />
          </div>
        </div>
      </div>
      {/* Testimonial End */}
    </>
  );
}

export default Testimonials; 