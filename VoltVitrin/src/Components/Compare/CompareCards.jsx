import React, { useState } from "react";
import "./CompareCards.css";
const CompareCards = ({ Database, mirror }) => {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);

  const Brands = [...new Set(Database.map((car) => car.Brand))];

  const modelsForSelectedBrand = Database.filter(
    (car) => car.Brand === selectedBrand
  ).map((car) => car.Model);

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
    setSelectedModel(null);
  };

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };

  const getSelectedCarImage = (brand, model) => {
    const selectedCar = Database.find(
      (car) => car.Brand === brand && car.Model === model
    );
    return selectedCar ? selectedCar.ModelImage1 : "./Images/DefaultCar.png";
  };

  const getSelectedCarInfo = (brand, model) => {
    const selectedCar = Database.find(
      (car) => car.Brand === brand && car.Model === model
    );

    if (selectedCar) {
      return {
        price: selectedCar.Price,
        seat: selectedCar.Seat,
        drivetrain: selectedCar.Drive,
        cargoSpace: selectedCar.Cargo,
        topSpeed: selectedCar.Top_Speed,
        range: selectedCar.Range,
        acceleration: selectedCar.Acceleration,
        chargePower: selectedCar.ChargePower,
        chargeSpeed: selectedCar.ChargeSpeed,
        fastChargePower: selectedCar.FastChargePower,
        fastChargeSpeed: selectedCar.FastChargeSpeed,
      };
    }
  };
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);
  };
  return (
    <div className=" border-2 mb-10 rounded-3xl overflow-hidden  ">
      <img
        className={`w-screen h-72 border-b-2 ${mirror}  `}
        src={getSelectedCarImage(selectedBrand, selectedModel)}
        alt=""
      />
      <div className=" mx-4 mt-10 mb-16 flex flex-col  space-y-10">
        <div className="mb-2">
          <form className=" w-full">
            <label
              htmlFor="Brand"
              className="block  text-lg  font-bold text-gray-900 dark:text-white "
            >
              Brand
            </label>
            <select
              value={selectedBrand || ""}
              onChange={handleBrandChange}
              className="w-full h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value>Choose brand</option>
              {Brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </form>
        </div>

        <div>
          <form className="w-full">
            <label
              htmlFor="Model"
              className="block text-lg  font-bold text-gray-900 dark:text-white "
            >
              Model
            </label>
            <select
              value={selectedModel || ""}
              onChange={handleModelChange}
              className="w-full h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Choose model</option>
              {modelsForSelectedBrand.map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </form>
        </div>
      </div>
      {selectedBrand && selectedModel && (
        <div className="border-t-2 ">
          <div className="border-b-2 flex  text-2xl w-full text-center ">
            <p className="w-64 p-2 text-start">Price</p>
            <p className="mr-auto p-2 border-l-2">
              {formatPrice(
                getSelectedCarInfo(selectedBrand, selectedModel).price
              )}
            </p>
          </div>
          <div className="border-b-2 flex  text-2xl w-full text-center ">
            <p className="w-64 p-2 text-start">Seat</p>
            <p className="mr-auto p-2 border-l-2">
              {getSelectedCarInfo(selectedBrand, selectedModel).seat}
            </p>
          </div>
          <div className="border-b-2 flex  text-2xl w-full text-center ">
            <p className="w-64 p-2 text-start">Drivetrain</p>
            <p className="mr-auto p-2 border-l-2">
              {getSelectedCarInfo(selectedBrand, selectedModel).drivetrain}
            </p>
          </div>
          <div className="border-b-2 flex  text-2xl w-full text-center ">
            <p className="w-64 p-2 text-start">Cargo Space</p>
            <p className="mr-auto p-2 border-l-2">
              {getSelectedCarInfo(selectedBrand, selectedModel).cargoSpace}
              Liter
            </p>
          </div>
          <div className="border-b-2 flex  text-2xl w-full text-center ">
            <p className="w-64 p-2 text-start">Top Speed</p>
            <p className="mr-auto p-2 border-l-2">
              {getSelectedCarInfo(selectedBrand, selectedModel).topSpeed} Km/h
            </p>
          </div>
          <div className="border-b-2 flex  text-2xl w-full text-center ">
            <p className="w-64 p-2 text-start">Range</p>
            <p className="mr-auto p-2 border-l-2">
              {getSelectedCarInfo(selectedBrand, selectedModel).range} Km
            </p>
          </div>
          <div className="border-b-2 flex  text-2xl w-full text-center ">
            <p className="w-64 p-2 text-start">0-100 Acceleration</p>
            <p className="mr-auto p-2 border-l-2">
              {getSelectedCarInfo(selectedBrand, selectedModel).acceleration}{" "}
              Sec.
            </p>
          </div>
          <div className="border-b-2 flex  text-2xl w-full text-center ">
            <p className="w-64 p-2 text-start">Charge Power</p>
            <p className="mr-auto p-2 border-l-2">
              {getSelectedCarInfo(selectedBrand, selectedModel).chargePower}
            </p>
          </div>
          <div className="border-b-2 flex  text-2xl w-full text-center ">
            <p className="w-64 p-2 text-start">Charge Speed</p>
            <p className="mr-auto p-2 border-l-2">
              {getSelectedCarInfo(selectedBrand, selectedModel).chargeSpeed}
            </p>
          </div>
          <div className="border-b-2 flex  text-2xl w-full text-center ">
            <p className="w-64 p-2 text-start">Fast Charge Power</p>
            <p className="mr-auto p-2 border-l-2">
              {getSelectedCarInfo(selectedBrand, selectedModel).fastChargePower}
            </p>
          </div>
          <div className="border-b-2 flex  text-2xl w-full text-center ">
            <p className="w-64 p-2 text-start">Fast Charge Speed</p>
            <p className="mr-auto p-2 border-l-2">
              {getSelectedCarInfo(selectedBrand, selectedModel).fastChargeSpeed}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompareCards;
