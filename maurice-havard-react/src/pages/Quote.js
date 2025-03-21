import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { WOW } from 'wowjs';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'wowjs/css/libs/animate.css';

function Quote() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const projectFromUrl = searchParams.get('project');
    const form = useRef();

    useEffect(() => {
        new WOW().init();
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            EMAILJS_CONFIG.SERVICE_ID,
            EMAILJS_CONFIG.TEMPLATE_IDS.QUOTE,
            form.current,
            EMAILJS_CONFIG.PUBLIC_KEY
        )
            .then((result) => {
                console.log(result.text);
                alert('Demande de devis envoyée avec succès !');
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
                                <Form ref={form} onSubmit={sendEmail}>
                                    <Row className="g-3">
                                        <Col sm={6}>
                                            <Form.Floating>
                                                <Form.Control
                                                    type="text"
                                                    name="user_name"
                                                    placeholder="Votre Nom"
                                                    required
                                                />
                                                <Form.Label>Votre Nom</Form.Label>
                                            </Form.Floating>
                                        </Col>
                                        <Col sm={6}>
                                            <Form.Floating>
                                                <Form.Control
                                                    type="email"
                                                    name="user_email"
                                                    placeholder="Votre Email"
                                                    required
                                                />
                                                <Form.Label>Votre Email</Form.Label>
                                            </Form.Floating>
                                        </Col>
                                        <Col sm={6}>
                                            <Form.Floating>
                                                <Form.Control
                                                    type="text"
                                                    name="phone"
                                                    placeholder="Votre Téléphone"
                                                    required
                                                />
                                                <Form.Label>Votre Téléphone</Form.Label>
                                            </Form.Floating>
                                        </Col>
                                        <Col sm={6}>
                                            <Form.Floating>
                                                <Form.Select
                                                    name="service"
                                                    defaultValue={projectFromUrl || ""}
                                                    required
                                                >
                                                    <option value="">Sélectionnez un service</option>
                                                    <option value="Aménagement Paysager">Aménagement Paysager</option>
                                                    <option value="Études et Plans">Études et Plans</option>
                                                    <option value="Maçonnerie Paysagère">Maçonnerie Paysagère</option>
                                                    <option value="Entretien des Espaces Verts">Entretien des Espaces Verts</option>
                                                    <option value="Élagage et Taille">Élagage et Taille</option>
                                                    <option value="Création de Piscines">Création de Piscines</option>
                                                </Form.Select>
                                                <Form.Label>Type de Service</Form.Label>
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
                                                <Form.Label>Message</Form.Label>
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