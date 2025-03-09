import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { Link } from 'react-router-dom';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const Portfolio = ({ items }) => {
  const [filter, setFilter] = useState('*');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const filteredProjects = filter === '*' 
    ? items 
    : items.filter(project => project.category === filter);

  const openLightbox = (image) => {
    setCurrentImage(image);
    setLightboxOpen(true);
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <AnimatedSection delay={0.1}>
          <div className="text-center mx-auto mb-5" style={{maxWidth: "500px"}}>
            <p className="fs-5 fw-bold text-primary">Nos Projets</p>
            <h1 className="display-5">Découvrez nos réalisations</h1>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="row g-4">
            <div className="col-12 text-center">
              <ul className="list-inline mb-5" id="portfolio-flters">
                <li 
                  className={`btn px-3 pe-4 ${filter === '*' ? 'active' : ''}`}
                  onClick={() => setFilter('*')}
                >
                  Tous
                </li>
                <li 
                  className={`btn px-3 pe-4 ${filter === 'completed' ? 'active' : ''}`}
                  onClick={() => setFilter('completed')}
                >
                  Terminés
                </li>
                <li 
                  className={`btn px-3 pe-4 ${filter === 'ongoing' ? 'active' : ''}`}
                  onClick={() => setFilter('ongoing')}
                >
                  En cours
                </li>
                <li 
                  className={`btn px-3 pe-4 ${filter === 'upcoming' ? 'active' : ''}`}
                  onClick={() => setFilter('upcoming')}
                >
                  À venir
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        <div className="row g-4 portfolio-container">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="col-lg-4 col-md-6 portfolio-item"
              >
                <div className="portfolio-inner rounded">
                  <img 
                    className="img-fluid w-100" 
                    src={project.image} 
                    alt={project.title}
                  />
                  <div className="portfolio-text">
                    <h4 className="text-white mb-4">{project.title}</h4>
                    <div className="d-flex justify-content-center">
                      <button
                        className="btn btn-lg-square btn-outline-light rounded-circle mx-2"
                        onClick={() => openLightbox(project.image)}
                      >
                        <i className="fa fa-eye"></i>
                      </button>
                      <Link 
                        className="btn btn-lg-square btn-outline-light rounded-circle mx-2"
                        to={`/quote?project=${encodeURIComponent(project.title)}`}
                      >
                        <i className="fa fa-link"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={[{ src: currentImage }]}
      />
    </div>
  );
};

export default Portfolio; 