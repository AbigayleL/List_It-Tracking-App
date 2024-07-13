import React from "react";

import "./About.scss";
import close from "../../assets/icons/close.svg";

const API_URL = "http://localhost:8080";

const DeleteModal = ({ isOpen, closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-overlay"></div>
      <div className="modal-body">
        <img
          src={close}
          alt="Delete Icon"
          className="modal__close"
          onClick={closeModal}
        />
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="delete__heading">{`How To Use`}</h1>
          </div>
          <p className="delete__confirm-text">{`Welome to List_It`}</p>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
