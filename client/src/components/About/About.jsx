import React from "react";

import "./About.scss";
import close from "../../assets/icons/close.svg";

const About = ({ isOpen, closeModal }) => {
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
            <h1>{`Explaination`}</h1>
            <p>Coloured borders indicate the users progress</p>
          </div>

          <div className="modal-color">
            <div className="color">
              <div className="color-container completed"></div>
              <p>Completed</p>
            </div>
            <div className="color">
              <div className="color-container ongoing"></div>
              <p>Ongoing</p>
            </div>
          </div>
          <div className="modal-color">
            <div className="color">
              <div className="color-container dropped"></div>
              <p>Dropped</p>
            </div>
            <div className="color left">
              <div className="color-container onhold"></div>
              <p>On-Hold</p>
            </div>
          </div>
          <div className="modal-color">
            <div className="color">
              <div className="color-container planned"></div>
              <p>Planned</p>
            </div>
          </div>

          <p>
            The List titles are also an indication of what type of list it is
          </p>
          <div className="modal-color">
            <div className="color">
              <div className="color-container manga"></div>
              <p>Manga</p>
            </div>
            <div className="color">
              <div className="color-container custom"></div>
              <p>Custom</p>
            </div>
          </div>

          <div className="modal-color">
            <div className="color">
              <div className="color-container tv"></div>
              <p>TV Shows</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
