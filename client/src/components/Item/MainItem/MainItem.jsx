import React from "react";
import "./MainItem.scss";

const MainItem = ({ item }) => {
  const progress = item.progress;
  const getBorderColor = (progress) => {
    if (progress == "Completed") {
      return "#97b6a3";
    } else if (progress == "Ongoing") {
      return "#004aad";
    } else if (progress == "Dropped") {
      return "#d36363";
    } else {
      return "#ccc";
    }
  };

  return (
    <div className="item">
      <div className="item-top-container">
        <img
          className="item-top-container-Image"
          src={item.image}
          alt={item.title}
          style={{ border: `5px solid ${getBorderColor(progress)}` }}
        />
        <div className="item-top-container-Description">
          <h2>{item.title}</h2>
          <p>Progress: {item.progress}</p>
          {item.chapters && <p>Chapters: {item.chapters}</p>}
          {item.chapter_read && <p>Chapters Read: {item.chapter_read}</p>}
          {item.notes && <p>Notes: {item.notes}</p>}
          {item.last_read && <p>Last Read: {item.last_read}</p>}
          {item.link && (
            <p>
              <a href={item.link}>Link</a>
            </p>
          )}
        </div>
      </div>
      <p>{item.description}</p>
    </div>
  );
};

export default MainItem;
