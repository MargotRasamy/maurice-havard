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

import minipiscine1 from '../assets/img/minipiscine/mini-piscine1.jpg';
import minipiscine2 from '../assets/img/minipiscine/mini-piscine2.png';
import minipiscine3 from '../assets/img/minipiscine/mini-piscine3.png';
import minipiscine4 from '../assets/img/minipiscine/mini-piscine4.png';
import minipiscine5 from '../assets/img/minipiscine/mini-piscine5.png';
import minipiscine6 from '../assets/img/minipiscine/mini-piscine8.png';

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
        description: "Aménagement d'une piscine avec ... vert"
      },
      {
        url: projectImage2,
        description: "Aménagement d'une piscine avec ... vert"
      },
      {
        url: projectImage3,
        description: null
      },
      {
        url: projectImage4,
        description: "Escalier en pierre avec rocaille"
      },
      {
        url: projectImage5,
        description: "Piscine"
      },
      {
        url: projectImage6,
        description: "... japonais"
      }
    ]
  };

  const projetCoqueEnPolyester = {
    title: "Projet d'installation d'une mini-piscine",
    description: "Nos mini-piscines sont réalisées à l'aide de <strong>mini-coques en polyester</strong> fabriquées en usine à <strong>Montauban</strong>.",
    images: [
      {
        url: minipiscine1,
        description: null
      },
      {
        url: minipiscine2,
        description: null
      },
      {
        url: minipiscine3,
        description: null
      },
      {
        url: minipiscine4,
        description: null
      },
      {
        url: minipiscine5,
        description: null
      },
      {
        url: minipiscine6,
        description: null
      }
    ]
  };

  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid page-header py-5 mb-5">
        <Container className="text-center py-5">
          <h1 className="display-3 text-white mb-4 animated fadeIn">Nos Réalisations</h1>
          <nav aria-label="breadcrumb animated fadeIn">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Réalisations</li>
            </ol>
          </nav>
        </Container>
      </div>
      {/* Page Header End */}

      {/* Project Journey Start */}
      <SpecificProjectJourney {...projectData} />
      {/* Project Journey End */}

      {/* Coque en polyester */}
      <SpecificProjectJourney {...projetCoqueEnPolyester} />
      {/* Coque en polyester End */}

      <ProjectShowcase />
    </>
  );
}

export default Projects; 