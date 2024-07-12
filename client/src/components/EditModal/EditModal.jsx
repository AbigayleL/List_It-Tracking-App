import React, { useState, useEffect } from "react";
import axios from "axios";
import close from "../../assets/icons/close.svg";
const API_URL = "http://localhost:8080";

const EditModal = ({ isOpen, closeModal, listInfo, onEdit }) => {
  const [listName, setListName] = useState("");
  console.log(listInfo);
  const typeid = listInfo.type_id;
  useEffect(() => {
    if (listInfo) {
      setListName(listInfo.list_name);
    }
  }, [listInfo]);

  const handleEditList = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`${API_URL}/lists/${listInfo.id}`, {
        list_name: listName,
        type_id: typeid,
      });
      onEdit(response.data);
      closeModal();
    } catch (error) {
      console.error("Error updating list:", error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-overlay" onClick={closeModal}></div>
      <div className="modal-body">
        <img
          src={close}
          alt="Delete Icon"
          className="modal__close"
          onClick={closeModal}
        />
        <div className="modal-content">
          <div className="modal-header">
            <h2>Edit List</h2>
          </div>
          <form onSubmit={handleEditList}>
            <label>Name:</label>
            <input
              type="text"
              value={listName}
              onChange={(e) => setListName(e.target.value)}
              required
            />
            <button type="submit">Update List</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
