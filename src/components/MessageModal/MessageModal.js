import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './MessageModal.scss';

const MessageModal = ({ show, onHide, title, message, type = 'success' }) => {
  return (
    <Modal show={show} onHide={onHide} centered className="message-modal">
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {message}
      </Modal.Body>
      <Modal.Footer>
        <Button variant={type === 'success' ? 'success' : 'danger'} onClick={onHide}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MessageModal; 