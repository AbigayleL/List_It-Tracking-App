import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./ListHeaders.scss";
import add from "../../../assets/icons/add.svg";
import AddItem from "../../Item/AddItem/AddItem";

function ListHeaders({ listInfo, type_id, listId, handleAdd }) {
  const navigate = useNavigate();

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  return (
    <div className="list-header">
      <div className="list-header-top__container">
        <div className="bubble-header ">
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
        <button className="button">filter</button>
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
  );
}

export default ListHeaders;
