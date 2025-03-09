import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import project images
import project1 from '../assets/img/project/project-1.jpg';
import project2 from '../assets/img/project/project-2.jpg';
import project3 from '../assets/img/project/project-3.jpg';
import project4 from '../assets/img/project/project-4.jpg';
import project5 from '../assets/img/project/project-5.jpg';
import project6 from '../assets/img/project/project-6.jpg';

function Projects() {
  const [filter, setFilter] = useState('*');
  const [projects] = useState([
    {
      image: project1,
      title: "Aménagement paysager",
      category: "first",
      delay: "0.1s"
    },
    {
      image: project2,
      title: "Création de jardin",
      category: "second",
      delay: "0.3s"
    },
    {
      image: project3,
      title: "Terrasse en bois",
      category: "first",
      delay: "0.5s"
    },
    {
      image: project4,
      title: "Piscine paysagée",
      category: "second",
      delay: "0.1s"
    },
    {
      image: project5,
      title: "Jardin méditerranéen",
      category: "first",
      delay: "0.3s"
    },
    {
      image: project6,
      title: "Espace vert d'entreprise",
      category: "second",
      delay: "0.5s"
    }
  ]);

  const handleFilterClick = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const filteredProjects = projects.filter(project => 
    filter === '*' || project.category === filter
  );

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "500px"}}>
          <p className="fs-5 fw-bold text-primary">Nos Projets</p>
          <h1 className="display-5 mb-5">Découvrez nos réalisations</h1>
        </div>
        <div className="row wow fadeInUp" data-wow-delay="0.3s">
          <div className="col-12 text-center">
            <ul className="list-inline rounded mb-5" id="portfolio-flters">
              <li 
                className={`mx-2 ${filter === '*' ? 'active' : ''}`} 
                onClick={() => handleFilterClick('*')}
              >
                Tous
              </li>
              <li 
                className={`mx-2 ${filter === 'first' ? 'active' : ''}`}
                onClick={() => handleFilterClick('first')}
              >
                Projets terminés
              </li>
              <li 
                className={`mx-2 ${filter === 'second' ? 'active' : ''}`}
                onClick={() => handleFilterClick('second')}
              >
                Projets en cours
              </li>
            </ul>
          </div>
        </div>
        <div className="row g-4 portfolio-container">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className={`col-lg-4 col-md-6 portfolio-item ${project.category} wow fadeInUp ${
                filter !== '*' && project.category !== filter ? 'filtered-out' : ''
              }`}
              data-wow-delay={project.delay}
            >
              <div className="portfolio-inner rounded">
                <img className="img-fluid" src={project.image} alt={project.title} />
                <div className="portfolio-text">
                  <h4 className="text-white mb-4">{project.title}</h4>
                  <div className="d-flex">
                    <Link className="btn btn-lg-square rounded-circle mx-2" to={project.image} data-lightbox="portfolio">
                      <i className="fa fa-eye"></i>
                    </Link>
                    <Link className="btn btn-lg-square rounded-circle mx-2" to={`/quote?project=${project.title}`}>
                      <i className="fa fa-link"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects; 