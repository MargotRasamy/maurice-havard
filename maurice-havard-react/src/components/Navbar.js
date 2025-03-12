import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid bg-dark text-light px-0 py-2">
        <div className="row gx-0 d-none d-lg-flex">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center me-4">
              <span className="fa fa-phone-alt me-2"></span>
              <span>06 76 97 89 86</span>
            </div>
            <div className="h-100 d-inline-flex align-items-center">
              <span className="far fa-envelope me-2"></span>
              <span>mauricehavard99@gmail.com</span>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center mx-n2">
              <span>Suivez-nous :</span>
              <a className="btn btn-link text-light" href=""><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-link text-light" href=""><i className="fab fa-linkedin-in"></i></a>
              <a className="btn btn-link text-light" href=""><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
        <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
          <h1 className="m-0">Maurice HAVARD</h1>
        </Link>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link to="/" className={`nav-item nav-link ${location.pathname === '/' ? 'active' : ''}`}>Accueil</Link>
            <Link to="/about" className={`nav-item nav-link ${location.pathname === '/about' ? 'active' : ''}`}>À propos</Link>
            <Link to="/services" className={`nav-item nav-link ${location.pathname === '/services' ? 'active' : ''}`}>Services</Link>
            <Link to="/projects" className={`nav-item nav-link ${location.pathname === '/projects' ? 'active' : ''}`}>Réalisations</Link>
            
            {/* Pages Dropdown */}
            <div className="nav-item dropdown">
              <a href="#" className={`nav-link dropdown-toggle ${['/team', '/testimonials', '/quote', '/404'].includes(location.pathname) ? 'active' : ''}`} data-bs-toggle="dropdown">Pages</a>
              <div className="dropdown-menu bg-light m-0">
                <Link to="/team" className={`dropdown-item ${location.pathname === '/team' ? 'active' : ''}`}>Notre Équipe</Link>
                <Link to="/testimonials" className={`dropdown-item ${location.pathname === '/testimonials' ? 'active' : ''}`}>Témoignages</Link>
                <Link to="/quote" className={`dropdown-item ${location.pathname === '/quote' ? 'active' : ''}`}>Devis Gratuit</Link>
                <Link to="/404" className={`dropdown-item ${location.pathname === '/404' ? 'active' : ''}`}>Page 404</Link>
              </div>
            </div>

            <Link to="/contact" className={`nav-item nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
          </div>
          <Link to="/quote" className="btn btn-primary py-4 px-lg-4 rounded-0 d-none d-lg-block">Demander un Devis<i className="fa fa-arrow-right ms-3"></i></Link>
        </div>
      </nav>
      {/* Navbar End */}
    </>
  );
}

export default Navbar; 