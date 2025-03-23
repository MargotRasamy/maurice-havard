import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useModal } from '../../context/ModalContext';
import './MessageModal.scss';

const MessageModal = () => {
  const { showModal, modalConfig, hideModal } = useModal();

  return (
    <Modal show={showModal} onHide={hideModal} centered className="message-modal">
      <Modal.Header closeButton>
        <Modal.Title>{modalConfig.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {modalConfig.message}
      </Modal.Body>
      <Modal.Footer>
        <Button variant={modalConfig.type === 'success' ? 'success' : 'danger'} onClick={hideModal}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MessageModal; 