import BrandsLogoDiv from "./BrandsLogoDiv";

const BrandLogo = ({ Carlogo }) => {
  return (
    <>
      {Carlogo.map((car, i) => (
        <BrandsLogoDiv key={i} Brand={car.Brand} BrandLogo={car.BrandLogo} />
      ))}
    </>
  );
};

export default BrandLogo;
