import CarsLogoDiv from "./CarsLogoDiv";

const CarsLogo = ({ Carlogo }) => {
  return (
    <>
      {Carlogo.map((car, i) => (
        <CarsLogoDiv key={i} Brand={car.Brand} BrandLogo={car.BrandLogo} />
      ))}
    </>
  );
};

export default CarsLogo;
