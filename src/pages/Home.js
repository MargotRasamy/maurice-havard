import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { WOW } from 'wowjs';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import 'wowjs/css/libs/animate.css';

// Import images
import carousel1 from '../assets/img/home.jpg';
import carousel2 from '../assets/img/home2.jpg';

// Import components
import Projects from '../components/Projects/Projects';
import TestimonialsSection from '../components/Testimonials/TestimonialsSection';
import Engagement from '../components/Engagement/Engagement';
import AboutSection from '../components/AboutSection/AboutSection';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import GrafSystem from '../components/GrafSystem/GrafSystem';
import MainAboutSection from '../components/MainAboutSection/MainAboutSection';

function Home() {
  const [currentYear] = useState(new Date().getFullYear());
  const yearsExperience = currentYear - 1971;

  useEffect(() => {
    new WOW().init();
  }, []);

  const services = [
    {
      image: "/img/service-1.jpg",
      icon: "/img/icon/icon-3.png",
      title: "Aménagement Paysager",
      description: "Création et aménagement de jardins sur mesure. Conception d'espaces verts harmonieux et durables. Mise en valeur de votre extérieur avec des solutions adaptées à vos envies et à votre terrain.",
      delay: "0.1s",
    },
    {
      image: "/img/service-2.jpg",
      icon: "/img/icon/icon-6.png",
      title: "Études et Plans",
      description: "Réalisation d'études détaillées et de plans d'aménagement personnalisés. Analyse approfondie de votre terrain et de vos besoins pour créer un projet cohérent et réalisable. Conseils experts pour optimiser votre espace extérieur.",
      delay: "0.3s",
    },
    {
      image: "/img/service-3.jpg",
      icon: "/img/icon/icon-5.png",
      title: "Maçonnerie Paysagère",
      description: "Construction d'éléments en pierre et maçonnerie pour structurer et embellir votre jardin. Réalisation de murets, escaliers, terrasses et allées. Travail soigné avec des matériaux de qualité pour un résultat durable.",
      delay: "0.5s",
    },
    {
      image: "/img/service-4.jpg",
      icon: "/img/icon/icon-4.png",
      title: "Entretien des Espaces Verts",
      description: "Entretien régulier et professionnel de vos espaces verts. Tonte, taille des haies, désherbage et soins des végétaux. Suivi personnalisé pour maintenir la beauté de votre jardin toute l'année.",
      delay: "0.1s",
    },
    {
      image: "/img/service-5.jpg",
      icon: "/img/icon/icon-8.png",
      title: "Élagage et Taille",
      description: "Élagage professionnel et taille raisonnée de vos arbres et arbustes. Intervention respectueuse pour favoriser la santé et la croissance des végétaux. Expertise dans la gestion des hauteurs et l'entretien des formes.",
      delay: "0.3s",
    },
    {
      image: "/img/service-6.jpg",
      icon: "/img/icon/icon-2.png",
      title: "Création de Piscines",
      description: "Conception et réalisation de piscines sur mesure. Installation professionnelle avec des matériaux de qualité. Intégration harmonieuse dans votre espace extérieur pour créer un lieu de détente unique.",
      delay: "0.5s",
    },
  ];

  return (
    <>
      {/* Carousel Start */}
      <Container fluid className="p-0 wow fadeIn" data-wow-delay="0.05s">
        <Carousel id="header-carousel" className="slide" interval={5000}>
          <Carousel.Item>
            <img className="w-100" src={carousel1} alt="Image" />
            <Carousel.Caption>
              <Container>
                <Row className="justify-content-center">
                  <Col lg={8}>
                    <h1 className="display-1 text-white mb-5 animated slideInDown">Piscines et Jardins depuis 1971</h1>
                    <Link to="/about">
                      <Button variant="primary" className="py-sm-3 px-sm-4">Explorer</Button>
                    </Link>
                  </Col>
                </Row>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="w-100" src={carousel2} alt="Image" />
            <Carousel.Caption>
              <Container>
                <Row className="justify-content-center">
                  <Col lg={7}>
                    <h1 className="display-1 text-white mb-5 animated slideInDown">Piscines et Jardins depuis 1971</h1>
                    <Link to="/about">
                      <Button variant="primary" className="py-sm-3 px-sm-4">Explorer</Button>
                    </Link>
                  </Col>
                </Row>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      {/* Carousel End */}

      {/* Top Feature Start */}
      <Container fluid className="top-feature py-5 pt-lg-0">
        <Container className="py-5 pt-lg-0">
          <Row className="gx-0 wow" data-wow-delay="0.05s">
            <Col lg={4}>
              <div className="bg-white shadow d-flex align-items-center h-100 px-5" style={{minHeight: "160px"}}>
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                    <i className="fa fa-check text-primary"></i>
                  </div>
                  <div className="ps-3">
                    <h4>Devis gratuit</h4>
                    <span>Estimation détaillée et personnalisée</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="bg-white shadow d-flex align-items-center h-100 px-5" style={{minHeight: "160px"}}>
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                    <i className="fa fa-users text-primary"></i>
                  </div>
                  <div className="ps-3">
                    <h4>Équipe qualifiée</h4>
                    <span>Professionnels expérimentés</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="bg-white shadow d-flex align-items-center h-100 px-5" style={{minHeight: "160px"}}>
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                    <i className="fa fa-phone text-primary"></i>
                  </div>
                  <div className="ps-3">
                    <h4>Service client</h4>
                    <span>À votre écoute</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      {/* Top Feature End */}

      {/* About Start */}
      <MainAboutSection yearsExperience={yearsExperience} />
      {/* About End */}

      {/* About Section Start */}
      <AboutSection />
      {/* About Section End */}

      {/* Graf System Section Start */}
      <GrafSystem />
      {/* Graf System Section End */}

      {/* Facts Start */}
      <Container fluid className="facts my-5 py-5">
        <Container className="py-5">
          <Row className="g-5">
            <Col sm={6} lg={3} className="text-center wow fadeIn" data-wow-delay="0.1s">
              <h1 className="display-4 text-white" data-toggle="counter-up">52</h1>
              <span className="fs-5 fw-semi-bold text-white">Années d'expérience</span>
            </Col>
            <Col sm={6} lg={3} className="text-center wow fadeIn" data-wow-delay="0.3s">
              <h1 className="display-4 text-white" data-toggle="counter-up">1000+</h1>
              <span className="fs-5 fw-semi-bold text-white">Projets réalisés</span>
            </Col>
            <Col sm={6} lg={3} className="text-center wow fadeIn" data-wow-delay="0.5s">
              <h1 className="display-4 text-white" data-toggle="counter-up">15</h1>
              <span className="fs-5 fw-semi-bold text-white">Professionnels qualifiés</span>
            </Col>
            <Col sm={6} lg={3} className="text-center wow fadeIn" data-wow-delay="0.7s">
              <h1 className="display-4 text-white" data-toggle="counter-up">98%</h1>
              <span className="fs-5 fw-semi-bold text-white">Clients satisfaits</span>
            </Col>
          </Row>
        </Container>
      </Container>
      {/* Facts End */}

      {/* Projects Start */}
      <Projects />
      {/* Projects End */}

      {/* Quote Start */}
      <Container fluid className="quote my-5 py-5">
        <Container className="py-5">
          <Row className="g-5 justify-content-center">
            <Col lg={7}>
              <div className="bg-white rounded p-5 h-100">
                <h1 className="display-5 mb-4">Demandez un Devis Gratuit</h1>
                <p className="mb-4">Contactez-nous pour obtenir un devis personnalisé pour votre projet d'aménagement paysager ou de création de piscine.</p>
                <Link to="/quote" className="btn btn-primary py-3 px-4">
                  <Button variant="primary" className="py-3 px-4">Demander un Devis</Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      {/* Quote End */}

      {/* Testimonials Start */}
      <TestimonialsSection />
      {/* Testimonials End */}
    </>
  );
}

export default Home; 