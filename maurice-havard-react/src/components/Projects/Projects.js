import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';

// Import project images
import project1 from '../../assets/img/pool1.jpg';
import project2 from '../../assets/img/pool2.jpg';
import project3 from '../../assets/img/pool3.jpg';
import project4 from '../../assets/img/pool4.jpg';
import project5 from '../../assets/img/landscape3.jpg';
import project6 from '../../assets/img/landscape1.jpg';

const PROJECT_CATEGORIES = {
  ALL: '*',
  POOLS: 'first',
  LANDSCAPES: 'second'
};

const PROJECTS_DATA = [
  {
    id: 1,
    image: project1,
    title: "Aménagement paysager",
    category: PROJECT_CATEGORIES.POOLS,
    description: "Une piscine contemporaine avec système de nage à contre-courant"
  },
  {
    id: 2,
    image: project2,
    title: "Création de jardin",
    category: PROJECT_CATEGORIES.POOLS,
    description: "Un espace de détente où les parfums de la lavande et du romarin se mêlent"
  },
  {
    id: 3,
    image: project3,
    title: "Terrasse en bois",
    category: PROJECT_CATEGORIES.POOLS,
    description: "Une terrasse en bois exotique avec pergola bioclimatique"
  },
  {
    id: 4,
    image: project4,
    title: "Piscine paysagée",
    category: PROJECT_CATEGORIES.POOLS,
    description: "Une piscine intégrée harmonieusement dans son environnement"
  },
  {
    id: 5,
    image: project5,
    title: "Jardin méditerranéen",
    category: PROJECT_CATEGORIES.LANDSCAPES,
    description: "Un jardin méditerranéen avec oliviers centenaires"
  },
  {
    id: 6,
    image: project6,
    title: "Espace vert d'entreprise",
    category: PROJECT_CATEGORIES.LANDSCAPES,
    description: "Un espace vert structuré pour les entreprises"
  }
];

const ProjectCard = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
  >
    <div className="portfolio-inner rounded">
      <img className="img-fluid" src={project.image} alt={project.title} />
      <div className="portfolio-text">
        <h4 className="text-white mb-4">{project.title}</h4>
        <p className="text-white mb-3">{project.description}</p>
        <div className="d-flex">
          <Button
            variant="outline-light"
            className="btn-lg-square rounded-circle mx-2"
            onClick={() => window.open(project.image, '_blank')}
            aria-label={`Voir ${project.title} en grand format`}
          >
            <i className="fa fa-eye"></i>
          </Button>
          <Button
            variant="outline-light"
            className="btn-lg-square rounded-circle mx-2"
            as={Link}
            to={`/quote?project=${encodeURIComponent(project.title)}`}
            aria-label={`Demander un devis pour ${project.title}`}
          >
            <i className="fa fa-link"></i>
          </Button>
        </div>
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
  }).isRequired
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

  const filteredProjects = useMemo(() => 
    PROJECTS_DATA.filter(project => 
      filter === PROJECT_CATEGORIES.ALL || project.category === filter
    ),
    [filter]
  );

  return (
    <Container fluid className="py-5">
      <Container>
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "500px"}}>
          <p className="fs-5 fw-bold text-primary">Nos Projets</p>
          <h1 className="display-5 mb-5">Découvrez nos réalisations</h1>
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
              label="Jardins et paysages"
              isActive={filter === PROJECT_CATEGORIES.LANDSCAPES}
              onClick={() => setFilter(PROJECT_CATEGORIES.LANDSCAPES)}
            />
          </Col>
        </Row>

        <Row className="g-4 portfolio-container">
          <AnimatePresence>
            {filteredProjects.map(project => (
              <Col key={project.id} lg={4} md={6}>
                <ProjectCard project={project} />
              </Col>
            ))}
          </AnimatePresence>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects; 