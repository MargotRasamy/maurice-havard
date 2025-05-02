import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { WOW } from 'wowjs';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import 'wowjs/css/libs/animate.css';

// Import images
import carousel1 from '../assets/img/home.jpg';
import carousel2 from '../assets/img/pool6.jpg';

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

  useLayoutEffect(() => {
    window.scrollTo(0, 0, { behavior: 'smooth' })
  });

  useEffect(() => {
    new WOW().init();
  }, []);

  const services = [
    {
      image: "/img/service-1.jpg",
      icon: "/img/icon/icon-3.png",
      title: "Aménagement Paysager dans le Gers",
      description: "Création et aménagement de jardins sur mesure dans le Gers. Conception d'espaces verts harmonieux et durables. Mise en valeur de votre extérieur avec des solutions adaptées à vos envies et à votre terrain.",
      delay: "0.1s",
    },
    {
      image: "/img/service-2.jpg",
      icon: "/img/icon/icon-6.png",
      title: "Études et Plans Paysagers",
      description: "Réalisation d'études détaillées et de plans d'aménagement personnalisés dans le Gers. Analyse approfondie de votre terrain et de vos besoins pour créer un projet cohérent et réalisable.",
      delay: "0.3s",
    },
    {
      image: "/img/service-3.jpg",
      icon: "/img/icon/icon-5.png",
      title: "Maçonnerie Paysagère Gers",
      description: "Construction d'éléments en pierre et maçonnerie pour structurer et embellir votre jardin dans le Gers. Réalisation de murets, escaliers, terrasses et allées avec des matériaux locaux.",
      delay: "0.5s",
    },
    {
      image: "/img/service-4.jpg",
      icon: "/img/icon/icon-4.png",
      title: "Entretien des Espaces Verts Gers",
      description: "Entretien régulier et professionnel de vos espaces verts dans le Gers. Tonte, taille des haies, désherbage et soins des végétaux. Suivi personnalisé pour maintenir la beauté de votre jardin.",
      delay: "0.1s",
    },
    {
      image: "/img/service-5.jpg",
      icon: "/img/icon/icon-8.png",
      title: "Élagage et Taille dans le Gers",
      description: "Élagage professionnel et taille raisonnée de vos arbres et arbustes dans le Gers. Intervention respectueuse pour favoriser la santé et la croissance des végétaux.",
      delay: "0.3s",
    },
    {
      image: "/img/service-6.jpg",
      icon: "/img/icon/icon-2.png",
      title: "Création de Piscines dans le Gers",
      description: "Conception et réalisation de piscines sur mesure dans le Gers. Installation professionnelle avec des matériaux de qualité. Intégration harmonieuse dans votre espace extérieur.",
      delay: "0.5s",
    },
  ];

  return (
    <>
      {/* Carousel Start */}
      <Container fluid className="p-0">
        <Carousel id="header-carousel" className="slide" interval={8000}>
          <Carousel.Item>
            <img className="w-100" src={carousel1} alt="Expert pisciniste et paysagiste dans le Gers" />
            <Carousel.Caption>
              <Container>
                <Row className="justify-content-center">
                  <Col lg={8}>
                    <h1 className="display-1 text-white mb-5 animated fadeIn">Pisciniste et Paysagiste dans le Gers</h1>
                    <a href="#explore">
                      <Button variant="primary" className="py-sm-3 px-sm-4">Explorer</Button>
                    </a>
                  </Col>
                </Row>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="w-100" src={carousel2} alt="Expert piscines et jardins dans le Gers" />
            <Carousel.Caption>
              <Container>
                <Row className="justify-content-center">
                  <Col lg={8}>
                    <h1 className="display-1 text-white mb-5 animated fadeIn">Pisciniste et Paysagiste dans le Gers</h1>
                    <a href="#explore">
                      <Button variant="primary" className="py-sm-3 px-sm-4">Explorer</Button>
                    </a>
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
          <Row className="gx-0 wow" data-wow-delay="0.005s">
            <Col lg={4}>
              <div className="bg-white shadow d-flex align-items-center h-100 px-5" style={{minHeight: "160px"}}>
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                    <i className="fa fa-check text-primary"></i>
                  </div>
                  <div className="ps-3">
                    <h4>Professionnel expérimenté</h4>
                    <span>Expertise reconnue sur plus de 50 ans d'expérience dans le Gers</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="bg-white shadow d-flex align-items-center h-100 px-5" style={{minHeight: "160px"}}>
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                    <i className="fa fa-home text-primary"></i>
                  </div>
                  <div className="ps-3">
                    <h4>Spécialiste en piscines dans le Gers</h4>
                    <span>Utilisation du système robuste GRAF pour des piscines durables</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="bg-white shadow d-flex align-items-center h-100 px-5" style={{minHeight: "160px"}}>
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                    <i className="fa fa-tree text-primary"></i>
                  </div>
                  <div className="ps-3">
                    <h4>Spécialiste du jardin et de la pépinière dans le Gers</h4>
                    <span>Conseils et solutions personnalisées pour votre jardin</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      {/* Top Feature End */}

      {/* About Start */}
      <div id="explore">
        <MainAboutSection yearsExperience={yearsExperience} />
      </div>
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
            <Col sm={6} lg={3} className="text-center wow fadeIn" data-wow-delay="0.001s">
              <h1 className="display-4 text-white" data-toggle="counter-up">{yearsExperience}</h1>
              <span className="fs-5 fw-semi-bold text-white">Années d'expérience</span>
            </Col>
            <Col sm={6} lg={3} className="text-center wow fadeIn" data-wow-delay="0.002s">
              <h1 className="display-4 text-white" data-toggle="counter-up">200+</h1>
              <span className="fs-5 fw-semi-bold text-white">Projets réalisés</span>
            </Col>
            <Col sm={6} lg={3} className="text-center wow fadeIn" data-wow-delay="0.003s">
              <h1 className="display-4 text-white" data-toggle="counter-up">2</h1>
              <span className="fs-5 fw-semi-bold text-white">Expertises majeures</span>
            </Col>
            <Col sm={6} lg={3} className="text-center wow fadeIn" data-wow-delay="0.004s">
              <h1 className="display-4 text-white" data-toggle="counter-up">1</h1>
              <span className="fs-5 fw-semi-bold text-white">Pisciniste et paysagiste professionnel de confiance</span>
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
                <h1 className="display-5 mb-4 text-center">Devis gratuit pour votre projet dans le Gers</h1>
                <p className="mb-4">Contactez-nous pour obtenir un devis personnalisé pour votre projet de piscine ou d'aménagement paysager dans le Gers.</p>
                <div className="text-center">
                  <Link to="/devis" className="btn btn-primary py-2 px-2">
                    <Button variant="primary" className="py-3 px-4">Demander un Devis</Button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      {/* Quote End */}

      {/* Testimonials Start */}
      {/* <TestimonialsSection /> */}
      {/* Testimonials End */}
    </>
  );
}

export default Home; 