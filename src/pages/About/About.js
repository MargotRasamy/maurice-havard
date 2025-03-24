import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import MainAboutSection from '../../components/MainAboutSection/MainAboutSection';
import "./about.scss";

function About() {
  const [currentYear] = useState(new Date().getFullYear());
  const yearsExperience = currentYear - 1971;

  useLayoutEffect(() => {
    window.scrollTo(0, 0, { behavior: 'smooth' })
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
          <h1 className="display-3 text-white mb-4 animated fadeIn">À propos</h1>
          <nav aria-label="breadcrumb animated fadeIn">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
              <li className="breadcrumb-item active" aria-current="page">À propos</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}

      {/* About Start */}
      <MainAboutSection yearsExperience={yearsExperience} />
      {/* About End */}

      {/* Facts Start */}
      <div className="container-fluid facts my-5 py-5" data-parallax="scroll">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-aos="fade-in" data-aos-delay="30">
              <h1 className="display-4 text-white">98%</h1>
              <span className="fs-5 fw-semi-bold text-light">Clients Satisfaits</span>
            </div>
            <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-aos="fade-in" data-aos-delay="30">
              <h1 className="display-4 text-white">150+</h1>
              <span className="fs-5 fw-semi-bold text-light">Projets Réalisés</span>
            </div>
            <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-aos="fade-in" data-aos-delay="30">
              <h1 className="display-4 text-white">{yearsExperience}</h1>
              <span className="fs-5 fw-semi-bold text-light">Années d'Expérience</span>
            </div>
            <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-aos="fade-in" data-aos-delay="30">
              <h1 className="display-4 text-white">15+</h1>
              <span className="fs-5 fw-semi-bold text-light">Collaborateurs</span>
            </div>
          </div>
        </div>
      </div>
      {/* Facts End */}
    </>
  );
}

export default About; 