import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  useEffect(() => {
    const handleScroll = () => {
      const backToTop = document.querySelector('.back-to-top');
      if (backToTop) {
        if (window.scrollY > 100) {
          backToTop.style.display = 'block';
        } else {
          backToTop.style.display = 'none';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Footer Start */}
      <div className="container-fluid bg-dark text-light footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-4">Notre Bureau</h4>
              <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>1 Lauzit du Haut, RN21, 32500 Pauilhac</p>
              <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>06 76 97 89 86</p>
              <p className="mb-2"><i className="fa fa-envelope me-3"></i>mauricehavard99@gmail.com</p>
              <div className="d-flex pt-2">
                <Link className="btn btn-square btn-outline-light rounded-circle me-2" to="">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link className="btn btn-square btn-outline-light rounded-circle me-2" to="">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
                <Link className="btn btn-square btn-outline-light rounded-circle me-2" to="">
                  <i className="fab fa-instagram"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-4">Nos Services</h4>
              <Link className="btn btn-link" to="/services">Aménagement Paysager</Link>
              <Link className="btn btn-link" to="/services">Études et Plans</Link>
              <Link className="btn btn-link" to="/services">Maçonnerie Paysagère</Link>
              <Link className="btn btn-link" to="/services">Entretien des Espaces Verts</Link>
              <Link className="btn btn-link" to="/services">Élagage et Taille</Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-4">Liens Rapides</h4>
              <Link className="btn btn-link" to="/about">À propos</Link>
              <Link className="btn btn-link" to="/contact">Contact</Link>
              <Link className="btn btn-link" to="/services">Nos Services</Link>
              <Link className="btn btn-link" to="/projects">Nos Réalisations</Link>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}

      {/* Copyright Start */}
      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <Link to="/">Maurice Havard</Link>, Tous droits réservés.
            </div>
            <div className="col-md-6 text-center text-md-end">
              Design par <Link to="#">Margot et Lionel</Link>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright End */}

      {/* Back to Top */}
      <Link to="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top" onClick={scrollToTop}>
        <i className="bi bi-arrow-up"></i>
      </Link>
    </>
  );
}

export default Footer; 