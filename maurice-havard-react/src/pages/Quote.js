import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { WOW } from 'wowjs';
import 'wowjs/css/libs/animate.css';

function Quote() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const projectFromUrl = searchParams.get('project');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    serviceType: projectFromUrl || '',
    message: ''
  });

  useEffect(() => {
    new WOW().init();
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Quote form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      mobile: '',
      serviceType: '',
      message: ''
    });
  };

  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
          <h1 className="display-3 text-white mb-4 animated slideInDown">Free Quote</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Free Quote</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}

      {/* Quote Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "500px"}}>
            <p className="fs-5 fw-bold text-primary">Free Quote</p>
            <h1 className="display-5 mb-5">Get A Free Quote</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="bg-light rounded p-4 p-sm-5 wow fadeInUp" data-wow-delay="0.2s">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input 
                          type="text" 
                          className="form-control border-0" 
                          id="name" 
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input 
                          type="email" 
                          className="form-control border-0" 
                          id="email" 
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input 
                          type="text" 
                          className="form-control border-0" 
                          id="mobile" 
                          placeholder="Your Mobile"
                          value={formData.mobile}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="mobile">Your Mobile</label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input 
                          type="text" 
                          className="form-control border-0" 
                          id="serviceType" 
                          placeholder="Service Type"
                          value={formData.serviceType}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="serviceType">Service Type</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea 
                          className="form-control border-0" 
                          placeholder="Leave a message here" 
                          id="message" 
                          style={{height: "100px"}}
                          value={formData.message}
                          onChange={handleInputChange}
                        ></textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12 text-center">
                      <button className="btn btn-primary py-3 px-4" type="submit">Submit Now</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Quote End */}
    </>
  );
}

export default Quote; 