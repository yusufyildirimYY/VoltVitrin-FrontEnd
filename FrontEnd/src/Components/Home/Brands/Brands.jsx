import BrandsLogoDiv from "./BrandsLogoDiv";
import "./Brands.css";
import { useEffect, useRef } from "react";
const Brands = ({ Carlogo }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroller = scrollRef.current;
  }, []);

  return (
    <div className="BrandsContainer max-w-screen-xl mx-auto p-14">
      <h1 className="text-7xl text-center  cursor-default brandtxt">Brands</h1>
      <div ref={scrollRef} data-animated="true" className=" scroller">
        <ul className="Brands scroller_inner ">
          {Carlogo.map((car, i) => (
            <BrandsLogoDiv key={i} BrandLogo={car.BrandLogo} />
          ))}
          {Carlogo.map((car, i) => (
            <BrandsLogoDiv key={i} BrandLogo={car.BrandLogo} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Brands;
