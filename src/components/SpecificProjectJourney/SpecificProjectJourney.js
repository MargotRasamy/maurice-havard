import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './SpecificProjectJourney.scss';

const SpecificProjectJourney = ({ images, title, description }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
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

      {selectedImage && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseModal}>×</button>
            <img 
              src={selectedImage.url} 
              alt={selectedImage.description || 'Image du projet'}
              className="modal-image"
            />
            {selectedImage.description && (
              <div className="modal-description">
                <p>{selectedImage.description}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </Container>
  );
};

export default SpecificProjectJourney; 