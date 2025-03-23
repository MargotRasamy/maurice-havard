import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    title: '',
    message: '',
    type: 'success'
  });

  const setModal = (title, message, type = 'success') => {
    setModalConfig({ title, message, type });
    setShowModal(true);
  };

  const hideModal = () => {
    setShowModal(false);
  };

  return (
    <ModalContext.Provider value={{ showModal, modalConfig, setModal, hideModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}; 