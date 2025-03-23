import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { WOW } from 'wowjs';
import './how-it-works.scss';

function HowItWorks() {
    const steps = [
        {
            icon: 'fa-comments',
            title: 'Cadrage du Projet',
            description: 'Première rencontre pour comprendre vos besoins, vos envies et les contraintes de votre terrain. Nous échangeons sur votre vision du projet et établissons un cahier des charges précis.',
            delay: '0.1s'
        },
        {
            icon: 'fa-drafting-compass',
            title: 'Conception',
            description: 'Nos experts créent des plans détaillés et des visualisations 3D de votre projet. Nous vous présentons différentes propositions d\'aménagement adaptées à votre espace et à votre budget.',
            delay: '0.3s'
        },
        {
            icon: 'fa-file-invoice',
            title: 'Devis et Validation',
            description: 'Nous établissons un devis détaillé incluant tous les aspects du projet. Une fois validé, nous planifions les différentes phases de réalisation et établissons un planning précis.',
            delay: '0.5s'
        },
        {
            icon: 'fa-tools',
            title: 'Réalisation',
            description: 'Notre équipe qualifiée intervient sur votre terrain pour réaliser le projet selon les plans validés. Nous assurons un suivi régulier et des points d\'avancement pour garantir la qualité du travail.',
            delay: '0.7s'
        },
        {
            icon: 'fa-check-circle',
            title: 'Finalisation',
            description: 'Une fois le projet terminé, nous effectuons une visite de réception avec vous pour valider tous les aspects. Nous vous remettons les documents nécessaires et vous donnons des conseils d\'entretien.',
            delay: '0.9s'
        },
        {
            icon: 'fa-handshake',
            title: 'Suivi',
            description: 'Nous restons à votre disposition pour tout conseil ou intervention d\'entretien. Notre service client est disponible pour répondre à vos questions et assurer votre satisfaction.',
            delay: '1.1s'
        }
    ];

    return (
        <Container fluid className="how-it-works py-5">
            <Container>
                <div className="text-center mb-5">
                    <p className="fs-5 fw-bold text-primary">Notre Processus</p>
                    <h1 className="display-5 mb-4">Comment nous travaillons</h1>
                    <p className="mb-4">Découvrez notre approche méthodique pour transformer votre espace extérieur en un lieu unique et personnalisé.</p>
                </div>
                <Row className="g-4">
                    {steps.map((step, index) => (
                        <Col lg={4} md={6} key={index} className="wow fadeInUp" data-wow-delay={step.delay}>
                            <div className="process-item">
                                <div className="process-icon">
                                    <i className={`fa ${step.icon}`}></i>
                                </div>
                                <div className="process-content">
                                    <h4>{step.title}</h4>
                                    <p>{step.description}</p>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="process-arrow">
                                        <i className="fa fa-arrow-right"></i>
                                    </div>
                                )}
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Container>
    );
}

export default HowItWorks; 