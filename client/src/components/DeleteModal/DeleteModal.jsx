import React from "react";
import axios from "axios";

import "./DeleteModal.scss";
import close from "../../assets/icons/close.svg";

const API_URL = "http://localhost:8080";

const DeleteModal = ({ isOpen, closeModal, deleteItem, item }) => {
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
            <h1 className="delete__heading">{`Delete ${item}?`}</h1>
          </div>
          <p className="delete__confirm-text">{`Please confirm that you’d like to delete ${item}.`}</p>
          <div className="modal__actions">
            <button
              type="button"
              onClick={deleteItem}
              className="modal__button--delete"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
