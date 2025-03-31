import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import './project-showcase.scss';
import { WOW } from 'wowjs';

// Import project images
import project1 from '../../assets/img/pool1.jpg';
import project2 from '../../assets/img/pool2.jpg';
import project3 from '../../assets/img/pool3.jpg';
import project4 from '../../assets/img/pool4.jpg';
import project5 from '../../assets/img/landscape3.jpg';
import project6 from '../../assets/img/landscape1.jpg';
import landscape1 from '../../assets/img/divers/divers-landscape1.jpg';
import landscape2 from '../../assets/img/divers/divers-landscape2.jpg';
import landscape3 from '../../assets/img/divers/divers-landscape3.jpg';
import landscape4 from '../../assets/img/divers/divers-landscape4.jpg';
import landscape5 from '../../assets/img/divers/divers-landscape5.jpg';

import pool1 from '../../assets/img/divers/divers-pool1.jpg';
import pool2 from '../../assets/img/divers/divers-pool2.jpg';
import pool3 from '../../assets/img/divers/divers-pool3.jpg';


const PROJECT_CATEGORIES = {
  ALL: '*',
  POOLS: 'first',
  LANDSCAPES: 'second'
};

const PROJECTS_DATA = [
  {
    id: 1,
    image: project1,
    title: "Piscine et jacuzzi entourés de rochers cascade",
    category: PROJECT_CATEGORIES.POOLS,
    description: "Piscine et jacuzzi à débordement, entourés de rochers cascade, créent un cadre naturel et apaisant, idéal pour la détente en pleine nature."
  },
  {
    id: 2,
    image: project2,
    title: "Jardin Méditerranéen",
    category: PROJECT_CATEGORIES.POOLS,
    description: "Aménagement paysager avec plantes méditerranéennes et oliviers centenaires. Un espace de détente où les parfums de la lavande et du romarin se mêlent aux couleurs chaleureuses du sud."
  },
  {
    id: 3,
    image: project3,
    title: "Terrasse Design",
    category: PROJECT_CATEGORIES.POOLS,
    description: "Création d'une terrasse en bois exotique avec pergola bioclimatique. Un espace de vie extérieur moderne et fonctionnel, parfait pour les moments de convivialité."
  },
  {
    id: 4,
    image: project4,
    title: "Bassin Ornemental",
    category: PROJECT_CATEGORIES.POOLS,
    description: "Bassin paysager avec cascade et éclairage LED intégré. Un point d'eau vivant qui apporte sérénité et dynamisme à votre jardin."
  },
  {
    id: 5,
    image: project5,
    title: "Jardin Paysager",
    category: PROJECT_CATEGORIES.LANDSCAPES,
    description: "Création d'un jardin paysager luxuriant avec une harmonie parfaite entre les différents éléments végétaux. Un espace vert structuré qui offre une expérience sensorielle unique à travers ses textures, couleurs et parfums."
  },
    {
      id: 6,
      image: landscape1,
      title: "Espace vert d'entreprise",
      category: PROJECT_CATEGORIES.LANDSCAPES,
      description: "Un espace vert structuré pour les entreprises"
    },
    {
      id: 7,
      image: landscape2,
      title: "Espace vert d'entreprise",
      category: PROJECT_CATEGORIES.LANDSCAPES,
      description: "Un espace vert structuré pour les entreprises"
    },
    {
      id: 8,
      image: landscape3,
      title: "Espace vert d'entreprise",
      category: PROJECT_CATEGORIES.LANDSCAPES,
      description: "Un espace vert structuré pour les entreprises"
    },
    {
      id: 9,
      image: landscape4,
      title: "Espace vert d'entreprise",
      category: PROJECT_CATEGORIES.LANDSCAPES,
      description: "Un espace vert structuré pour les entreprises"
    },  
    {
      id: 10,
      image: landscape5,
      title: "Espace vert d'entreprise",
      category: PROJECT_CATEGORIES.LANDSCAPES,
      description: "Un espace vert structuré pour les entreprises"
    },
    {
      id: 11,
      image: pool1,
      title: "Piscine Moderne",
      category: PROJECT_CATEGORIES.POOLS,
      description: "Une piscine contemporaine avec système de nage à contre-courant, intégrant les dernières innovations en matière de filtration et d'éclairage. Le design épuré s'harmonise parfaitement avec l'environnement naturel."
    },
    {
      id: 12,
      image: pool2,
      title: "Piscine Moderne",
      category: PROJECT_CATEGORIES.POOLS,
      description: "Une piscine contemporaine avec système de nage à contre-courant, intégrant les dernières innovations en matière de filtration et d'éclairage. Le design épuré s'harmonise parfaitement avec l'environnement naturel."
    },
    {
      id: 13,
      image: pool3,
      title: "Piscine Moderne",
      category: PROJECT_CATEGORIES.POOLS,
      description: "Une piscine contemporaine avec système de nage à contre-courant, intégrant les dernières innovations en matière de filtration et d'éclairage. Le design épuré s'harmonise parfaitement avec l'environnement naturel."
    }
];
const ProjectCard = ({ project, onClick, isMobile }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
  >
    <div className="project-card" onClick={() => !isMobile && onClick(project)}>
      <div className="project-image-container">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  </motion.div>
);

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired
};

