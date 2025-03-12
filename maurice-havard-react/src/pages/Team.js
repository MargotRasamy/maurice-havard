import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';

function Team() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  const teamMembers = [
    {
      image: 'img/team-1.jpg',
      name: 'Maurice HAVARD',
      position: 'Fondateur',
      delay: '100',
      social: {
        facebook: '#',
        linkedin: '#',
        instagram: '#'
      }
    },
    {
      image: 'img/team-2.jpg',
      name: 'Jean DUPONT',
      position: 'Chef d\'Équipe Paysagiste',
      delay: '300',
      social: {
        facebook: '#',
        linkedin: '#',
        instagram: '#'
      }
    },
    {
      image: 'img/team-3.jpg',
      name: 'Marie MARTIN',
      position: 'Architecte Paysagiste',
      delay: '500',
      social: {
        facebook: '#',
        linkedin: '#',
        instagram: '#'
      }
    }
  ];

  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
          <h1 className="display-3 text-white mb-4 animated slideInDown">Notre Équipe</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Notre Équipe</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}

      {/* Team Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto wow fadeInUp" data-aos="fade-up" data-aos-delay="100" style={{maxWidth: "500px"}}>
            <p className="fs-5 fw-bold text-primary">Notre Équipe</p>
            <h1 className="display-5 mb-5">Une Équipe Expérimentée et Dévouée</h1>
          </div>
          <div className="row g-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-lg-4 col-md-6 wow fadeInUp" data-aos="fade-up" data-aos-delay={member.delay}>
                <div className="team-item rounded">
                  <img className="img-fluid" src={member.image} alt={member.name} />
                  <div className="team-text">
                    <h4 className="mb-0">{member.name}</h4>
                    <p className="text-primary">{member.position}</p>
                    <div className="team-social d-flex">
                      <a className="btn btn-square rounded-circle me-2" href={member.social.facebook}>
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a className="btn btn-square rounded-circle me-2" href={member.social.linkedin}>
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a className="btn btn-square rounded-circle me-2" href={member.social.instagram}>
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Team End */}
    </>
  );
}

export default Team; 