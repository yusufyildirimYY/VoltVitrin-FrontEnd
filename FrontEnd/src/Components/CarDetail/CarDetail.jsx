import { useParams } from "react-router-dom";

const CarDetail = ({ Database }) => {
  const { modelName } = useParams();
  const carDetails = Database.find((car) => car.Model === modelName);

  if (!carDetails) {
    return <div>Araba bulunamadı</div>;
  }

  return (
    <div>
      <h1>
        {carDetails.Brand} {carDetails.Model}
      </h1>
      <p>Fiyat: {carDetails.Price}</p>
    </div>
  );
};

export default CarDetail;
