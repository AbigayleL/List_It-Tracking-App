import React, { useState, useEffect } from "react";
import axios from "axios";
import close from "../../../assets/icons/close.svg";
const API_URL = "http://localhost:8080";
import "./EditMainItem.scss";

const EditMainItem = ({ isOpen, closeModal, itemInfo, onEdit, type_id }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (itemInfo) {
      setFormData(itemInfo);
    }
  }, [itemInfo]);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
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
            <div className="form-row">
              <label>
                Completed
                <select
                  value={formData.completed ? "true" : "false"}
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
              <label>
                Chapters:
                <input
                  type="number"
                  name="chapters"
                  value={formData.chapters}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div className="form-row">
              <label>
                Progress:
                <select
                  value={formData.progress}
                  onChange={(e) =>
                    handleInputChange({
                      target: {
                        name: "progress",
                        value: e.target.value,
                      },
                    })
                  }
                  required
                >
                  <option value="Completed">Completed</option>
                  <option value="Ongoing">Ongoing</option>
                  <option value="Dropped">Dropped</option>
                  <option value="On-Hold">On Hold</option>
                  <option value="Planned">Planned</option>
                </select>
              </label>
              <label>
                Chapters Read:
                <input
                  type="number"
                  name="chapter_read"
                  value={formData.chapter_read}
                  onChange={handleInputChange}
                />
              </label>
            </div>

            <label>Link:</label>
            <input
              type="text"
              name="link"
              value={formData.link || ""}
              onChange={handleInputChange}
            />
          </>
        );
      case "2": // TV Shows
        return (
          <>
            <div className="form-title-row">
              <label>
                Title:
                <input
                  type="text"
                  name="title"
                  value={formData.title || ""}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <button>Get Data</button>
            </div>

            <label>Image URL:</label>
            <input
              type="text"
              name="image"
              value={formData.image || ""}
              onChange={handleInputChange}
            />
            <div className="form-row">
              <label>
                Completed:
                <select
                  name="completed"
                  value={formData.completed ? "true" : "false"}
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
              <label>
                Episodes:
                <input
                  type="number"
                  name="episodes"
                  value={formData.episodes}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div className="form-row">
              <label>
                Progress:
                <select
                  name="progress"
                  value={formData.progress}
                  onChange={(e) =>
                    handleInputChange({
                      target: {
                        name: "progress",
                        value: e.target.value,
                      },
                    })
                  }
                  required
                >
                  <option value="Completed">Completed</option>
                  <option value="Ongoing">Ongoing</option>
                  <option value="Dropped">Dropped</option>
                  <option value="On-Hold">On Hold</option>
                  <option value="Planned">Planned</option>
                </select>
              </label>
              <label>
                Episodes Watched:
                <input
                  type="number"
                  name="episodes_watched"
                  value={formData.episodes_watched}
                  onChange={handleInputChange}
                />
              </label>
            </div>

            <label>Description:</label>
            <textarea
              name="description"
              value={formData.description || ""}
              onChange={handleInputChange}
            />
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={formData.location || ""}
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
                      value: e.target.value,
                    },
                  })
                }
                required
              >
                <option value="Completed">Completed</option>
                <option value="Ongoing">Ongoing</option>
                <option value="Dropped">Dropped</option>
                <option value="On-Hold">On Hold</option>
                <option value="Planned">Planned</option>
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
