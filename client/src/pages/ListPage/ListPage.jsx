import axios from "axios";
import React, { useEffect, useState } from "react";
import ListHeaders from "../../components/Lists/ListHeaders/ListHeaders";
import ItemDisplay from "../../components/Lists/ItemDisplay/ItemDisplay";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import "./ListPage.scss";
import { useParams, useNavigate } from "react-router-dom";

//listInfo={listInfo} currentlist={currentlist}

const API_URL = "http://localhost:8080";

const ListPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const { type_id, listId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [listInfo, setlistInfo] = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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

  useEffect(() => {
    const fetchlist = async () => {
      try {
        const mainListresponse = await axios.get(`${API_URL}/lists/${listId}`);

        setlistInfo(mainListresponse.data);
        setIsLoading(false);
        console.log(listInfo);
        const item = listInfo[0].list_name;
        console.log(listInfo[0].list_name);
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
        <ListHeaders listInfo={listInfo} />

        {isModalOpen && (
          <DeleteModal
            isOpen={isModalOpen}
            closeModal={closeModal}
            deleteItem={deletemain}
            item={listInfo[0].list_name}
          />
        )}
        <div className="list-page__container--list">
          <ItemDisplay />
        </div>
        <div className="list-page__button-container">
          <button className="button delete" onClick={openModal}>
            Delete
          </button>
          <button className="button">Edit</button>
        </div>
      </main>
    </div>
  );
};

export default ListPage;
