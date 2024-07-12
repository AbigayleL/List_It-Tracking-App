import React, { useState, useEffect } from "react";
import axios from "axios";
import close from "../../../assets/icons/close.svg";
const API_URL = "http://localhost:8080";

const EditMainItem = ({ isOpen, closeModal, itemInfo, onEdit, type_id }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (itemInfo) {
      setFormData(itemInfo);
    }
  }, [itemInfo]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "select-one" ? e.target.value : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleEditList = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `${API_URL}/types/item/${type_id}/${itemInfo.id}`,
        {
          ...formData,
        }
      );
      onEdit(response.data);
      closeModal();
    } catch (error) {
      console.error("Error updating list:", error);
    }
  };

  const renderFormFields = () => {
    switch (type_id) {
      case "1": // Manga
        return (
          <>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title || ""}
              onChange={handleInputChange}
              required
            />
            <label>Image URL:</label>
            <input
              type="text"
              name="image"
              value={formData.image || ""}
              onChange={handleInputChange}
            />
            <label>Description:</label>
            <textarea
              name="description"
              value={formData.description || ""}
              onChange={handleInputChange}
            />

            <label>
              Completed
              <select
                value={formData.completed}
                onChange={(e) =>
                  handleInputChange({
                    target: {
                      name: "completed",
                      value: e.target.value === "true",
                    },
                  })
                }
                required
              >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </label>
            <label>Chapters:</label>
            <input
              type="number"
              name="chapters"
              value={formData.chapters || 0}
              onChange={handleInputChange}
            />
            <label>Chapters Read:</label>
            <input
              type="number"
              name="chapter_read"
              value={formData.chapter_read || 0}
              onChange={handleInputChange}
            />

            <label>
              Progress:
              <select
                value={formData.progress}
                onChange={(e) =>
                  handleInputChange({
                    target: {
                      name: "progress",
                      value: e.target.value === "true",
                    },
                  })
                }
                required
              >
                <option value="Completed">Completed</option>
                <option value="Ongoing">Ongoing</option>
                <option value="Dropped">Dropped</option>
              </select>
            </label>

            <label>Link:</label>
            <input
              type="text"
              name="link"
              value={formData.link || ""}
              onChange={handleInputChange}
            />
          </>
        );
      case "8": // Custom
        return (
          <>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title || ""}
              onChange={handleInputChange}
              required
            />
            <label>Image URL:</label>
            <input
              type="text"
              name="image"
              value={formData.image || ""}
              onChange={handleInputChange}
            />
            <label>Description:</label>
            <textarea
              name="description"
              value={formData.description || ""}
              onChange={handleInputChange}
            />
            <label>
              Progress:
              <select
                value={formData.progress}
                onChange={(e) =>
                  handleInputChange({
                    target: {
                      name: "progress",
                      value: e.target.value === "true",
                    },
                  })
                }
                required
              >
                <option value="Completed">Completed</option>
                <option value="Ongoing">Ongoing</option>
                <option value="Dropped">Dropped</option>
              </select>
            </label>

            <label>Notes:</label>
            <textarea
              name="notes"
              value={formData.notes || ""}
              onChange={handleInputChange}
            />
          </>
        );
      default:
        return null;
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
            {renderFormFields()}
            <button type="submit">Update List</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditMainItem;
