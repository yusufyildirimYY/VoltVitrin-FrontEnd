import { useState } from "react";
import CarCardGen from "./CarCardGen";

// Dropdown Component
const Dropdown = ({
  isOpen,
  toggleDropdown,
  selectedItem,
  items,
  handleSelection,
  resetSelection,
  label,
}) => {
  return (
    <div className="relative inline-block text-left px-9">
      <button
        onClick={toggleDropdown}
        className="text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        {selectedItem ? selectedItem : label}
        <svg
          className="w-2.5 h-2.5 ml-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {selectedItem && (
        <button
          onClick={resetSelection}
          className="ml-2 text-black font-medium rounded-lg text-sm px-2 py-1"
        >
          ✕
        </button>
      )}
      {isOpen && (
        <div className="z-40 absolute mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
          <ul className="py-2 text-sm text-black">
            {items.map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="block px-4 py-2 dark:hover:bg-gray-100"
                  onClick={() => handleSelection(item)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Cars = ({ Database }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPriceDropdownOpen, setIsPriceDropdownOpen] = useState(false);
  const [isRangeDropdownOpen, setIsRangeDropdownOpen] = useState(false);
  const [isCargoDropdownOpen, setIsCargoDropdownOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedPriceOrder, setSelectedPriceOrder] = useState(null);
  const [selectedRangeOrder, setSelectedRangeOrder] = useState(null);
  const [selectedCargoOrder, setSelectedCargoOrder] = useState(null);

  const uniqueBrands = [...new Set(Database.map((car) => car.Brand))];

  const toggleDropdowns = {
    brand: () => setIsDropdownOpen(!isDropdownOpen),
    price: () => setIsPriceDropdownOpen(!isPriceDropdownOpen),
    range: () => setIsRangeDropdownOpen(!isRangeDropdownOpen),
    cargo: () => setIsCargoDropdownOpen(!isCargoDropdownOpen),
  };

  const handleSelections = {
    brand: (brand) => {
      setSelectedBrand(brand);
      setIsDropdownOpen(false);
    },
    price: (order) => {
      setSelectedPriceOrder(order.toLowerCase());
      setIsPriceDropdownOpen(false);
      setSelectedRangeOrder(null);
      setSelectedCargoOrder(null);
    },
    range: (order) => {
      setSelectedRangeOrder(order.toLowerCase());
      setIsRangeDropdownOpen(false);
      setSelectedPriceOrder(null);
      setSelectedCargoOrder(null);
    },
    cargo: (order) => {
      setSelectedCargoOrder(order.toLowerCase());
      setIsCargoDropdownOpen(false);
      setSelectedPriceOrder(null);
      setSelectedRangeOrder(null);
    },
  };

  const resetSelections = {
    brand: () => setSelectedBrand(null),
    price: () => setSelectedPriceOrder(null),
    range: () => setSelectedRangeOrder(null),
    cargo: () => setSelectedCargoOrder(null),
  };

  let filteredCars = selectedBrand
    ? Database.filter((car) => car.Brand === selectedBrand)
    : [...Database];

  const sortingConditions = {
    "low to high": (a, b) => a - b,
    "high to low": (a, b) => b - a,
  };

  const applySorting = (order, key) => {
    if (order) {
      filteredCars.sort((a, b) => sortingConditions[order](a[key], b[key]));
    }
  };

  applySorting(selectedPriceOrder, "Price");
  applySorting(selectedRangeOrder, "Range");
  applySorting(selectedCargoOrder, "Cargo");

  return (
    <div className="max-w-screen-xl mx-auto p-10">
      <div className="h-16 flex flex-row-reverse space-x-4 space-x-reverse">
        <Dropdown
          isOpen={isDropdownOpen}
          toggleDropdown={toggleDropdowns.brand}
          selectedItem={selectedBrand}
          items={uniqueBrands}
          handleSelection={handleSelections.brand}
          resetSelection={resetSelections.brand}
          label="Brand"
        />
        <Dropdown
          isOpen={isPriceDropdownOpen}
          toggleDropdown={toggleDropdowns.price}
          selectedItem={selectedPriceOrder}
          items={["Low to high", "High to low"]}
          handleSelection={handleSelections.price}
          resetSelection={resetSelections.price}
          label="Price"
        />
        <Dropdown
          isOpen={isRangeDropdownOpen}
          toggleDropdown={toggleDropdowns.range}
          selectedItem={selectedRangeOrder}
          items={["Low to high", "High to low"]}
          handleSelection={handleSelections.range}
          resetSelection={resetSelections.range}
          label="Range"
        />
        <Dropdown
          isOpen={isCargoDropdownOpen}
          toggleDropdown={toggleDropdowns.cargo}
          selectedItem={selectedCargoOrder}
          items={["Low to high", "High to low"]}
          handleSelection={handleSelections.cargo}
          resetSelection={resetSelections.cargo}
          label="Cargo"
        />
      </div>

      <div className="grid grid-rows-2 grid-cols-3 gap-16">
        {filteredCars.map((car, i) => (
          <CarCardGen
            key={i}
            Image={car.ModelImage1}
            Name={car.Brand + " " + car.Model}
            Price={car.Price}
            Database={Database}
          />
        ))}
      </div>
    </div>
  );
};

export default Cars;
