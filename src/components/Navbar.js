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
            <Link to="/services" className={`nav-item nav-link ${location.pathname === '/services' ? 'active' : ''}`}>Services</Link>
            
            {/* Pages Dropdown */}
            <div className="nav-item dropdown">
              <a href="#" className={`nav-link dropdown-toggle ${['/404'].includes(location.pathname) ? 'active' : ''}`} data-bs-toggle="dropdown">Réalisations</a>
              <div className="dropdown-menu bg-light m-0">
                <Link to="/projects" className={`dropdown-item ${location.pathname === '/projects' ? 'active' : ''}`}>Réalisations diverses</Link>
              </div>
            </div>

            <Link to="/contact" className={`nav-item nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
            <Link to="/quote" className="btn btn-primary ctaBtn py-2 px-3 rounded-0 d-none d-lg-block"><span>Demander un devis<i className="fa fa-arrow-right ms-3"></i></span></Link>
          </div>
        </div>
      </nav>
      {/* Navbar End */}
    </>
  );
}

export default Navbar; 