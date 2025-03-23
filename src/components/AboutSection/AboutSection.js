import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { WOW } from 'wowjs';
import './about-section.scss';

// Import images
import landscape1 from '../../assets/img/vitrine1.jpg';

function AboutSection() {
    return (
        <Container fluid className="about-section py-5 bg-very-light">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6} className="wow fadeInLeft" data-wow-delay="0.1s">
                        <div className="about-content">
                            <p className="fs-5 fw-bold text-primary">À propos de nous</p>
                            <h1 className="display-5 mb-4">Maurice Havard, votre expert en aménagement paysager depuis 1971</h1>
                            <p className="mb-4">
                            Piscines et jardins de A à Z
                            </p>
                            <div className="d-flex align-items-center mb-4">
                                <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                                    <i className="fa fa-check text-primary"></i>
                                </div>
                                <div className="ms-3">
                                    <h5 className="mb-0">Qui fait le jardin ?</h5>
                                    <p className="mb-0">Le jardinier ...</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-4">
                                <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                                    <i className="fa fa-users text-primary"></i>
                                </div>
                                <div className="ms-3">
                                    <h5 className="mb-0">Où est la piscine ?</h5>
                                    <p className="mb-0">Dans le jardin ...</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className="wow fadeInRight" data-wow-delay="0.3s">
                        <div className="about-images">
                            <div className="image-wrapper">
                                <img src={landscape1} alt="Aménagement paysager" className="img-fluid rounded" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default AboutSection; 