import React, { useState } from "react";
import axios from "axios";
import close from "../../../assets/icons/close.svg";
import "./AddItem.scss";
import {
  fetchMangaDetails,
  fetchMangaChapters,
  fetchMangaCoverImage,
} from "../../ApiHandler/ApiHandler";

const API_URL = "http://localhost:8080";

/*      
const mangaData = await ApiHandler("Naruto");
setMangaData(mangaData); 
*/
const defaultImageUrl =
  "https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";

const getInitialFormData = (type_id) => {
  switch (type_id) {
    case "1": // Manga
      return {
        title: "",
        image: "",
        description: "",
        completed: false,
        chapters: 0,
        chapter_read: 0,
        progress: "Ongoing",
        link: "",
      };
    case "8": // Custom
      return {
        title: "",
        image: "",
        description: "",
        progress: "Ongoing",
        notes: "",
      };
    default:
      return {};
  }
};

const AddModal = ({ isOpen, closeModal, onAdd, type_id, listId }) => {
  const [formData, setFormData] = useState(getInitialFormData(type_id));

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    const newValue = type === "checkbox" ? e.target.checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleGetData = async (e) => {
    e.preventDefault();
    // Ensure title is not empty before making the API call
    if (formData.title.trim() !== "") {
      try {
        const { mangaid, mangadescription, title } = await fetchMangaDetails(
          formData.title
        );
        const chapterCount = await fetchMangaChapters(mangaid);
        console.log("mangaChapters:", chapterCount);
        /*
        const coverImageUrl = await fetchMangaCoverImage(
          mangaid,
          coverFilename
        );
*/
        //console.log(mangaid, mangadescription, chapterCount);
        //   console.log(mangaData.data[0].id);

        setFormData({
          ...formData,
          title: title || "",
          //image: mangaData.image || defaultImageUrl,
          description: mangadescription || "",
          chapters: chapterCount || 0,
        });
      } catch (error) {
        console.error("Error fetching manga data:", error);
        // Handle error if necessary
      }
    }
  };

  const handleAddItem = async (e) => {
    e.preventDefault();

    const formDataWithDefaults = {
      ...formData,
      image: formData.image || defaultImageUrl,
    };

    try {
      const response = await axios.post(
        `${API_URL}/types/items/${type_id}/${listId}`,
        formDataWithDefaults
      );
      onAdd(response.data);
      closeModal();
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const renderFormFields = () => {
    switch (type_id) {
      case "1": // Manga
        return (
          <>
            <div className="form-title-row">
              <label>
                Title:
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <button onClick={handleGetData}>Get Data</button>
            </div>

            <label>Image URL:</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
            />
            <div className="form-row">
              <label>
                Completed:
                <select
                  name="completed"
                  value={formData.completed}
                  onChange={handleInputChange}
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
                  name="progress"
                  value={formData.progress}
                  onChange={handleInputChange}
                  required
                >
                  <option value="Completed">Completed</option>
                  <option value="Ongoing">Ongoing</option>
                  <option value="Dropped">Dropped</option>
                </select>
              </label>
              <label>
                Read:
                <input
                  type="number"
                  name="chapter_read"
                  value={formData.chapter_read}
                  onChange={handleInputChange}
                />
              </label>
            </div>

            <label>Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
            <label>Link:</label>
            <input
              type="text"
              name="link"
              value={formData.link}
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
              value={formData.title}
              onChange={handleInputChange}
              required
            />
            <label>Image URL:</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
            />
            <label>Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
            <label>
              Progress:
              <select
                name="progress"
                value={formData.progress}
                onChange={handleInputChange}
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
              value={formData.notes}
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
            <h2>Add New Item</h2>
          </div>
          <form onSubmit={handleAddItem}>
            {renderFormFields()}
            <button type="submit">Add List</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
