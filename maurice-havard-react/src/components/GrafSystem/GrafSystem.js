import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { WOW } from 'wowjs';
import 'wowjs/css/libs/animate.css';
import logoGraf from '../../assets/img/logo-graf.png';
import garantie2 from '../../assets/img/garantie2.png';
import './graf-system.scss';

const GrafSystem = () => {
    React.useEffect(() => {
        new WOW().init();
    }, []);

    return (
        <div className="graf-system">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6} className="wow fadeInLeft" data-wow-delay="0.1s">
                        <div className="graf-content">
                            <div className="section-title">
                                <h2 className="mb-4">Pourquoi choisir GRAF ?</h2>
                                <p className="mb-4">Notre gamme de piscines est la plus moderne, innovante et arquitecturalement aboutie.</p>
                            </div>
                            <div className="graf-features">
                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <i className="fas fa-check-circle"></i>
                                    </div>
                                    <div className="feature-text">
                                        <h5>Design optimisé</h5>
                                        <p>Des bassins à parois droites facilitant le nettoyage et optimisent le volume et la surface utile de piscine.</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <i className="fas fa-check-circle"></i>
                                    </div>
                                    <div className="feature-text">
                                        <h5>Matériaux écologiques</h5>
                                        <p>Emploi des meilleures matières pour l'environnement.</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <i className="fas fa-check-circle"></i>
                                    </div>
                                    <div className="feature-text">
                                        <h5>Expertise reconnue</h5>
                                        <p>Une expérience de 33 ans dans le polyester, une renommée internationale.</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <i className="fas fa-shield-alt"></i>
                                    </div>
                                    <div className="feature-text">
                                        <h5>Garantie décennale</h5>
                                        <p>Garantie de dix ans souscrite à AVIVA Assurances. Avec numéro de police 77622143</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className="wow fadeInRight" data-wow-delay="0.1s">
                        <div className="graf-images">
                            <div className="main-image">
                                <img src={logoGraf} alt="Logo GRAF" />
                            </div>
                            <div className="secondary-image">
                                <img src={garantie2} alt="Garantie GRAF" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default GrafSystem; 