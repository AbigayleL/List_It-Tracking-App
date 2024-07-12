import React from "react";
import "./MainItem.scss";

const MainItem = ({ item, type_id }) => {
  const progress = item.progress;
  const getBorderColor = (progress) => {
    console.log(progress);
    if (progress == "Completed") {
      return "#97b6a3";
    } else if (progress == "Ongoing") {
      return "#004aad";
    } else if (progress == "Dropped") {
      return "#d36363";
    } else if (progress == "On-Hold") {
      return "#9A89AB";
    } else if (progress == "Planned") {
      return "#465285";
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

          {item.chapters !== undefined && <p>Chapters: {item.chapters}</p>}
          {item.chapter_read !== undefined && (
            <p>Chapters Read: {item.chapter_read}</p>
          )}
          {item.episodes !== undefined && <p>Episodes: {item.episodes}</p>}
          {item.episodes_watched !== undefined && (
            <p>Episodes Watched: {item.episodes_watched}</p>
          )}
          {item.link && (
            <p>
              <a href={item.link}>Link</a>
            </p>
          )}
          {item.location && <p>Location: {item.location}</p>}
        </div>
      </div>
      <p>{item.description}</p>
      {item.notes && <p>Notes: {item.notes}</p>}
    </div>
  );
};

export default MainItem;
