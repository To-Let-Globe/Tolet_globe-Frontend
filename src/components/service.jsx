// Importing libraries and image assets
import React from "react";
import "../style/service.css";
import ServiceCard from "./ServiceCard";
import Image1 from "../assets/image/service/image18.png";
import Image2 from "../assets/image/service/image21.png";
import Image3 from "../assets/image/service/image23.png";
import Image4 from "../assets/image/service/image25.png";
import Image5 from "../assets/image/service/image27.png";
import Image6 from "../assets/image/service/image29.png";

export const Service = () => {
  const imgList = [Image1, Image2, Image3, Image4, Image5, Image6];
  const titleList = [
    "Paying Guest",
    "Flat",
    "House",
    "Shop",
    "Office",
    "Warehouse",
  ];
  const briefList = [
    "Find budget-frinedly and Convient paying guest accomadations for a Comfortable stay away from home",
    "Discover a diverse range of apartments for rent, customize to suit your lifestyle and budget",
    "Search for your dream home, available for rent or sale, tailored to your lifestyle and preferences",
    "Explore a variety of retail spaces and shops available for lease, ideal for growing your business",
    "Elevate your workspace and productivity with modern office spaces for ent, designed for success",
    "Secure the perfect godwon space for rent, offering ample storage and logistics solutions",
  ];
  const colorToggleList = [true, false, true, false, true, false];

  return (
    <div className="serviceouterdiv">
      <div className="serviced2">
        <p class="serviceh1">Services</p>
        <p class="serviceh2">
          SKIP THE MIDDLEMAN : RENT OR LEASE DIRECTLY ON TO-LET GLOBE
        </p>
      </div>

      <div id="servicecontainer2" className="container-fluid row-container">
        {/* First row of Service Cards */}
        <div className="row serviced1">
          {imgList.slice(0, 3).map((img, idx) => (
            <ServiceCard
              key={idx}
              image={img}
              title={titleList[idx]}
              brief={briefList[idx]}
              colorToggle={colorToggleList[idx]}
            />
          ))}
        </div>

        {/* Second row of Service Cards */}
        <div className="row serviced1">
          {imgList.slice(3, 6).map((img, idx) => (
            <ServiceCard
              key={idx + 3}
              image={img}
              title={titleList[idx + 3]}
              brief={briefList[idx + 3]}
              colorToggle={colorToggleList[idx + 3]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
