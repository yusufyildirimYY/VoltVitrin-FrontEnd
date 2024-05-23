import BrandsLogo from "./BrandsLogo";
import "./Brands.css";
const Brands = ({ Carlogo }) => {
  return (
    <div className="BrandsContainer ">
      <h1 className="text-center text-7xl">BRANDS</h1>
      <ul className="Brands border-2">
        <BrandsLogo Carlogo={Carlogo} />{" "}
      </ul>
    </div>
  );
};

export default Brands;
