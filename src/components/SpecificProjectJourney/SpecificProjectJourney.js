import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './SpecificProjectJourney.scss';

const SpecificProjectJourney = ({ images, title, description }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleImageClick = (image) => {
    if (!isMobile) {
      setSelectedImage(image);
    }
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <Container className="specific-project-journey">
      <Row className="mb-5">
        <Col>
          <h2 className="text-center mb-4">{title}</h2>
          <p className="text-center mb-5">{description}</p>
        </Col>
      </Row>

      <Row className="g-4 image-container">
        {images.map((image, index) => (
          <Col key={index} xs={12} md={6} lg={4}>
            <div className="project-image-container" onClick={() => handleImageClick(image)}>
              <img 
                src={image.url} 
                alt={image.description || `Image ${index + 1} du projet`}
                className="project-image"
              />
              {image.description && (
                <div className="image-description">
                  <p>{image.description}</p>
                </div>
              )}
            </div>
          </Col>
        ))}
      </Row>

      {/* Project Modal - Only show on desktop */}
      {!isMobile && selectedImage && (
        <div 
          className="modal project-modal show" 
          style={{ display: 'block' }}
          onClick={handleCloseModal}
        >
          <div 
            className="modal-dialog modal-lg modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-body">
                <button className="modal-close" onClick={handleCloseModal}>
                  <i className="fas fa-times"></i>
                </button>
                <div className="modal-image">
                  <img 
                    src={selectedImage.url} 
                    alt={selectedImage.description || 'Image du projet'} 
                  />
                </div>
                {selectedImage.description && (
                  <div className="modal-description">
                    <p>{selectedImage.description}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {!isMobile && selectedImage && <div className="modal-backdrop show"></div>}
    </Container>
  );
};

export default SpecificProjectJourney; 