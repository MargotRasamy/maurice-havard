import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import AboutImage from '../../assets/img/home2.jpg';
import ProjectShowcase from '../../components/ProjectShowcase/ProjectShowcase';
import "./about.scss";

function About() {
  const [currentYear] = useState(new Date().getFullYear());
  const yearsExperience = currentYear - 1971;

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
          <h1 className="display-3 text-white mb-4 animated slideInDown">À propos</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
              <li className="breadcrumb-item active" aria-current="page">À propos</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}

      {/* About Start */}
      <div className="section-about container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="image-container-about wow fadeInUp" data-aos="fade-in" data-aos-delay="30">
              <img className="rounded" src={AboutImage} alt="À propos" />
            </div>
            <div className="col-lg-6 col-md-7 wow fadeInUp" data-aos="fade-in" data-aos-delay="30">
              <h1 className="display-1 text-primary mb-0">{yearsExperience}</h1>
              <p className="text-primary mb-4">Années d'Expérience</p>
              <h1 className="display-5 mb-4">Piscines et Jardins depuis 1971</h1>
              <p className="mb-4">Avec plus de cinquante ans d'expertise dans la création et l'aménagement d'espaces extérieurs, nous donnons vie à vos rêves de jardins. Notre équipe passionnée allie créativité et savoir-faire horticole pour créer des paysages magnifiques et durables qui valorisent votre propriété.</p>
              <Link to="/services" className="btn btn-primary py-3 px-4">Découvrir Nos Services</Link>
            </div>
            <div className="col-lg-3 col-md-12 wow fadeInUp" data-aos="fade-in" data-aos-delay="30">
              <div className="row g-5">
                <div className="col-12 col-sm-6 col-lg-12">
                  <div className="border-start ps-4">
                    <i className="fa fa-award fa-3x text-primary mb-3"></i>
                    <h4 className="mb-3">Expertise Reconnue</h4>
                    <span>Reconnus pour notre excellence en conception paysagère et en entretien de jardins, avec une approche innovante et durable.</span>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-12">
                  <div className="border-start ps-4">
                    <i className="fa fa-users fa-3x text-primary mb-3"></i>
                    <h4 className="mb-3">Équipe Dédiée</h4>
                    <span>Notre équipe de professionnels qualifiés est passionnée par la création et l'entretien d'espaces extérieurs qui dépassent vos attentes.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Facts Start */}
      <div className="container-fluid facts my-5 py-5" data-parallax="scroll" data-image-src="img/carousel-1.jpg">
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

      {/* Projects Showcase */}
      <ProjectShowcase />
    </>
  );
}

export default About; 