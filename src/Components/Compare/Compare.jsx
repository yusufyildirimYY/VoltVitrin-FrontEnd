import React, { useState } from "react";
import CompareCards from "./CompareCards";

const Compare = ({ Database }) => {
  const mirror = "mirror";
  return (
    <div className="compareContainer max-w-screen-xl mx-auto">
      <h1 className="text-4xl font-bold my-16">Compare Cars</h1>
      <div className="w-full  flex space-x-32">
        <CompareCards Database={Database} mirror={mirror} />{" "}
        <CompareCards Database={Database} />
      </div>
    </div>
  );
};

export default Compare;
