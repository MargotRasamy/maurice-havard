import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { WOW } from 'wowjs';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useModal } from '../context/ModalContext';
import 'wowjs/css/libs/animate.css';

function Contact() {
  const form = useRef();
  const { setModal } = useModal();

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
        setModal(
          'Message envoyé !',
          'Votre demande de contact à Maurice HAVARD a bien été envoyée avec succès.',
          'success'
        );
        form.current.reset();
      }, (error) => {
        setModal(
          "Erreur d'envoi",
          "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer ou nous contacter directement par téléphone au 06 76 97 89 86 ou par email à l'adresse mauricehavard99@gmail.com",
          'error'
        );
      });
  };

  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <Container className="text-center py-5">
          <h1 className="display-3 text-white mb-4 animated slideInDown">Contactez-nous</h1>
          <nav aria-label="breadcrumb animated slideInDown">
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
            <Col lg={6} className="wow fadeIn" data-wow-delay="0.1s">
              <p className="fs-5 fw-bold text-primary">Contact</p>
              <h1 className="display-5 mb-5">Si vous avez des questions, n'hésitez pas à contacter Maurice HAVARD</h1>
              <p className="mb-4">Maurice HAVARD est à votre disposition pour répondre à toutes vos questions concernant ses services d'aménagement paysager et de création de piscines.</p>
              <Form ref={form} onSubmit={sendEmail}>
                <Row className="g-3">
                  <Col xs={12}>
                    <Form.Floating>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Votre Nom"
                        required
                      />
                      <Form.Label>Votre nom et prénom</Form.Label>
                    </Form.Floating>
                  </Col>
                  <Col md={6}>
                    <Form.Floating>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Votre Email"
                        required
                      />
                      <Form.Label>Votre adresse email</Form.Label>
                    </Form.Floating>
                  </Col>
                  <Col md={6}>
                    <Form.Floating>
                      <Form.Control
                        type="tel"
                        pattern="[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}"
                        name="phone"
                        placeholder="Votre numéro de téléphone"
                        required
                      />
                      <Form.Label>Votre numéro de téléphone</Form.Label>
                    </Form.Floating>
                  </Col>
                  <Col xs={12}>
                    <Form.Floating>
                      <Form.Control
                        type="text"
                        name="subject"
                        placeholder="Sujet de votre demande de contact"
                        required
                      />
                      <Form.Label>Sujet de votre demande de contact</Form.Label>
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
            <Col lg={6} className="wow fadeIn" data-wow-delay="0.5s" style={{ minHeight: "450px" }}>
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
            </Col>
          </Row>
        </Container>
      </Container>
      {/* Contact End */}
    </>
  );
}

export default Contact; 