import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';

function About() {
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
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-end">
            <div className="col-lg-3 col-md-5 wow fadeInUp" data-aos="fade-up" data-aos-delay="100">
              <img className="img-fluid rounded" src="img/about.jpg" alt="À propos" />
            </div>
            <div className="col-lg-6 col-md-7 wow fadeInUp" data-aos="fade-up" data-aos-delay="300">
              <h1 className="display-1 text-primary mb-0">52</h1>
              <p className="text-primary mb-4">Années d'Expérience</p>
              <h1 className="display-5 mb-4">Piscines et Jardins depuis 1971</h1>
              <p className="mb-4">Avec plus de cinquante ans d'expertise dans la création et l'aménagement d'espaces extérieurs, nous donnons vie à vos rêves de jardins. Notre équipe passionnée allie créativité et savoir-faire horticole pour créer des paysages magnifiques et durables qui valorisent votre propriété.</p>
              <Link to="/services" className="btn btn-primary py-3 px-4">Découvrir Nos Services</Link>
            </div>
            <div className="col-lg-3 col-md-12 wow fadeInUp" data-aos="fade-up" data-aos-delay="500">
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
            <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-aos="fade-up" data-aos-delay="100">
              <h1 className="display-4 text-white">98%</h1>
              <span className="fs-5 fw-semi-bold text-light">Clients Satisfaits</span>
            </div>
            <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-aos="fade-up" data-aos-delay="300">
              <h1 className="display-4 text-white">500+</h1>
              <span className="fs-5 fw-semi-bold text-light">Projets Réalisés</span>
            </div>
            <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-aos="fade-up" data-aos-delay="500">
              <h1 className="display-4 text-white">52</h1>
              <span className="fs-5 fw-semi-bold text-light">Années d'Expérience</span>
            </div>
            <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-aos="fade-up" data-aos-delay="700">
              <h1 className="display-4 text-white">15+</h1>
              <span className="fs-5 fw-semi-bold text-light">Collaborateurs</span>
            </div>
          </div>
        </div>
      </div>
      {/* Facts End */}

      {/* Team Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto wow fadeInUp" data-aos="fade-up" data-aos-delay="100" style={{maxWidth: "500px"}}>
            <p className="fs-5 fw-bold text-primary">Notre Équipe</p>
            <h1 className="display-5 mb-5">Une Équipe Expérimentée et Dévouée</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-aos="fade-up" data-aos-delay="100">
              <div className="team-item rounded">
                <img className="img-fluid" src="img/team-1.jpg" alt="Membre de l'équipe" />
                <div className="team-text">
                  <h4 className="mb-0">Maurice Havard</h4>
                  <p className="text-primary">Fondateur</p>
                  <div className="team-social d-flex">
                    <a className="btn btn-square rounded-circle me-2" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square rounded-circle me-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a className="btn btn-square rounded-circle me-2" href="#"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-aos="fade-up" data-aos-delay="300">
              <div className="team-item rounded">
                <img className="img-fluid" src="img/team-2.jpg" alt="Team Member" />
                <div className="team-text">
                  <h4 className="mb-0">Johnny Ramirez</h4>
                  <p className="text-primary">Garden Designer</p>
                  <div className="team-social d-flex">
                    <a className="btn btn-square rounded-circle me-2" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square rounded-circle me-2" href="#"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-square rounded-circle me-2" href="#"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-aos="fade-up" data-aos-delay="500">
              <div className="team-item rounded">
                <img className="img-fluid" src="img/team-3.jpg" alt="Team Member" />
                <div className="team-text">
                  <h4 className="mb-0">Diana Wagner</h4>
                  <p className="text-primary">Senior Gardener</p>
                  <div className="team-social d-flex">
                    <a className="btn btn-square rounded-circle me-2" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square rounded-circle me-2" href="#"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-square rounded-circle me-2" href="#"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}
    </>
  );
}

export default About; 