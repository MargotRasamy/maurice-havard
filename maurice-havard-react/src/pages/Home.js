import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { WOW } from 'wowjs';
import 'wowjs/css/libs/animate.css';

// Import images
import carousel1 from '../assets/img/home.jpg';
import carousel2 from '../assets/img/home2.jpg';

// Import components
import Projects from '../components/Projects';

function Home() {
  const [currentYear] = useState(new Date().getFullYear());
  const yearsExperience = currentYear - 1971;

  useEffect(() => {
    new WOW().init();
  }, []);

  const services = [
    {
      image: "/img/service-1.jpg",
      icon: "/img/icon/icon-3.png",
      title: "Aménagement Paysager",
      description: "Création et aménagement de jardins sur mesure. Conception d'espaces verts harmonieux et durables. Mise en valeur de votre extérieur avec des solutions adaptées à vos envies et à votre terrain.",
      delay: "0.1s",
    },
    {
      image: "/img/service-2.jpg",
      icon: "/img/icon/icon-6.png",
      title: "Études et Plans",
      description: "Réalisation d'études détaillées et de plans d'aménagement personnalisés. Analyse approfondie de votre terrain et de vos besoins pour créer un projet cohérent et réalisable. Conseils experts pour optimiser votre espace extérieur.",
      delay: "0.3s",
    },
    {
      image: "/img/service-3.jpg",
      icon: "/img/icon/icon-5.png",
      title: "Maçonnerie Paysagère",
      description: "Construction d'éléments en pierre et maçonnerie pour structurer et embellir votre jardin. Réalisation de murets, escaliers, terrasses et allées. Travail soigné avec des matériaux de qualité pour un résultat durable.",
      delay: "0.5s",
    },
    {
      image: "/img/service-4.jpg",
      icon: "/img/icon/icon-4.png",
      title: "Entretien des Espaces Verts",
      description: "Entretien régulier et professionnel de vos espaces verts. Tonte, taille des haies, désherbage et soins des végétaux. Suivi personnalisé pour maintenir la beauté de votre jardin toute l'année.",
      delay: "0.1s",
    },
    {
      image: "/img/service-5.jpg",
      icon: "/img/icon/icon-8.png",
      title: "Élagage et Taille",
      description: "Élagage professionnel et taille raisonnée de vos arbres et arbustes. Intervention respectueuse pour favoriser la santé et la croissance des végétaux. Expertise dans la gestion des hauteurs et l'entretien des formes.",
      delay: "0.3s",
    },
    {
      image: "/img/service-6.jpg",
      icon: "/img/icon/icon-2.png",
      title: "Création de Piscines",
      description: "Conception et réalisation de piscines sur mesure. Installation professionnelle avec des matériaux de qualité. Intégration harmonieuse dans votre espace extérieur pour créer un lieu de détente unique.",
      delay: "0.5s",
    },
  ];

  return (
    <>
      {/* Carousel Start */}
      <div className="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src={carousel1} alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <h1 className="display-1 text-white mb-5 animated slideInDown">Piscines et Jardins depuis 1971</h1>
                      <Link to="/about" className="btn btn-primary py-sm-3 px-sm-4">Explorer</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src={carousel2} alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7">
                      <h1 className="display-1 text-white mb-5 animated slideInDown">Piscines et Jardins depuis 1971</h1>
                      <Link to="/about" className="btn btn-primary py-sm-3 px-sm-4">Explorer</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Précédent</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Suivant</span>
          </button>
        </div>
      </div>
      {/* Carousel End */}

      {/* Top Feature Start */}
      <div className="container-fluid top-feature py-5 pt-lg-0">
        <div className="container py-5 pt-lg-0">
          <div className="row gx-0">
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div className="bg-white shadow d-flex align-items-center h-100 px-5" style={{minHeight: "160px"}}>
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                    <i className="fa fa-check text-primary"></i>
                  </div>
                  <div className="ps-3">
                    <h4>Devis gratuit</h4>
                    <span>Estimation détaillée et personnalisée</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
              <div className="bg-white shadow d-flex align-items-center h-100 px-5" style={{minHeight: "160px"}}>
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                    <i className="fa fa-users text-primary"></i>
                  </div>
                  <div className="ps-3">
                    <h4>Équipe qualifiée</h4>
                    <span>Professionnels expérimentés</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
              <div className="bg-white shadow d-flex align-items-center h-100 px-5" style={{minHeight: "160px"}}>
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                    <i className="fa fa-phone text-primary"></i>
                  </div>
                  <div className="ps-3">
                    <h4>Service client</h4>
                    <span>À votre écoute</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Top Feature End */}

      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-end">
            <div className="col-lg-3 col-md-5 wow fadeIn" data-wow-delay="0.1s">
              <img className="img-fluid rounded" data-wow-delay="0.1s" src="/img/about.jpg" alt="About" />
            </div>
            <div className="col-lg-6 col-md-7 wow fadeIn" data-wow-delay="0.3s">
              <h1 className="display-1 text-primary mb-0">{yearsExperience}</h1>
              <p className="text-primary mb-4">Années d'expérience</p>
              <h1 className="display-5 mb-4">Paysagiste (entreprise de parcs et jardins)</h1>
              <p className="mb-4">Créateur et concepteur de jardins depuis 1971</p>
              <Link to="/about" className="btn btn-primary py-3 px-4">Explorer</Link>
            </div>
            <div className="col-lg-3 col-md-12 wow fadeIn" data-wow-delay="0.5s">
              <div className="row g-5">
                <div className="col-12 col-sm-6 col-lg-12">
                  <div className="border-start ps-4">
                    <i className="fa fa-award fa-3x text-primary mb-3"></i>
                    <h4 className="mb-3">Expertise reconnue</h4>
                    <span>Plus de 50 ans d'expérience</span>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-12">
                  <div className="border-start ps-4">
                    <i className="fa fa-users fa-3x text-primary mb-3"></i>
                    <h4 className="mb-3">Équipe qualifiée</h4>
                    <span>Professionnels passionnés</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Facts Start */}
      <div className="container-fluid facts my-5 py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
              <h1 className="display-4 text-white" data-toggle="counter-up">52</h1>
              <span className="fs-5 fw-semi-bold text-white">Années d'expérience</span>
            </div>
            <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
              <h1 className="display-4 text-white" data-toggle="counter-up">1000+</h1>
              <span className="fs-5 fw-semi-bold text-white">Projets réalisés</span>
            </div>
            <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
              <h1 className="display-4 text-white" data-toggle="counter-up">15</h1>
              <span className="fs-5 fw-semi-bold text-white">Professionnels qualifiés</span>
            </div>
            <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
              <h1 className="display-4 text-white" data-toggle="counter-up">98%</h1>
              <span className="fs-5 fw-semi-bold text-white">Clients satisfaits</span>
            </div>
          </div>
        </div>
      </div>
      {/* Facts End */}

      {/* Features Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <p className="fs-5 fw-bold text-primary">Pourquoi nous choisir</p>
              <h1 className="display-5 mb-4">Notre engagement pour votre satisfaction</h1>
              <p className="mb-4">Depuis plus de 50 ans, nous mettons notre expertise et notre passion au service de vos projets d'aménagement paysager. Notre équipe qualifiée s'engage à vous offrir des solutions personnalisées et un service de qualité.</p>
              <Link to="/about" className="btn btn-primary py-3 px-4">En savoir plus</Link>
            </div>
            <div className="col-lg-6">
              <div className="row g-4 align-items-center">
                <div className="col-md-6">
                  <div className="row g-4">
                    <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                      <div className="text-center rounded py-5 px-4" style={{boxShadow: "0 0 45px rgba(0,0,0,.08)"}}>
                        <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{width: "90px", height: "90px"}}>
                          <i className="fa fa-check fa-3x text-primary"></i>
                        </div>
                        <h4 className="mb-0">Satisfaction garantie</h4>
                      </div>
                    </div>
                    <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                      <div className="text-center rounded py-5 px-4" style={{boxShadow: "0 0 45px rgba(0,0,0,.08)"}}>
                        <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{width: "90px", height: "90px"}}>
                          <i className="fa fa-users fa-3x text-primary"></i>
                        </div>
                        <h4 className="mb-0">Équipe experte</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 wow fadeIn" data-wow-delay="0.7s">
                  <div className="text-center rounded py-5 px-4" style={{boxShadow: "0 0 45px rgba(0,0,0,.08)"}}>
                    <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{width: "90px", height: "90px"}}>
                      <i className="fa fa-tools fa-3x text-primary"></i>
                    </div>
                    <h4 className="mb-0">Services complets</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features End */}

      {/* Service Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "500px"}}>
            <p className="fs-5 fw-bold text-primary">Nos Services</p>
            <h1 className="display-5 mb-5">Piscines et Jardins</h1>
          </div>
          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={service.delay}>
                <div className="service-item rounded d-flex h-100">
                  <div className="service-img rounded">
                    <img className="img-fluid" src={service.image} alt={service.title} />
                  </div>
                  <div className="service-text rounded p-5">
                    <div className="btn-square rounded-circle mx-auto mb-3">
                      <img className="img-fluid" src={service.icon} alt="Icon" />
                    </div>
                    <h4 className="mb-3">{service.title}</h4>
                    <p className="mb-4">{service.description}</p>
                    <Link to="/services" className="btn btn-sm">
                      <i className="fa fa-plus text-primary me-2"></i>En savoir plus
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Service End */}

      {/* Quote Start */}
      <div className="container-fluid quote my-5 py-5" data-image-src="../assets/img/carousel-1.jpg">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="bg-white rounded p-4 p-sm-5 wow fadeIn" data-wow-delay="0.5s">
                <h1 className="display-5 text-center mb-5">Demander un devis gratuit</h1>
                <form>
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input type="text" className="form-control bg-light border-0" id="name" placeholder="Votre Nom Prénom" />
                        <label htmlFor="name">Votre Nom Prénom</label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input type="email" className="form-control bg-light border-0" id="email" placeholder="Votre email" />
                        <label htmlFor="email">Votre email</label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input type="tel" className="form-control bg-light border-0" id="phone" placeholder="Votre téléphone" />
                        <label htmlFor="phone">Votre téléphone</label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <select className="form-select bg-light border-0" id="service">
                          <option value="">Choisir un service</option>
                          <option value="Aménagement Paysager">Aménagement Paysager</option>
                          <option value="Études et Plans">Études et Plans</option>
                          <option value="Maçonnerie Paysagère">Maçonnerie Paysagère</option>
                          <option value="Entretien des Espaces Verts">Entretien des Espaces Verts</option>
                          <option value="Élagage et Taille">Élagage et Taille</option>
                          <option value="Création de Piscines">Création de Piscines</option>
                        </select>
                        <label htmlFor="service">Type de service</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea className="form-control bg-light border-0" placeholder="Votre message" id="message" style={{height: "100px"}}></textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12 text-center">
                      <button className="btn btn-primary py-3 px-4" type="submit">Envoyer</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Quote End */}

      {/* Projects Section */}
      <Projects />
    </>
  );
}

export default Home; 