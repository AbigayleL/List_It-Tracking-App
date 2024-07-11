import React, { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8080";

const AddModal = ({ isOpen, closeModal, onAdd }) => {
  const [listName, setListName] = useState("");
  const [typeId, setTypeId] = useState("");

  const handleAddList = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/lists`, {
        list_name: listName,
        type_id: typeId,
      });
      onAdd(response.data);
      closeModal();
    } catch (error) {
      console.error("Error adding new list:", error);
    }
  };

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
            <h2>Add New List</h2>
          </div>
          <form onSubmit={handleAddList}>
            <label>Name:</label>
            <input
              type="text"
              value={listName}
              onChange={(e) => setListName(e.target.value)}
              required
            />

            <label>
              Type ID:
              <select
                value={typeId}
                onChange={(e) => setTypeId(e.target.value)}
                required
              >
                <option value="">Select Type</option>
                <option value="1">Manga</option>
                <option value="8">Custom</option>
              </select>
            </label>
            <button type="submit">Add List</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
