import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';

function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  const services = [
    {
      image: 'img/service-1.jpg',
      icon: 'img/icon/icon-3.png',
      title: 'Aménagement Paysager',
      description: "Transformez votre espace extérieur avec nos services d'aménagement paysager experts. Nous créons des paysages magnifiques et durables qui valorisent votre propriété.",
      delay: '0'
    },
    {
      image: 'img/service-2.jpg',
      icon: 'img/icon/icon-6.png',
      title: 'Études et Plans',
      description: 'Conception et planification détaillées de votre projet paysager, incluant les plans techniques, les études de faisabilité et les propositions d\'aménagement.',
      delay: '0'
    },
    {
      image: 'img/service-3.jpg',
      icon: 'img/icon/icon-5.png',
      title: 'Maçonnerie Paysagère',
      description: 'Réalisation de tous travaux de maçonnerie paysagère : murets, escaliers, terrasses, allées, bordures et autres éléments structurants pour votre jardin.',
      delay: '0'
    },
    {
      image: 'img/service-4.jpg',
      icon: 'img/icon/icon-4.png',
      title: 'Entretien des Espaces Verts',
      description: 'Services réguliers d\'entretien pour maintenir la beauté de votre jardin tout au long de l\'année, incluant la tonte, le désherbage et les soins saisonniers.',
      delay: '0'
    },
    {
      image: 'img/service-5.jpg',
      icon: 'img/icon/icon-8.png',
      title: 'Élagage et Taille',
      description: 'Services professionnels d\'élagage et de taille pour maintenir la santé et la beauté de vos arbres et arbustes, assurant leur croissance optimale.',
      delay: '0'
    },
    {
      image: 'img/service-6.jpg',
      icon: 'img/icon/icon-2.png',
      title: 'Création de Piscines',
      description: 'Conception et réalisation de piscines sur mesure, intégrant parfaitement votre projet dans l\'aménagement global de votre jardin.',
      delay: '0'
    }
  ];

  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
          <h1 className="display-3 text-white mb-4 animated slideInDown">Nos Services</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Services</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}

      {/* Service Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto wow fadeInUp" data-aos="fade-up" data-aos-delay="100" style={{maxWidth: "500px"}}>
            <p className="fs-5 fw-bold text-primary">Nos Services</p>
            <h1 className="display-5 mb-5">Services Que Nous Vous Proposons</h1>
          </div>
          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6 wow fadeIn" data-aos="fade-in" data-aos-delay={service.delay}>
                <div className="service-item rounded d-flex h-100">
                  <div className="service-img rounded">
                    <img className="img-fluid" src={service.image} alt={service.title} />
                  </div>
                  <div className="service-text rounded p-5">
                    <div className="btn-square rounded-circle mx-auto mb-3">
                      <img className="img-fluid" src={service.icon} alt="Icône" />
                    </div>
                    <h4 className="mb-3">{service.title}</h4>
                    <p className="mb-4">{service.description}</p>
                    <Link to="/quote" className="btn btn-sm btn-hover">
                      <i className="fa fa-plus text-primary me-2"></i>Devis Gratuit
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Service End */}
    </>
  );
}

export default Services; 