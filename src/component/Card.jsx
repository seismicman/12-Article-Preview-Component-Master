import React, { useState, useEffect } from "react";
import drawers_img from "../assets/images/drawers.jpg";
import avatar from "../assets/images/avatar-michelle.jpg";
import arrow from "../assets/images/arrow-redo-sharp.svg";
import Share from "./Share";

const Card = () => {
  const [selected, setSelected] = useState(false);

  const handleselect = () =>
    selected ? setSelected(false) : setSelected(true);

  return (
    <div className="card">
      <div className="drawers">
        <img src={drawers_img} alt="drawers" />
      </div>
      <div className="overview">
        <h2 className="title">
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h2>
        <p className="description">
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
        <div className="share-section">
          <div className="profile">
            <img src={avatar} alt="avatar" />
            <div className="info">
              <p className="name">Michelle Appleton</p>
              <p className="date">28 Jun 2020</p>
            </div>
          </div>
          <button
            className={`btn ${selected ? "btn-selected" : "btn-unselected"}`}
            onClick={handleselect}
          >
            <img src={arrow} alt="arrow" />
          </button>
          <Share selected={selected} />
        </div>
      </div>
    </div>
  );
};
export default Card;
