import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainItem from "../../components/Item/MainItem/MainItem";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import EditMainItem from "../../components/Item/EditMainItem/EditMainItem";

import "./ItemPage.scss";

const API_URL = "http://localhost:8080";

const ItemPage = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const navigate = useNavigate();

  const { type_id, itemId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [itemInfo, setItemInfo] = useState(null);

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const saveEdits = async (editedData) => {
    navigate(`/types/items/${type_id}/${itemInfo.main_list_id}`);
  };

  const deleteI = async () => {
    const inventoryDeleteURL = `${API_URL}/types/item/${type_id}/${itemId}`;
    try {
      await axios.delete(inventoryDeleteURL);
      setIsDeleteModalOpen(false);
      navigate(`/types/items/${type_id}/${itemInfo.main_list_id}`);
    } catch (error) {
      console.error("Error deleting inventory item:", error);
    }
  };

  useEffect(() => {
    const fetchlist = async () => {
      try {
        const itemresponse = await axios.get(
          `${API_URL}/types/item/${type_id}/${itemId}`
        );

        setItemInfo(itemresponse.data);
        console.log(itemresponse.data);
        setIsLoading(false);
      } catch (error) {
        console.log("Error encountered, Please try again later.");
      }
    };
    fetchlist();
  }, [type_id, itemId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="item-page">
      <div className="item-page__container">
        <div className="item-header">
          <div className="item-page-header-top__container">
            <div className="bubble-header ">
              <h1 className="item-page-title">{itemInfo.title}</h1>
            </div>
          </div>
        </div>
        <MainItem
          key={itemInfo.main_list_id}
          item={itemInfo}
          type_id={type_id}
        />
        <div className="list-page__button-container">
          {isEditModalOpen && (
            <EditMainItem
              isOpen={isEditModalOpen}
              closeModal={closeEditModal}
              itemInfo={itemInfo}
              onEdit={saveEdits}
              type_id={type_id}
            />
          )}

          {isDeleteModalOpen && (
            <DeleteModal
              isOpen={isDeleteModalOpen}
              closeModal={closeDeleteModal}
              deleteItem={deleteI}
              item={itemInfo.title}
            />
          )}
          <button className="button delete" onClick={openDeleteModal}>
            Delete
          </button>
          <button className="button" onClick={openEditModal}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
