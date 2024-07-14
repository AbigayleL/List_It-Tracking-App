import React, { useState } from "react";
import axios from "axios";
import close from "../../assets/icons/close.svg";
import "./AddModal.scss";
const API_URL = "http://localhost:8080";
const defaultImageUrl =
  "https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";

const AddModal = ({ isOpen, closeModal, onAdd }) => {
  const [listName, setListName] = useState("");
  const [typeId, setTypeId] = useState("");
  const [image, setImage] = useState("");

  const handleAddList = async (e) => {
    e.preventDefault();

    const imageUrl = image.trim() === "" ? defaultImageUrl : image;

    try {
      const response = await axios.post(`${API_URL}/lists`, {
        list_name: listName,
        type_id: typeId,
        image: imageUrl,
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
              placeholder="Entering name is required"
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
                <option value="2">TV Shows</option>
                <option value="8">Custom</option>
              </select>
            </label>

            <label>Image:</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Enter image URL or default image will be used."
            />
            <button type="submit">Add List</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
