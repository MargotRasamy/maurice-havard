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
              <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Rue Example, 75000 Paris</p>
              <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+33 1 23 45 67 89</p>
              <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@maurice-havard.fr</p>
              <div className="d-flex pt-2">
                <Link className="btn btn-square btn-outline-light rounded-circle me-2" to="">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link className="btn btn-square btn-outline-light rounded-circle me-2" to="">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link className="btn btn-square btn-outline-light rounded-circle me-2" to="">
                  <i className="fab fa-youtube"></i>
                </Link>
                <Link className="btn btn-square btn-outline-light rounded-circle me-2" to="">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-4">Services</h4>
              <Link className="btn btn-link" to="/services">Décoration Paysagiste</Link>
              <Link className="btn btn-link" to="/services">Etudes et plans</Link>
              <Link className="btn btn-link" to="/services">Maçonnerie décorative</Link>
              <Link className="btn btn-link" to="/services">Elagage</Link>
              <Link className="btn btn-link" to="/services">Terrassement</Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-4">Liens Rapides</h4>
              <Link className="btn btn-link" to="/about">À propos</Link>
              <Link className="btn btn-link" to="/contact">Contact</Link>
              <Link className="btn btn-link" to="/services">Nos Services</Link>
              <Link className="btn btn-link" to="/terms">Conditions</Link>
              <Link className="btn btn-link" to="/support">Support</Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-4">Newsletter</h4>
              <p>Inscrivez-vous pour recevoir nos actualités</p>
              <div className="position-relative w-100">
                <input className="form-control bg-light border-light w-100 py-3 ps-4 pe-5" type="text" placeholder="Votre email" />
                <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">S'inscrire</button>
              </div>
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
              Créé par <Link to="https://htmlcodex.com">HTML Codex</Link>
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