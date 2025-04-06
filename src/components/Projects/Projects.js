import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import './projects.scss';

// Import project images
import project1 from '../../assets/img/pool1.jpg';
import project2 from '../../assets/img/pool2.jpg';
import project3 from '../../assets/img/pool3.jpg';
import project4 from '../../assets/img/divers/divers-pool1.jpg';
import project5 from '../../assets/img/landscape3.jpg';
import project6 from '../../assets/img/divers/divers-landscape2.jpg';
import projectImage1 from '../../assets/img/divers/projet/1.jpg';
import projectImage2 from '../../assets/img/divers/projet/2.jpg';
import projectImage3 from '../../assets/img/divers/projet/3.jpg';
import projectImage4 from '../../assets/img/divers/projet/4.jpg';
import projectImage5 from '../../assets/img/divers/projet/5.jpg';
import projectImage6 from '../../assets/img/divers/projet/6.jpg';

const PROJECT_CATEGORIES = {
  ALL: '*',
  POOLS: 'first',
  LANDSCAPES: 'second'
};

const PROJECTS_DATA = [
  {
    id: 1,
    image: project1,
    title: null,
    description: null,
    category: PROJECT_CATEGORIES.POOLS
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
    image: project6,
    title: null,
    category: PROJECT_CATEGORIES.LANDSCAPES,
    description: null
  },
  {
    id: 7,
    image: projectImage2,
    title: null,
    category: PROJECT_CATEGORIES.LANDSCAPES,
    description: null
  },
  {
    id: 8,
    image: projectImage4,
    title: null,
    category: PROJECT_CATEGORIES.LANDSCAPES,
    description: null
  },
  {
    id: 9,
    image: projectImage6,
    title: null,
    category: PROJECT_CATEGORIES.LANDSCAPES,
    description: null
  }
];
const ProjectCard = ({ project, onViewClick, isMobile }) => {
  const hasContent = project.title && project.description;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div 
        className={`portfolio-inner rounded ${hasContent ? '' : 'no-content'}`} 
        onClick={() => !isMobile && onViewClick(project)}
      >
        <img className="img-fluid" src={project.image} alt={project.title || "Project image"} />
        {hasContent && (
          <div className="portfolio-text">
            <h4 className="text-white mb-4">{project.title}</h4>
            <p className="text-white mb-3">{project.description}</p>
            {!isMobile && (
              <div className="d-flex">
                <Button
                  variant="outline-light"
                  className="btn-lg-square rounded-circle mx-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    onViewClick(project);
                  }}
                  aria-label={`Voir ${project.title} en grand format`}
                >
                  <i className="fa fa-eye"></i>
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string.isRequired
  }).isRequired,
  onViewClick: PropTypes.func.isRequired,
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

function Projects() {
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

  const handleViewClick = (project) => {
    if (!isMobile) {
      setSelectedProject(project);
      setShowModal(true);
    }
  };

  return (
    <Container fluid className="py-5">
      <Container>
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "500px"}}>
          <p className="fs-5 fw-bold text-primary">Notre galerie</p>
          <h1 className="display-5 mb-3">Piscines et Jardins réalisés</h1>
        </div>
        
        <Row className="justify-content-center mb-3">
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
                  onViewClick={handleViewClick}
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
        <Link to="/projects" className="btn btn-primary p-4 d-block mx-auto">En voir plus</Link>
      </Container>
    </Container>
  );
}

export default Projects; 