import React, { useState } from 'react';
import PoolImage1 from '../../assets/img/pool1.jpg';
import PoolImage2 from '../../assets/img/pool2.jpg';
import PoolImage3 from '../../assets/img/pool3.jpg';
import PoolImage4 from '../../assets/img/pool4.jpg';
import LandscapeImage1 from '../../assets/img/landscape1.jpg';
import './project-showcase.scss';

const ProjectShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const projects = [
    {
      title: "Piscine Moderne",
      description: "Une piscine contemporaine avec système de nage à contre-courant, intégrant les dernières innovations en matière de filtration et d'éclairage. Le design épuré s'harmonise parfaitement avec l'environnement naturel.",
      image: PoolImage1
    },
    {
      title: "Jardin Méditerranéen",
      description: "Aménagement paysager avec plantes méditerranéennes et oliviers centenaires. Un espace de détente où les parfums de la lavande et du romarin se mêlent aux couleurs chaleureuses du sud.",
      image: PoolImage2
    },
    {
      title: "Terrasse Design",
      description: "Création d'une terrasse en bois exotique avec pergola bioclimatique. Un espace de vie extérieur moderne et fonctionnel, parfait pour les moments de convivialité.",
      image: PoolImage3
    },
    {
      title: "Bassin Ornemental",
      description: "Bassin paysager avec cascade et éclairage LED intégré. Un point d'eau vivant qui apporte sérénité et dynamisme à votre jardin.",
      image: PoolImage4
    },
    {
      title: "Jardin Paysager",
      description: "Création d'un jardin paysager luxuriant avec une harmonie parfaite entre les différents éléments végétaux. Un espace vert structuré qui offre une expérience sensorielle unique à travers ses textures, couleurs et parfums.",
      image: LandscapeImage1
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <>
      <div className="projects-showcase">
        <div className="container">
          <div className="section-title wow fadeInUp" data-aos="fade-in" data-aos-delay="100">
            <h2>Nos Réalisations</h2>
            <p>Découvrez une sélection de nos projets les plus remarquables, où créativité et expertise se rencontrent pour créer des espaces extérieurs exceptionnels.</p>
          </div>
          <div className="row">
            {projects.map((project, index) => (
              <div key={index} className="col-lg-4 col-md-6 wow fadeInUp" data-aos="fade-in" data-aos-delay={100 * (index + 1)}>
                <div className="project-card" onClick={() => handleProjectClick(project)}>
                  <div className="project-image-container">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {showModal && selectedProject && (
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
      {showModal && <div className="modal-backdrop show"></div>}
    </>
  );
};

export default ProjectShowcase; 