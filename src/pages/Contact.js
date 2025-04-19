import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { WOW } from 'wowjs';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useModal } from '../context/ModalContext';
import 'wowjs/css/libs/animate.css';
import alternativeDecoration from '../assets/img/divers/divers-landscape6.jpg';

function Contact() {
  const form = useRef();
  const { setModal } = useModal();
  const [validated, setValidated] = useState(false);
  const [contactError, setContactError] = useState('');
  const [invalidFields, setInvalidFields] = useState({ email: false, phone: false });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    new WOW().init();
  }, []);

  useLayoutEffect(() => {
    if (!formSubmitted) {
      window.scrollTo(0, 0, { behavior: 'smooth' });
    }
  });

  const sendEmail = (e) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    setValidated(true);
    setContactError('');
    setInvalidFields({ email: false, phone: false });
    setFormSubmitted(true);

    // Check if at least one contact method is provided
    const email = formElement.querySelector('[name="email"]').value;
    const phone = formElement.querySelector('[name="phone"]').value;
    
    if (!email && !phone) {
      setContactError('Veuillez fournir au moins un moyen de contact (email ou téléphone)');
      setInvalidFields({ email: true, phone: true });
      return;
    }

    if (!formElement.checkValidity()) {
      e.stopPropagation();
      return;
    }

    console.log("EMAILJS_CONFIG", EMAILJS_CONFIG)
    emailjs.sendForm(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_IDS.CONTACT,
      form.current,
      EMAILJS_CONFIG.PUBLIC_KEY
    )
      .then((result) => {
        setModal(
          'Message envoyé !',
          'Votre demande de contact à Maurice HAVARD a bien été envoyée avec succès.',
          'success'
        );
        form.current.reset();
        setValidated(false);
        setInvalidFields({ email: false, phone: false });
        setFormSubmitted(false);
      }, (error) => {
        console.error("Error sending email from quote:", error);
        setModal(
          "Erreur d'envoi",
          "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer ou nous contacter directement par téléphone au 06.76.97.89.86 ou par email à l'adresse mauricehavard99@gmail.com",
          'error'
        );
        setFormSubmitted(false);
      });
  };

  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid page-header py-5 mb-5">
        <Container className="text-center py-5">
          <h1 className="display-3 text-white mb-4 animated fadeIn">Contactez-nous</h1>
          <nav aria-label="breadcrumb animated fadeIn">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Contact</li>
            </ol>
          </nav>
        </Container>
      </div>
      {/* Page Header End */}

      {/* Contact Start */}
      <Container fluid className="py-5">
        <Container>
          <Row className="g-5">
            <Col lg={6} className="wow fadeIn" data-wow-delay="0.05s">
              <p className="fs-5 fw-bold text-primary">Contact</p>
              <h1 className="display-5 mb-5">Si vous avez des questions, n'hésitez pas à contacter Maurice HAVARD</h1>
              <p className="mb-4">Maurice HAVARD est à votre disposition pour répondre à toutes vos questions concernant ses services d'aménagement paysager et de création de piscines.</p>
              <Form ref={form} onSubmit={sendEmail} noValidate validated={validated}>
                <Row className="g-3">
                  <Col xs={12}>
                    <Form.Floating>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Votre prénom et nom"
                        required
                      />
                      <Form.Label>Votre prénom et nom</Form.Label>
                      <Form.Control.Feedback type="invalid">
                        Veuillez entrer votre prénom et nom
                      </Form.Control.Feedback>
                    </Form.Floating>
                  </Col>
                  <Col md={6}>
                    <Form.Floating>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Votre adresse email"
                        isInvalid={invalidFields.email}
                      />
                      <Form.Label>Votre adresse email</Form.Label>
                      <Form.Control.Feedback type="invalid">
                        Veuillez entrer une adresse email valide
                      </Form.Control.Feedback>
                    </Form.Floating>
                  </Col>
                  <Col md={6}>
                    <Form.Floating>
                      <Form.Control
                        type="tel"
                        pattern="^[0-9+\-\.\s]+$"
                        name="phone"
                        placeholder="Votre numéro de téléphone"
                        isInvalid={invalidFields.phone}
                      />
                      <Form.Label>Votre numéro de téléphone</Form.Label>
                      <Form.Control.Feedback type="invalid">
                        Veuillez entrer un numéro de téléphone valide
                      </Form.Control.Feedback>
                    </Form.Floating>
                  </Col>
                  {contactError && (
                    <Col xs={12}>
                      <div className="text-danger mb-2">{contactError}</div>
                    </Col>
                  )}
                  <Col xs={12}>
                    <Form.Floating>
                      <Form.Control
                        type="text"
                        name="subject"
                        placeholder="Sujet de votre demande de contact"
                        required
                      />
                      <Form.Label>Sujet de votre demande de contact</Form.Label>
                      <Form.Control.Feedback type="invalid">
                        Veuillez entrer le sujet de votre demande
                      </Form.Control.Feedback>
                    </Form.Floating>
                  </Col>
                  <Col xs={12}>
                    <Form.Floating>
                      <Form.Control
                        as="textarea"
                        name="message"
                        placeholder="Laissez votre message ici"
                        style={{height: "100px"}}
                        required
                      />
                      <Form.Label>Votre message</Form.Label>
                      <Form.Control.Feedback type="invalid">
                        Veuillez entrer votre message
                      </Form.Control.Feedback>
                    </Form.Floating>
                  </Col>
                  <Col xs={12}>
                    <Button variant="primary" type="submit" className="py-3 px-4">
                      Envoyer
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col lg={6}>
              <div className="alternative-decoration rounded overflow-hidden h-100 d-none d-lg-block" style={{ width: "80%", margin: "0 auto" }}>
                <img 
                  src={alternativeDecoration} 
                  alt="paysage" 
                  className="w-100 h-100 object-fit-cover" 
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </Col>
            {/* Google Maps */}
            {/* <Col lg={6} className="wow fadeIn" data-wow-delay="0.5s" style={{ minHeight: "450px" }}>
              <div className="position-relative rounded overflow-hidden h-100">
                <iframe 
                  className="position-relative w-100 h-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2875.0445559444437!2d0.62718!3d43.8745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a98d7b91415555%3A0x406f69c2f411a50!2sLauzit%2C%2032500%20Pauilhac!5e0!3m2!1sfr!2sfr!4v1709912345678!5m2!1sfr!2sfr"
                  frameBorder="0" 
                  style={{ minHeight: "450px", border: 0 }} 
                  allowFullScreen="" 
                  aria-hidden="false"
                  tabIndex="0"
                  title="Google Maps"
                ></iframe>
              </div>
            </Col> */}
          </Row>
        </Container>
      </Container>
      {/* Contact End */}
    </>
  );
}

export default Contact; 