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

// Piscine et jacuzzi à débordement, entourés de rochers cascade, créent un cadre naturel et apaisant, idéal pour la détente en pleine nature.
const PROJECTS_DATA = [
  {
    id: 1,
    image: project1,
    title: null,
    category: PROJECT_CATEGORIES.POOLS,
    description: null
  },
  {
    id: 2,
    image: project2,
    title: null,
    category: PROJECT_CATEGORIES.POOLS,
    description: null
  },
  {
    id: 3,
    image: project3,
    title: null,
    category: PROJECT_CATEGORIES.POOLS,
    description: null
  },
  {
    id: 4,
    image: project4,
    title: null,
    category: PROJECT_CATEGORIES.POOLS,
    description: null
  },
  {
    id: 5,
    image: project5,
    title: null,
    category: PROJECT_CATEGORIES.LANDSCAPES,
    description: null
  },
  {
    id: 6,
    image: landscape1,
    title: null,
    category: PROJECT_CATEGORIES.LANDSCAPES,
    description: null
  },
  {
    id: 7,
    image: landscape2,
    title: null,
    category: PROJECT_CATEGORIES.LANDSCAPES,
    description: null
  },
  {
    id: 8,
    image: landscape3,
    title: null,
    category: PROJECT_CATEGORIES.LANDSCAPES,
    description: null
  },
  {
    id: 9,
    image: landscape4,
    title: null,
    category: PROJECT_CATEGORIES.LANDSCAPES,
    description: null
  },
  {
    id: 10,
    image: landscape5,
    title: null,
    category: PROJECT_CATEGORIES.LANDSCAPES,
    description: null
  },
  {
    id: 11,
    image: pool1,
    title: null,
    category: PROJECT_CATEGORIES.POOLS,
    description: null
  },
  {
    id: 12,
    image: pool2,
    title: null,
    category: PROJECT_CATEGORIES.POOLS,
    description: null
  },
  {
    id: 13,
    image: pool3,
    title: null,
    category: PROJECT_CATEGORIES.POOLS,
    description: null
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
        <img src={project.image} alt={project.title || "Image du projet"} />
      </div>
      {(project.title || project.description) && (
        <div className="project-content">
          {project.title && <h3>{project.title}</h3>}
          {project.description && <p>{project.description}</p>}
        </div>
      )}
    </div>
  </motion.div>
);

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
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
          <div 
            className="modal project-modal show" 
            style={{ display: 'block' }}
            onClick={() => setShowModal(false)}
          >
            <div 
              className="modal-dialog modal-lg modal-dialog-centered"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-content">
                <div className="modal-body">
                  <button className="modal-close" onClick={() => setShowModal(false)}>
                    <i className="fas fa-times"></i>
                  </button>
                  <div className="modal-image">
                    <img src={selectedProject.image} alt={selectedProject.title || "Image du projet"} />
                  </div>
                  {(selectedProject.title || selectedProject.description) && (
                    <div className="modal-description">
                      {selectedProject.title && <h3>{selectedProject.title}</h3>}
                      {selectedProject.description && <p>{selectedProject.description}</p>}
                    </div>
                  )}
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