import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./ListHeaders.scss";
import add from "../../../assets/icons/add.svg";
import AddItem from "../../Item/AddItem/AddItem";
import About from "../../About/About";
import question from "../../../assets/icons/question.svg";

function ListHeaders({ listInfo, type_id, listId, handleAdd }) {
  const navigate = useNavigate();

  const getBorderColor = (type_id) => {
    if (type_id == 1) {
      return "#89bdc2";
    } else if (type_id == 2) {
      return "#AFF8DB";
    } else if (type_id == 8) {
      return "#a289c2";
    } else {
      return "#ccc";
    }
  };

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const openAboutModal = () => {
    setIsAboutModalOpen(true);
  };

  const closeAboutModal = () => {
    setIsAboutModalOpen(false);
  };

  return (
    <div className="list">
      <div className="button-top">
        {isAboutModalOpen && (
          <About isOpen={isAboutModalOpen} closeModal={closeAboutModal} />
        )}
        <button className="button" onClick={() => navigate(-1)}>
          Back
        </button>
        <button className="button" onClick={openAboutModal}>
          <img className="button-img" src={question} alt="About" />
        </button>
      </div>

      <div className="list-header">
        <div className="list-header-top__container">
          <div
            className="bubble-header "
            style={{ backgroundColor: getBorderColor(type_id) }}
          >
            <h1 className="list-header-title">{listInfo[0].list_name}</h1>
          </div>
        </div>

        <div className="list-header-nav">
          <input
            type="text"
            className="list-header--search"
            placeholder="Search..."
            name="search"
          />
          <div className="add-list-button">
            <button className="button" onClick={openAddModal}>
              <img src={add} alt="+" />
            </button>
          </div>
        </div>
        {isAddModalOpen && (
          <AddItem
            isOpen={isAddModalOpen}
            closeModal={closeAddModal}
            onAdd={handleAdd}
            type_id={type_id}
            listId={listId}
          />
        )}
      </div>
    </div>
  );
}

export default ListHeaders;
