import { Link } from "react-router-dom";

const CarCardGen = ({ Image, Name, Price, Database }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);
  };
  const modelName = Database.find(
    (car) => car.Brand + " " + car.Model === Name
  );

  return (
    <div className="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border border-b-2 border-zinc-200">
        <img src={Image} alt="car image" className="h-44 w-full" />
      </div>
      <div className="p-6 pt-4">
        <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 cursor-default mb-10">
          {Name}
        </h4>
        <p className=" font-sans text-2xl antialiased font-normal leading-relaxed text-gray-700 cursor-default absolute bottom-20">
          {formatPrice(Price)}
        </p>
      </div>
      <div className="mt-auto p-5  ">
        <Link
          to={`/car/${modelName.Model}`}
          className="block text-xl font-sans  antialiased font-normal leading-relaxed text-inherit"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default CarCardGen;
