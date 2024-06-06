import React from "react";
const BrandsLogoDiv = ({ BrandLogo }) => {
  return (
    <li>
      <img className="BrandLogo" src={BrandLogo} alt="" />
    </li>
  );
};

export default BrandsLogoDiv;
