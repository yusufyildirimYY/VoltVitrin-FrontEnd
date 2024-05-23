import React from "react";
const CardLogoDiv = ({ Brand, BrandLogo }) => {
  return (
    <li className="logocenter">
      <a className="logolink" href="">
        <img className="carlogo" src={BrandLogo} alt="" />
      </a>
    </li>
  );
};

export default CardLogoDiv;
