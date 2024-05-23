import React from "react";
const BrandsLogoDiv = ({ Brand, BrandLogo }) => {
  return (
    <li className="BrandLogoCenter">
      <a className="BrandLink" href="">
        <img className="BrandLogo" src={BrandLogo} alt="" />
      </a>
    </li>
  );
};

export default BrandsLogoDiv;
