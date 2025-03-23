import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { WOW } from 'wowjs';
import './engagement.scss';

function Engagement() {
    return (
        <Container fluid className="py-5">
            <Container>
                <Row className="g-5 align-items-center">
                    <Col lg={6} className="wow fadeInUp" data-wow-delay="0.1s">
                        <p className="fs-5 fw-bold text-primary">Pourquoi nous choisir</p>
                        <h1 className="display-5 mb-4">Notre engagement pour votre satisfaction</h1>
                        <p className="mb-4">Depuis plus de 50 ans, nous mettons notre expertise et notre passion au service de vos projets d'aménagement paysager. Notre équipe qualifiée s'engage à vous offrir des solutions personnalisées et un service de qualité.</p>
                        <Link to="/about">
                            <Button variant="primary" className="py-3 px-4">En savoir plus</Button>
                        </Link>
                    </Col>
                    <Col lg={6}>
                        <Row className="g-4 align-items-center">
                            <Col md={6}>
                                <Row className="g-4">
                                    <Col xs={12} className="wow fadeIn" data-wow-delay="0.3s">
                                        <div className="text-center rounded py-5 px-4" style={{boxShadow: "0 0 45px rgba(0,0,0,.08)"}}>
                                            <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{width: "90px", height: "90px"}}>
                                                <i className="fa fa-check fa-3x text-primary"></i>
                                            </div>
                                            <h4 className="mb-0">Satisfaction garantie</h4>
                                        </div>
                                    </Col>
                                    <Col xs={12} className="wow fadeIn" data-wow-delay="0.5s">
                                        <div className="text-center rounded py-5 px-4" style={{boxShadow: "0 0 45px rgba(0,0,0,.08)"}}>
                                            <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{width: "90px", height: "90px"}}>
                                                <i className="fa fa-users fa-3x text-primary"></i>
                                            </div>
                                            <h4 className="mb-0">Équipe experte</h4>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={6}>
                                <Row className="g-4">
                                    <Col xs={12} className="wow fadeIn" data-wow-delay="0.7s">
                                        <div className="text-center rounded py-5 px-4" style={{boxShadow: "0 0 45px rgba(0,0,0,.08)"}}>
                                            <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{width: "90px", height: "90px"}}>
                                                <i className="fa fa-check fa-3x text-primary"></i>
                                            </div>
                                            <h4 className="mb-0">Qualité de service</h4>
                                        </div>
                                    </Col>
                                    <Col xs={12} className="wow fadeIn" data-wow-delay="0.9s">
                                        <div className="text-center rounded py-5 px-4" style={{boxShadow: "0 0 45px rgba(0,0,0,.08)"}}>
                                            <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{width: "90px", height: "90px"}}>
                                                <i className="fa fa-drafting-compass fa-3x text-primary"></i>
                                            </div>
                                            <h4 className="mb-0">Solutions innovantes</h4>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Engagement; 