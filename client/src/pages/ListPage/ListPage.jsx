import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ListHeaders from "../../components/Lists/ListHeaders/ListHeaders";
import ItemDisplay from "../../components/Lists/ItemDisplay/ItemDisplay";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import EditModal from "../../components/EditModal/EditModal";
import "./ListPage.scss";

const API_URL = "http://localhost:8080";

const ListPage = () => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { type_id, listId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [listInfo, setlistInfo] = useState([]);
  const [listData, setListData] = useState([]);

  // For the delete modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const deletemain = async () => {
    const inventoryDeleteURL = `${API_URL}/lists/${listId}`;

    try {
      await axios.delete(inventoryDeleteURL);
      setIsModalOpen(false);
      navigate("/");
    } catch (error) {
      console.error("Error deleting inventory item:", error);
    }
  };

  const saveEdits = async (editedData) => {
    navigate("/");
  };

  const handleAdd = (newItem) => {
    setListData([...listData, newItem]);
  };

  useEffect(() => {
    const fetchlist = async () => {
      try {
        const mainListresponse = await axios.get(`${API_URL}/lists/${listId}`);

        setlistInfo(mainListresponse.data);
        setIsLoading(false);
      } catch (error) {
        console.log("Error encountered, Please try again later.");
      }
    };
    fetchlist();
  }, [type_id, listId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="list-page">
      <main className="list-page__container">
        <ListHeaders
          listInfo={listInfo}
          type_id={type_id}
          listId={listId}
          handleAdd={handleAdd}
        />

        {isEditModalOpen && (
          <EditModal
            isOpen={isEditModalOpen}
            closeModal={closeEditModal}
            listInfo={listInfo[0]}
            onEdit={saveEdits}
          />
        )}

        {isModalOpen && (
          <DeleteModal
            isOpen={isModalOpen}
            closeModal={closeModal}
            deleteItem={deletemain}
            item={listInfo[0].list_name}
          />
        )}

        <div className="list-page__container--list">
          <ItemDisplay key={listData.length} listData={listData} />
        </div>
        <div className="list-page__button-container">
          <button className="button delete" onClick={openModal}>
            Delete
          </button>
          <button className="button" onClick={openEditModal}>
            Edit
          </button>
        </div>
      </main>
    </div>
  );
};

export default ListPage;
