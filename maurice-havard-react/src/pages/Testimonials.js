import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { WOW } from 'wowjs';
import 'wowjs/css/libs/animate.css';

function Testimonials() {
  useEffect(() => {
    new WOW().init();
  }, []);

  const testimonials = [
    {
      image: 'img/testimonial-1.jpg',
      content: 'Maurice et son équipe ont réalisé un travail exceptionnel dans notre jardin. Leur expertise en aménagement paysager et en création de piscine a transformé notre espace extérieur en un véritable havre de paix.',
      name: 'Marie Dubois',
      profession: 'Propriétaire',
      delay: '0.1s'
    },
    {
      image: 'img/testimonial-2.jpg',
      content: 'Un grand merci à toute l\'équipe pour la transformation de notre espace extérieur. Leur professionnalisme et leur créativité ont dépassé nos attentes. La piscine et le jardin s\'intègrent parfaitement.',
      name: 'Pierre Martin',
      profession: 'Gérant de Propriété',
      delay: '0.3s'
    },
    {
      image: 'img/testimonial-3.jpg',
      content: 'Nous sommes ravis des solutions d\'aménagement proposées pour notre restaurant. L\'équipe a su créer un espace extérieur accueillant qui enchante nos clients. Un travail remarquable !',
      name: 'Sophie Laurent',
      profession: 'Restauratrice',
      delay: '0.5s'
    }
  ];

  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
          <h1 className="display-3 text-white mb-4 animated slideInDown">Témoignages</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Témoignages</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}

      {/* Testimonial Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
              <p className="fs-5 fw-bold text-primary">Témoignages</p>
              <h1 className="display-5 mb-5">Ce que nos clients disent !</h1>
              <p className="mb-4">Découvrez pourquoi nos clients nous font confiance pour leurs projets de piscines et jardins depuis plus de 50 ans. Lisez leurs expériences et découvrez notre engagement pour l'excellence.</p>
              <Link to="/contact" className="btn btn-primary py-3 px-4">Contactez-nous</Link>
            </div>
            <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.5s">
              <div className="row g-4">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="col-md-6">
                    <div className="testimonial-item rounded p-4 p-lg-5 mb-5 wow fadeIn" data-wow-delay={testimonial.delay}>
                      <img className="img-fluid rounded mb-3" src={testimonial.image} alt={testimonial.name} />
                      <p className="fs-5">{testimonial.content}</p>
                      <div className="d-flex align-items-center">
                        <div className="ps-3">
                          <h4 className="mb-1">{testimonial.name}</h4>
                          <span className="text-primary">{testimonial.profession}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
    </>
  );
}

export default Testimonials; 