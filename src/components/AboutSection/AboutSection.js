import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { WOW } from 'wowjs';
import './about-section.scss';

// Import images
import vitrine1 from '../../assets/img/vitrine1.jpg';
import landscape6 from '../../assets/img/divers/divers-landscape6.jpg';
import landscape7 from '../../assets/img/divers/divers-landscape7.jpg';
import landscape9 from '../../assets/img/divers/divers-landscape9.jpg';

function AboutSection() {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 992);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Container fluid className="about-section py-5 bg-very-light">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6} className="wow">
                        <div className="about-content">
                            <p className="fs-5 fw-bold text-primary">À propos</p>
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
                                    <i className="fa fa-check text-primary"></i>
                                </div>
                                <div className="ms-3">
                                    <h5 className="mb-0 wow fadeInLeft">Où est la piscine ?</h5>
                                    <p className="mb-0 wow fadeInLeft">Dans le jardin ...</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className="wow">
                        <div className="about-images">
                            <div className="image-wrapper">
                                <img src={vitrine1} alt="Aménagement paysager" className="img-fluid rounded" />
                            </div>
                            <div className="image-grid">
                                <div className="image-item">
                                    <img src={landscape6} alt="Aménagement paysager divers" className="img-fluid rounded" />
                                </div>
                                <div className="image-item">
                                    <img src={landscape7} alt="Aménagement paysager divers" className="img-fluid rounded" />
                                </div>
                                {!isSmallScreen && (
                                    <div className="image-item">
                                        <img src={landscape9} alt="Aménagement paysager divers" className="img-fluid rounded" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default AboutSection; 