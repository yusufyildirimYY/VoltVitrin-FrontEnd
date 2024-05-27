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

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="grid grid-rows-2 grid-cols-3 gap-16">
      {sortedData.map((car, index) => (
        <div
          key={index}
          className="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
        >
          <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border border-b-2 border-zinc-200">
            <img
              src={car.ModelImage1}
              alt="car image"
              className="h-44 w-full"
            />
          </div>
          <div className="p-6 pt-4">
            <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {car.Brand + " " + car.Model}
            </h4>
            <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
              {formatPrice(car.Price)}
            </p>
          </div>
          <div className="flex items-center justify-between p-6">
            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
              Details
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarCards;
