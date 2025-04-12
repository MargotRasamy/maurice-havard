import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

//import AboutImage from '../../assets/img/divers/divers-landscape6.jpg';
import AboutImage from '../../assets/img/home2.jpg';
import "./MainAboutSection.scss";
import { Container } from 'react-bootstrap';
import Aos from 'aos';

function MainAboutSection({ yearsExperience }) {

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);
  return (
    <Container fluid className="section-about container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-start">
          <div className="image-container-about wow fadeInUp" data-aos="fade-in" data-aos-delay="30">
            <img className="rounded" src={AboutImage} alt="À propos" />
          </div>
          <div className="col-lg-6 col-md-7 wow fadeInUp" data-aos="fade-in" data-aos-delay="30">
            <h1 className="display-1 text-primary mb-0">{yearsExperience}</h1>
            <p className="text-primary mb-4">Années d'Expérience</p>
            <h1 className="display-5 mb-4">Maurice HAVARD, expert piscines et jardins depuis 1971</h1>
            <p className="mb-4">Avec plus de cinquante ans d'expertise dans la création et l'aménagement d'espaces extérieurs, nous donnons vie à vos rêves de jardins. Maurice HAVARD allie créativité et expertise en piscines et jardins pour créer des paysages magnifiques et durables qui valorisent votre propriété.</p>
            <Link to="/projets" className="btn btn-primary py-3 px-4">Découvrir nos réalisations</Link>
          </div>
          <div className="col-lg-3 col-md-12 wow fadeInUp" data-aos="fade-in" data-aos-delay="30">
            <div className="row g-5">
              <div className="col-12 col-sm-6 col-lg-12">
                <div className="border-start ps-4">
                  <i className="fa fa-award fa-3x text-primary mb-3"></i>
                  <h4 className="mb-3">Diplômé de l'Ecole d'horticulture de Saint Ilan (Bretagne)</h4>
                  <span>Spécialiste du jardin et de la pépinière</span>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-12">
                <div className="border-start ps-4">
                  <i className="fa fa-users fa-3x text-primary mb-3"></i>
                  <h4 className="mb-3">Créateur et concepteur de jardins depuis plus de 50 ans</h4>
                  <span>Création de l'entreprise : 1971</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default MainAboutSection; 