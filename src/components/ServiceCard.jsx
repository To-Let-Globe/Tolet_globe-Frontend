import React from "react";
import "../style/ServiceCard.css";

function ServiceCard({ image, title, brief, colorToggle }) {
  return (
    <div id="servicecard" className="col-4  d-flex justify-content-around">
      <div className="box1">
        <div className="box12 ">
          <img className="servicepageimage" src={image} alt=""></img>
        </div>
        <div className={`${colorToggle ? "box13" : "box23"}`}>
          <p className="servicepagetext ml-0">{title}</p>
          <div className="box14">{brief}</div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
