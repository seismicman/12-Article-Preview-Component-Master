import React from "react";
import caret_down from "../assets/images/caret-down.svg";
import icon_facebook from "../assets/images/icon-facebook.svg";
import icon_twitter from "../assets/images/icon-twitter.svg";
import icon_pinterest from "../assets/images/icon-pinterest.svg";

const Share = ({ selected }) => {
  return (
    <div className={selected ? "share-card-selected" : "share-card-unselected"}>
      <span className="share-span">SHARE</span>
      <img src={icon_facebook} alt="icon-facebook" />
      <img src={icon_twitter} alt="icon-twitter" />
      <img src={icon_pinterest} alt="icon-pinterest" />
      <ion-icon name="heart-outline" size="large" src={caret_down}></ion-icon>
    </div>
  );
};

export default Share;