const FilterButton = ({ category, label, isActive, onClick }) => (
  <Button
    variant={isActive ? "primary" : "outline-primary"}
    className="mx-2"
    onClick={onClick}
    aria-pressed={isActive}
  >
    {label}
  </Button>
);

FilterButton.propTypes = {
  category: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

function ProjectShowcase() {
  const [filter, setFilter] = useState(PROJECT_CATEGORIES.ALL);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredProjects = useMemo(() => 
    PROJECTS_DATA.filter(project => 
      filter === PROJECT_CATEGORIES.ALL || project.category === filter
    ),
    [filter]
  );

  const handleProjectClick = (project) => {
    if (!isMobile) {
      setSelectedProject(project);
      setShowModal(true);
    }
  };

  useEffect(() => {
    new WOW().init();
  }, []);

  return (
    <Container fluid className="py-5">
      <Container>
        <div className="text-center mx-auto wow fadeIn" data-wow-delay="0.1s" style={{maxWidth: "500px"}}>
          <p className="fs-5 fw-bold text-primary">Nos Projets</p>
          <h1 className="display-5 mb-5">Découvrez nos réalisations</h1>
          <p className="mb-5">Explorez notre galerie de projets et découvrez comment nous transformons les espaces extérieurs en lieux d'exception.</p>
        </div>
        
        <Row className="justify-content-center mb-5">
          <Col xs="auto">
            <FilterButton
              category={PROJECT_CATEGORIES.ALL}
              label="Tous"
              isActive={filter === PROJECT_CATEGORIES.ALL}
              onClick={() => setFilter(PROJECT_CATEGORIES.ALL)}
            />
            <FilterButton
              category={PROJECT_CATEGORIES.POOLS}
              label="Piscines"
              isActive={filter === PROJECT_CATEGORIES.POOLS}
              onClick={() => setFilter(PROJECT_CATEGORIES.POOLS)}
            />
            <FilterButton
              category={PROJECT_CATEGORIES.LANDSCAPES}
              label="Jardins"
              isActive={filter === PROJECT_CATEGORIES.LANDSCAPES}
              onClick={() => setFilter(PROJECT_CATEGORIES.LANDSCAPES)}
            />
          </Col>
        </Row>

        <Row className="g-4 portfolio-container">
          <AnimatePresence>
            {filteredProjects.map(project => (
              <Col key={project.id} lg={4} md={6}>
                <ProjectCard 
                  project={project} 
                  onClick={handleProjectClick}
                  isMobile={isMobile}
                />
              </Col>
            ))}
          </AnimatePresence>
        </Row>

        {/* Project Modal - Only show on desktop */}
        {!isMobile && showModal && selectedProject && (
          <div className="modal project-modal show" style={{ display: 'block' }}>
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body">
                  <button className="modal-close" onClick={() => setShowModal(false)}>
                    <i className="fas fa-times"></i>
                  </button>
                  <div className="modal-image">
                    <img src={selectedProject.image} alt={selectedProject.title} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {!isMobile && showModal && <div className="modal-backdrop show"></div>}
      </Container>
    </Container>
  );
}

export default ProjectShowcase; 