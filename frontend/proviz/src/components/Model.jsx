// components/Modal.js
import React from 'react';
import '../components/styles/Model.css';
import ApplicationForm from '../components/Form';
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* <p id="close-button" onClick={onClose}>X</p>
        
        {children} */}
        {/* <p id="close-button" onClick={onClose}>Close Form</p> */}
        <ApplicationForm onClose={onClose} />
        
        {children}
      </div>
    </div>
  );
};

export default Modal;
