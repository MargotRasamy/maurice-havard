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
      content: 'Their expertise in landscaping transformed our backyard into a stunning oasis. The attention to detail and professional service exceeded our expectations.',
      name: 'Sarah Johnson',
      profession: 'Homeowner',
      delay: '0.1s'
    },
    {
      image: 'img/testimonial-2.jpg',
      content: 'The team at Maurice Havard consistently delivers exceptional garden maintenance services. Their knowledge and dedication have kept our property looking beautiful year-round.',
      name: 'Michael Chen',
      profession: 'Property Manager',
      delay: '0.3s'
    },
    {
      image: 'img/testimonial-3.jpg',
      content: 'We are incredibly pleased with the urban gardening solutions they provided for our limited space. Their innovative approach and sustainable practices are truly remarkable.',
      name: 'Emily Rodriguez',
      profession: 'Restaurant Owner',
      delay: '0.5s'
    }
  ];

  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
          <h1 className="display-3 text-white mb-4 animated slideInDown">Testimonials</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Testimonials</li>
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
              <p className="fs-5 fw-bold text-primary">Testimonials</p>
              <h1 className="display-5 mb-5">What Our Clients Say About Us!</h1>
              <p className="mb-4">Discover why our clients trust us with their landscaping and gardening needs. Read their experiences and learn about our commitment to excellence in every project we undertake.</p>
              <Link to="/contact" className="btn btn-primary py-3 px-4">Contact Us</Link>
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