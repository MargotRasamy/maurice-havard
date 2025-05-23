import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
            {/* Page Header Start */}
            <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.001s">
                <div className="container text-center py-5">
                    <h1 className="display-3 text-white mb-4 animated fadeIn">Erreur 404</h1>
                    <nav aria-label="breadcrumb animated fadeIn">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                            <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Erreur 404</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}

            {/* 404 Start */}
            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.001s">
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
                            <h1 className="display-1">404</h1>
                            <h1 className="mb-4">Page Non Trouvée</h1>
                            <p className="mb-4">Désolé, la page que vous recherchez n'existe pas sur notre site ! Vous pouvez retourner à la page d'accueil ou utiliser la recherche.</p>
                            <Link className="btn btn-primary py-3 px-4" to="/">Retour à l'Accueil</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* 404 End */}
        </>
    );
};

export default NotFound; 