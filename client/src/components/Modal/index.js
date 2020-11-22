import React from "react";

import { GrFormClose } from "react-icons/gr";

import "./styles.css";

const Modal = ({ id = "modal", onClose = () => {}, children }) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };

  return (
    <div id={id} className="modal" onClick={handleOutsideClick}>
      <div className="container-modal">
        <div className="content">{children}</div>
      </div>
      <div id="button-modal">
        <button className="close" onClick={onClose}>
          <GrFormClose />
        </button>
      </div>
    </div>
  );
};

export default Modal;
