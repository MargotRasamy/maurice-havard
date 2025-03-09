import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
          <h1 className="display-3 text-white mb-4 animated slideInDown">About Us</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">About</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}

      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-end">
            <div className="col-lg-3 col-md-5 wow fadeInUp" data-aos="fade-up" data-aos-delay="100">
              <img className="img-fluid rounded" src="img/about.jpg" alt="About Us" />
            </div>
            <div className="col-lg-6 col-md-7 wow fadeInUp" data-aos="fade-up" data-aos-delay="300">
              <h1 className="display-1 text-primary mb-0">25</h1>
              <p className="text-primary mb-4">Years of Experience</p>
              <h1 className="display-5 mb-4">We Make Your Home Like A Garden</h1>
              <p className="mb-4">With over two decades of expertise in transforming outdoor spaces, we bring your garden dreams to life. Our dedicated team combines creativity with horticultural knowledge to create stunning, sustainable landscapes that enhance your property's beauty and value.</p>
              <Link to="/services" className="btn btn-primary py-3 px-4">Explore Our Services</Link>
            </div>
            <div className="col-lg-3 col-md-12 wow fadeInUp" data-aos="fade-up" data-aos-delay="500">
              <div className="row g-5">
                <div className="col-12 col-sm-6 col-lg-12">
                  <div className="border-start ps-4">
                    <i className="fa fa-award fa-3x text-primary mb-3"></i>
                    <h4 className="mb-3">Award Winning</h4>
                    <span>Recognized for excellence in landscape design and garden maintenance, with multiple industry awards for our innovative and sustainable approaches.</span>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-12">
                  <div className="border-start ps-4">
                    <i className="fa fa-users fa-3x text-primary mb-3"></i>
                    <h4 className="mb-3">Dedicated Team</h4>
                    <span>Our team of certified professionals is passionate about creating and maintaining beautiful outdoor spaces that exceed your expectations.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Facts Start */}
      <div className="container-fluid facts my-5 py-5" data-parallax="scroll" data-image-src="img/carousel-1.jpg">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-aos="fade-up" data-aos-delay="100">
              <h1 className="display-4 text-white">1234</h1>
              <span className="fs-5 fw-semi-bold text-light">Happy Clients</span>
            </div>
            <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-aos="fade-up" data-aos-delay="300">
              <h1 className="display-4 text-white">1234</h1>
              <span className="fs-5 fw-semi-bold text-light">Gardens Completed</span>
            </div>
            <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-aos="fade-up" data-aos-delay="500">
              <h1 className="display-4 text-white">1234</h1>
              <span className="fs-5 fw-semi-bold text-light">Dedicated Staff</span>
            </div>
            <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-aos="fade-up" data-aos-delay="700">
              <h1 className="display-4 text-white">1234</h1>
              <span className="fs-5 fw-semi-bold text-light">Awards Achieved</span>
            </div>
          </div>
        </div>
      </div>
      {/* Facts End */}

      {/* Team Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto wow fadeInUp" data-aos="fade-up" data-aos-delay="100" style={{maxWidth: "500px"}}>
            <p className="fs-5 fw-bold text-primary">Our Team</p>
            <h1 className="display-5 mb-5">Dedicated & Experienced Team Members</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-aos="fade-up" data-aos-delay="100">
              <div className="team-item rounded">
                <img className="img-fluid" src="img/team-1.jpg" alt="Team Member" />
                <div className="team-text">
                  <h4 className="mb-0">Doris Jordan</h4>
                  <p className="text-primary">Landscape Designer</p>
                  <div className="team-social d-flex">
                    <a className="btn btn-square rounded-circle me-2" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square rounded-circle me-2" href="#"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-square rounded-circle me-2" href="#"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-aos="fade-up" data-aos-delay="300">
              <div className="team-item rounded">
                <img className="img-fluid" src="img/team-2.jpg" alt="Team Member" />
                <div className="team-text">
                  <h4 className="mb-0">Johnny Ramirez</h4>
                  <p className="text-primary">Garden Designer</p>
                  <div className="team-social d-flex">
                    <a className="btn btn-square rounded-circle me-2" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square rounded-circle me-2" href="#"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-square rounded-circle me-2" href="#"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-aos="fade-up" data-aos-delay="500">
              <div className="team-item rounded">
                <img className="img-fluid" src="img/team-3.jpg" alt="Team Member" />
                <div className="team-text">
                  <h4 className="mb-0">Diana Wagner</h4>
                  <p className="text-primary">Senior Gardener</p>
                  <div className="team-social d-flex">
                    <a className="btn btn-square rounded-circle me-2" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square rounded-circle me-2" href="#"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-square rounded-circle me-2" href="#"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}
    </>
  );
}

export default About; 