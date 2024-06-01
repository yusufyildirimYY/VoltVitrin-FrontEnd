import React from "react";
import CarCardGen from "../../Cars/CarCardGen";
const CarCards = ({ Database, activeTab }) => {
  const getSortedData = (
    key,
    isDescending = activeTab === "Cheapest" ? false : true
  ) => {
    return [...Database]
      .sort((a, b) => (isDescending ? b[key] - a[key] : a[key] - b[key]))
      .slice(0, 6);
  };

  const sortedData =
    activeTab === "Most Range"
      ? getSortedData("Range")
      : getSortedData("Price");

  return (
    <div className="grid grid-rows-2 grid-cols-3 gap-16">
      {sortedData.map((car, index) => (
        <CarCardGen
          key={index}
          Image={car.ModelImage1}
          Name={car.Brand + " " + car.Model}
          Price={car.Price}
          Database={Database}
        />
      ))}
    </div>
  );
};

export default CarCards;
