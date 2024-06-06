import React, { useState } from "react";
import CarCards from "./CarCards";

const Tabs = ({ Database }) => {
  const [activeTab, setActiveTab] = useState("Most Range");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabStyle = (tab) => ({
    padding: "10px 20px",
    cursor: "pointer",
    borderBottom: activeTab === tab ? "none" : "2px solid black",
    backgroundColor: activeTab === tab ? "#f0f0f0" : "#fff",
  });

  return (
    <div className="TabContainer max-w-screen-xl mx-auto  p-10">
      <div
        className="text-xl"
        style={{ display: "flex", borderBottom: "2px solid black" }}
      >
        <div
          onClick={() => handleTabClick("Most Range")}
          style={tabStyle("Most Range")}
        >
          Most Range
        </div>
        <div
          onClick={() => handleTabClick("Cheapest")}
          style={tabStyle("Cheapest")}
        >
          Cheapest
        </div>
        <div
          onClick={() => handleTabClick("Most Expensive")}
          style={tabStyle("Most Expensive")}
        >
          Most Expensive
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        {activeTab === "Most Range" && (
          <CarCards Database={Database} activeTab={activeTab} />
        )}
        {activeTab === "Cheapest" && (
          <CarCards Database={Database} activeTab={activeTab} />
        )}
        {activeTab === "Most Expensive" && (
          <CarCards Database={Database} activeTab={activeTab} />
        )}
      </div>
    </div>
  );
};

export default Tabs;
