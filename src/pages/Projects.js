import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import ProjectShowcase from '../components/ProjectShowcase/ProjectShowcase';
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

     <ProjectShowcase />
    </>
  );
}

export default Projects; 