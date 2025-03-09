import React from 'react';
import { Carousel } from 'react-bootstrap';
import AnimatedSection from './AnimatedSection';

const TestimonialCarousel = ({ testimonials }) => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <AnimatedSection delay={0.1}>
          <div className="text-center mx-auto" style={{maxWidth: "500px"}}>
            <p className="fs-5 fw-bold text-primary">Témoignages</p>
            <h1 className="display-5 mb-5">Ce que disent nos clients</h1>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
          <div className="testimonial-carousel position-relative">
            <Carousel 
              indicators={false} 
              interval={3000}
              className="testimonial-carousel"
              prevIcon={<i className="bi bi-chevron-left"></i>}
              nextIcon={<i className="bi bi-chevron-right"></i>}
            >
              {testimonials?.map((testimonial, index) => (
                <Carousel.Item key={index}>
                  <div className="testimonial-item text-center">
                    <img 
                      className="img-fluid rounded-circle mx-auto mb-4" 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                    />
                    <div className="testimonial-text bg-light text-center rounded p-4 pt-5 mt-n5">
                      <p className="fs-5">{testimonial.comment}</p>
                      <h5 className="mb-1">{testimonial.name}</h5>
                      <span className="fst-italic text-primary">{testimonial.profession}</span>
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default TestimonialCarousel; 