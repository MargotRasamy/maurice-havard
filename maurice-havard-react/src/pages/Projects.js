import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';

function Projects() {
  const [filter, setFilter] = useState('*');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  const projects = [
    {
      image: 'img/service-1.jpg',
      title: 'Aménagement Paysager',
      category: 'first',
      delay: '100'
    },
    {
      image: 'img/service-2.jpg',
      title: 'Études et Plans',
      category: 'second',
      delay: '300'
    },
    {
      image: 'img/service-3.jpg',
      title: 'Maçonnerie Paysagère',
      category: 'first',
      delay: '500'
    },
    {
      image: 'img/service-4.jpg',
      title: 'Entretien des Espaces Verts',
      category: 'second',
      delay: '100'
    },
    {
      image: 'img/service-5.jpg',
      title: 'Élagage et Taille',
      category: 'first',
      delay: '300'
    },
    {
      image: 'img/service-6.jpg',
      title: 'Création de Piscines',
      category: 'second',
      delay: '500'
    }
  ];

  const filteredProjects = filter === '*' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
          <h1 className="display-3 text-white mb-4 animated slideInDown">Nos Réalisations</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Réalisations</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}

      {/* Projects Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto wow fadeInUp" data-aos="fade-up" data-aos-delay="100" style={{maxWidth: "500px"}}>
            <p className="fs-5 fw-bold text-primary">Nos Réalisations</p>
            <h1 className="display-5 mb-5">Quelques-unes de Nos Réalisations</h1>
          </div>
          <div className="row wow fadeInUp" data-aos="fade-up" data-aos-delay="300">
            <div className="col-12 text-center">
              <ul className="list-inline rounded mb-5" id="portfolio-flters">
                <li 
                  className={`mx-2 ${filter === '*' ? 'active' : ''}`} 
                  onClick={() => setFilter('*')}
                >
                  Tout
                </li>
                <li 
                  className={`mx-2 ${filter === 'first' ? 'active' : ''}`}
                  onClick={() => setFilter('first')}
                >
                  Projets Terminés
                </li>
                <li 
                  className={`mx-2 ${filter === 'second' ? 'active' : ''}`}
                  onClick={() => setFilter('second')}
                >
                  Projets en Cours
                </li>
              </ul>
            </div>
          </div>
          <div className="row g-4 portfolio-container">
            {filteredProjects.map((project, index) => (
              <div 
                key={index} 
                className={`col-lg-4 col-md-6 portfolio-item ${project.category} wow fadeInUp`}
                data-aos="fade-up"
                data-aos-delay={project.delay}
              >
                <div className="portfolio-inner rounded">
                  <img className="img-fluid" src={project.image} alt={project.title} />
                  <div className="portfolio-text">
                    <h4 className="text-white mb-4">{project.title}</h4>
                    <div className="d-flex">
                      <a className="btn btn-lg-square rounded-circle mx-2" href={project.image} data-lightbox="portfolio">
                        <i className="fa fa-eye"></i>
                      </a>
                      <Link to={`/quote?project=${project.title}`} className="btn btn-lg-square rounded-circle mx-2">
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
      {/* Projects End */}
    </>
  );
}

export default Projects; 