import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { WOW } from 'wowjs';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';
import 'wowjs/css/libs/animate.css';

function Contact() {
  const form = useRef();

  useEffect(() => {
    new WOW().init();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_IDS.CONTACT,
      form.current,
      EMAILJS_CONFIG.PUBLIC_KEY
    )
      .then((result) => {
        console.log(result.text);
        alert('Message envoyé avec succès !');
        form.current.reset();
      }, (error) => {
        console.log(error.text);
        alert('Une erreur est survenue, veuillez réessayer.');
      });
  };

  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
          <h1 className="display-3 text-white mb-4 animated slideInDown">Contactez-nous</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Contact</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}

      {/* Contact Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <p className="fs-5 fw-bold text-primary">Contact</p>
              <h1 className="display-5 mb-5">Si vous avez des questions, n'hésitez pas à nous contacter</h1>
              <p className="mb-4">Nous sommes à votre disposition pour répondre à toutes vos questions concernant nos services d'aménagement paysager et de création de piscines.</p>
              <form ref={form} onSubmit={sendEmail}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        name="user_name"
                        placeholder="Votre Nom" 
                        required 
                      />
                      <label htmlFor="name">Votre Nom</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        name="user_email"
                        placeholder="Votre Email" 
                        required 
                      />
                      <label htmlFor="email">Votre Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input 
                        type="text" 
                        className="form-control" 
                        id="subject" 
                        name="subject"
                        placeholder="Sujet" 
                        required 
                      />
                      <label htmlFor="subject">Sujet</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea 
                        className="form-control" 
                        placeholder="Laissez votre message ici" 
                        id="message"
                        name="message"
                        style={{ height: "100px" }}
                        required
                      ></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary py-3 px-4" type="submit">
                      Envoyer
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{ minHeight: "450px" }}>
              <div className="position-relative rounded overflow-hidden h-100">
                <iframe 
                  className="position-relative w-100 h-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2875.0445559444437!2d0.6271799999999999!3d43.8745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a98d7b91415555%3A0x406f69c2f411a50!2s1%20Lauzit%20du%20Haut%2C%20RN21%2C%2032500%20Pauilhac!5e0!3m2!1sfr!2sfr!4v1616661234567!5m2!1sfr!2sfr"
                  frameBorder="0" 
                  style={{ minHeight: "450px", border: 0 }} 
                  allowFullScreen="" 
                  aria-hidden="false"
                  tabIndex="0"
                  title="Google Maps"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
    </>
  );
}

export default Contact; 