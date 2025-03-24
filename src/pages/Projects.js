import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import ProjectShowcase from '../components/ProjectShowcase/ProjectShowcase';
import { WOW } from 'wowjs';
import { Container, Row, Col } from 'react-bootstrap';
import SpecificProjectJourney from '../components/SpecificProjectJourney/SpecificProjectJourney';
import 'wowjs/css/libs/animate.css';

// Import des images du projet
import projectImage1 from '../assets/img/divers/projet/1.jpg';
import projectImage2 from '../assets/img/divers/projet/2.jpg';
import projectImage3 from '../assets/img/divers/projet/3.jpg';
import projectImage4 from '../assets/img/divers/projet/4.jpg';
import projectImage5 from '../assets/img/divers/projet/5.jpg';
import projectImage6 from '../assets/img/divers/projet/6.jpg';

function Projects() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
    new WOW().init();
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0, { behavior: 'smooth' })
  });

  const projectData = {
    title: "Projet d'Aménagement Paysager",
    description: "Découvrez notre projet d'aménagement paysager complet, de la conception à la réalisation. Ce projet illustre notre expertise dans la création d'espaces extérieurs harmonieux et fonctionnels.",
    images: [
      {
        url: projectImage1,
        description: "Vue d'ensemble du projet avant travaux"
      },
      {
        url: projectImage2,
        description: "Préparation du terrain et mise en place des structures"
      },
      {
        url: projectImage3,
        description: "Installation des éléments paysagers"
      },
      {
        url: projectImage4,
        description: "Mise en place des végétaux et des aménagements"
      },
      {
        url: projectImage5,
        description: "Détails des finitions et des éléments décoratifs"
      },
      {
        url: projectImage6,
        description: "Résultat final du projet d'aménagement"
      }
    ]
  };

  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <Container className="text-center py-5">
          <h1 className="display-3 text-white mb-4 animated slideInDown">Nos Projets</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Projets</li>
            </ol>
          </nav>
        </Container>
      </div>
      {/* Page Header End */}

      {/* Project Journey Start */}
      <SpecificProjectJourney {...projectData} />
      {/* Project Journey End */}

      <ProjectShowcase />
    </>
  );
}

export default Projects; 