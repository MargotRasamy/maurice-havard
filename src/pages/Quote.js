import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { WOW } from 'wowjs';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useModal } from '../context/ModalContext';
import 'wowjs/css/libs/animate.css';

function Quote() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const projectFromUrl = searchParams.get('project');
    const form = useRef();
    const { setModal } = useModal();
    const [validated, setValidated] = useState(false);

    useEffect(() => {
        new WOW().init();
    }, []);

    useLayoutEffect(() => {
        window.scrollTo(0, 0, { behavior: 'smooth' })
      });

    const sendEmail = (e) => {
        e.preventDefault();
        const formElement = e.currentTarget;
        setValidated(true);

        if (!formElement.checkValidity()) {
            e.stopPropagation();
            return;
        }

        emailjs.sendForm(
            EMAILJS_CONFIG.SERVICE_ID,
            EMAILJS_CONFIG.TEMPLATE_IDS.QUOTE,
            form.current,
            EMAILJS_CONFIG.PUBLIC_KEY
        )
            .then((result) => {
                setModal(
                    'Message envoyé !',
                    'Votre demande de devis a bien été envoyée avec succès.',
                    'success'
                );
                form.current.reset();
                setValidated(false);
            }, (error) => {
                console.error("Error sending email from quote:", error);
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
                    <h1 className="display-3 text-white mb-4 animated slideInDown">Devis Gratuit</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Devis Gratuit</li>
                        </ol>
                    </nav>
                </Container>
            </div>
            {/* Page Header End */}

            {/* Quote Start */}
            <Container fluid className="py-5">
                <Container>
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "500px"}}>
                        <p className="fs-5 fw-bold text-primary">Devis Gratuit</p>
                        <h1 className="display-5 mb-5">Demandez un Devis Gratuit</h1>
                    </div>
                    <Row className="justify-content-center">
                        <Col lg={7}>
                            <div className="bg-light rounded p-4 p-sm-5 wow fadeInUp" data-wow-delay="0.2s">
                                <Form ref={form} onSubmit={sendEmail} noValidate validated={validated}>
                                    <Row className="g-3">
                                        <Col sm={6}>
                                            <Form.Floating>
                                                <Form.Control
                                                    type="text"
                                                    name="name"
                                                    placeholder="Votre Nom"
                                                    required
                                                />
                                                <Form.Label>Votre prénom et nom</Form.Label>
                                                <Form.Control.Feedback type="invalid">
                                                    Veuillez entrer votre prénom et nom
                                                </Form.Control.Feedback>
                                            </Form.Floating>
                                        </Col>
                                        <Col sm={6}>
                                            <Form.Floating>
                                                <Form.Control
                                                    type="email"
                                                    name="email"
                                                    placeholder="Votre Email"
                                                    required
                                                />
                                                <Form.Label>Votre adresse email</Form.Label>
                                                <Form.Control.Feedback type="invalid">
                                                    Veuillez entrer une adresse email valide
                                                </Form.Control.Feedback>
                                            </Form.Floating>
                                        </Col>
                                        <Col sm={6}>
                                            <Form.Floating>
                                                <Form.Control
                                                    type="tel"
                                                    pattern="^[0-9+\-\.\s]+$"
                                                    name="phone"
                                                    placeholder="Votre Téléphone"
                                                    required
                                                />
                                                <Form.Label>Votre numéro de téléphone</Form.Label>
                                                <Form.Control.Feedback type="invalid">
                                                    Uniquement les chiffres et ces caractères sont autorisés : + - .)
                                                </Form.Control.Feedback>
                                            </Form.Floating>
                                        </Col>
                                        <Col sm={6}>
                                            <Form.Floating>
                                                <Form.Control
                                                    type="text"
                                                    name="service"
                                                    placeholder="Type de service"
                                                    required
                                                />
                                                <Form.Label>Quel service souhaitez-vous ?</Form.Label>
                                                <Form.Control.Feedback type="invalid">
                                                    Veuillez entrer le type de service souhaité
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
                                        <Col xs={12} className="text-center">
                                            <Button variant="primary" type="submit" className="py-3 px-4">
                                                Envoyer
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            {/* Quote End */}
        </>
    );
}

export default Quote; 