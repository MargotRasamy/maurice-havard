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
      title: 'Landscaping',
      description: "Transform your outdoor space with our expert landscaping services. We create beautiful, sustainable landscapes that enhance your property's value and appeal.",
      delay: '100'
    },
    {
      image: 'img/service-2.jpg',
      icon: 'img/icon/icon-6.png',
      title: 'Pruning Plants',
      description: 'Professional pruning services to maintain the health and beauty of your plants, ensuring optimal growth and longevity.',
      delay: '300'
    },
    {
      image: 'img/service-3.jpg',
      icon: 'img/icon/icon-5.png',
      title: 'Irrigation & Drainage',
      description: 'Custom irrigation and drainage solutions to keep your garden healthy and prevent water-related issues.',
      delay: '500'
    },
    {
      image: 'img/service-4.jpg',
      icon: 'img/icon/icon-4.png',
      title: 'Garden Maintenance',
      description: 'Regular maintenance services to keep your garden looking its best throughout the year, including weeding, fertilizing, and seasonal care.',
      delay: '100'
    },
    {
      image: 'img/service-5.jpg',
      icon: 'img/icon/icon-8.png',
      title: 'Green Technology',
      description: 'Innovative eco-friendly solutions for sustainable gardening, including smart irrigation systems and environmentally conscious practices.',
      delay: '300'
    },
    {
      image: 'img/service-6.jpg',
      icon: 'img/icon/icon-2.png',
      title: 'Urban Gardening',
      description: 'Specialized solutions for city dwellers, making the most of limited space with vertical gardens, container gardening, and rooftop gardens.',
      delay: '500'
    }
  ];

  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
          <h1 className="display-3 text-white mb-4 animated slideInDown">Services</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
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
            <p className="fs-5 fw-bold text-primary">Our Services</p>
            <h1 className="display-5 mb-5">Services That We Offer For You</h1>
          </div>
          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6 wow fadeInUp" data-aos="fade-up" data-aos-delay={service.delay}>
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
                    <Link to="/quote" className="btn btn-sm">
                      <i className="fa fa-plus text-primary me-2"></i>Get Quote
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