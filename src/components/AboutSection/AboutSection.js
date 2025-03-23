import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { WOW } from 'wowjs';
import './about-section.scss';

// Import images
import landscape1 from '../../assets/img/landscape1.jpg';
import landscape2 from '../../assets/img/landscape2.jpg';

function AboutSection() {
    return (
        <Container fluid className="about-section py-5 bg-very-light">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6} className="wow fadeInLeft" data-wow-delay="0.1s">
                        <div className="about-content">
                            <p className="fs-5 fw-bold text-primary">À propos de nous</p>
                            <h1 className="display-5 mb-4">Maurice Havard, votre expert en aménagement paysager depuis 1971</h1>
                            <p className="mb-4">Depuis plus de 50 ans, nous créons et entretenons des espaces verts exceptionnels. Notre expertise en aménagement paysager, création de piscines et entretien des jardins fait de nous un partenaire de confiance pour tous vos projets d'extérieur.</p>
                            <div className="d-flex align-items-center mb-4">
                                <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                                    <i className="fa fa-check text-primary"></i>
                                </div>
                                <div className="ms-3">
                                    <h5 className="mb-0">Expertise reconnue</h5>
                                    <p className="mb-0">Plus de 50 ans d'expérience</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-4">
                                <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                                    <i className="fa fa-users text-primary"></i>
                                </div>
                                <div className="ms-3">
                                    <h5 className="mb-0">Équipe qualifiée</h5>
                                    <p className="mb-0">Professionnels passionnés</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                                    <i className="fa fa-award text-primary"></i>
                                </div>
                                <div className="ms-3">
                                    <h5 className="mb-0">Qualité garantie</h5>
                                    <p className="mb-0">Satisfaction client assurée</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className="wow fadeInRight" data-wow-delay="0.3s">
                        <div className="about-images">
                            <div className="image-wrapper mb-4">
                                <img src={landscape1} alt="Aménagement paysager" className="img-fluid rounded" />
                            </div>
                            <div className="image-wrapper">
                                <img src={landscape2} alt="Création de jardin" className="img-fluid rounded" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default AboutSection; 