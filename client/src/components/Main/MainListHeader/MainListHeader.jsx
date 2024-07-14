import "./MainListHeader.scss";
import React, { useState } from "react";
import AddModal from "../../AddModal/AddModal";
import add from "../../../assets/icons/add.svg";

export const MainListHeader = ({ handleAdd }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="main-header">
      <div className="main-header-top__container">
        <div className="bubble-header ">
          <h1 className="main-header-title">ALL LISTS</h1>
        </div>
      </div>

      <div className="main-header-nav">
        <input
          type="text"
          className="main-header--search"
          placeholder="Search..."
          name="search"
        />
        <div className="add-list-button">
          <button className="button" onClick={openModal}>
            <img className="add" src={add} alt="+" />
          </button>
        </div>
      </div>
      {isModalOpen && (
        <AddModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          onAdd={handleAdd}
        />
      )}
    </div>
  );
};

export default MainListHeader;
