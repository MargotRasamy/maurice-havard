import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { WOW } from 'wowjs';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';
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
                <div className="container text-center py-5">
                    <h1 className="display-3 text-white mb-4 animated slideInDown">Devis Gratuit</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Devis Gratuit</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}

            {/* Quote Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "500px"}}>
                        <p className="fs-5 fw-bold text-primary">Devis Gratuit</p>
                        <h1 className="display-5 mb-5">Demandez un Devis Gratuit</h1>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="bg-light rounded p-4 p-sm-5 wow fadeInUp" data-wow-delay="0.2s">
                                <form ref={form} onSubmit={sendEmail}>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input 
                                                    type="text" 
                                                    className="form-control border-0" 
                                                    name="user_name"
                                                    placeholder="Votre Nom"
                                                    required
                                                />
                                                <label htmlFor="name">Votre Nom</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input 
                                                    type="email" 
                                                    className="form-control border-0" 
                                                    name="user_email"
                                                    placeholder="Votre Email"
                                                    required
                                                />
                                                <label htmlFor="email">Votre Email</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input 
                                                    type="text" 
                                                    className="form-control border-0" 
                                                    name="phone"
                                                    placeholder="Votre Téléphone"
                                                    required
                                                />
                                                <label htmlFor="mobile">Votre Téléphone</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <select 
                                                    className="form-select border-0" 
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
                                                </select>
                                                <label htmlFor="service">Type de Service</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea 
                                                    className="form-control border-0" 
                                                    placeholder="Laissez votre message ici" 
                                                    name="message"
                                                    style={{height: "100px"}}
                                                    required
                                                ></textarea>
                                                <label htmlFor="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12 text-center">
                                            <button className="btn btn-primary py-3 px-4" type="submit">
                                                Envoyer
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Quote End */}
        </>
    );
}

export default Quote; 