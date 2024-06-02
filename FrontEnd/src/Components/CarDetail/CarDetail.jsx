import { useParams } from "react-router-dom";

const CarDetail = ({ Database }) => {
  const { modelName } = useParams();
  const carDetails = Database.find((car) => car.Model === modelName);

  if (!carDetails) {
    return (
      <div className="flex justify-center items-center  w-full h-screen absolute top-0">
        <div className=" text-9xl ">Car not found</div>
      </div>
    );
  }
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);
  };
  const image1 = "../../../public" + carDetails.ModelImage1.replace(/^\./, "");
  const image2 = "../../../public" + carDetails.ModelImage2.replace(/^\./, "");
  const image3 = "../../../public" + carDetails.ModelImage3.replace(/^\./, "");
  const image4 = "../../../public" + carDetails.ModelImage4.replace(/^\./, "");

  return (
    <div style={{ height: "969px" }}>
      <div className="flex h-full">
        <div className="w-3/4  border-r-2 border-black ">
          <img
            className="w-full h-full"
            src={image1}
            alt={carDetails.Brand + " " + carDetails.Model}
          />
        </div>
        <div className="w-1/4 ">
          <div className="grid text-center mt-10 space-y-5 text-4xl font-semibold">
            <p> {carDetails.Brand}</p>
            <p>{carDetails.Model}</p>
          </div>
          <div className="flex flex-col text-center items-center text-xl space-y-24 mx-20">
            <div className="price">
              <p>{formatPrice(carDetails.Price)}</p>
            </div>
            <div className="car flex flex-col">
              <img src="" alt="" />
              <div className="flex space-x-20 justify-center">
                <div className="space-y-2">
                  <p className="border-b-2 border-black">Seat</p>
                  <p>{carDetails.Seat}</p>
                </div>
                <div className="space-y-2">
                  <p className="border-b-2 border-black">Drivetrain</p>
                  <p className="whitespace-nowrap">{carDetails.Drive}</p>
                </div>
                <div className="space-y-2">
                  <p className="whitespace-nowrap border-b-2 border-black ">
                    Cargo Space
                  </p>
                  <p>{carDetails.Cargo + " Liter"}</p>
                </div>
              </div>
            </div>
            <div className="way flex flex-col">
              <img src="" alt="" />
              <div className="flex space-x-20 justify-center">
                <div className="space-y-2">
                  <p className="border-b-2 border-black whitespace-nowrap">
                    Top Speed
                  </p>
                  <p>{carDetails.Top_Speed + " Km/h"}</p>
                </div>
                <div className="space-y-2">
                  <p className="border-b-2 border-black">Range</p>
                  <p className="whitespace-nowrap">
                    {carDetails.Range + " Km"}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="border-b-2 border-black whitespace-nowrap">
                    0-100 Acceleration
                  </p>
                  <p>{carDetails.Acceleration + " Second"}</p>
                </div>
              </div>
            </div>
            <div className="charge flex flex-col space-y-10 ">
              <img src="" alt="" />
              <div className="space-y-24">
                <div className="normalcharge flex space-x-20 text-center items-center justify-center">
                  <div className="space-y-2">
                    <p className="border-b-2 border-black whitespace-nowrap">
                      Charge Power
                    </p>{" "}
                    <p>{carDetails.ChargePower}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="border-b-2 border-black whitespace-nowrap">
                      Charge Speed
                    </p>
                    <p>{carDetails.ChargeSpeed}</p>
                  </div>
                </div>
                <div className="fastcharge flex space-x-20 text-center items-cente justify-center">
                  <div className="space-y-2">
                    <p className="border-b-2 border-black whitespace-nowrap">
                      Fast Charge Power
                    </p>
                    <p>{carDetails.FastChargePower}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="border-b-2 border-black whitespace-nowrap">
                      Fast Charge Speed
                    </p>
                    <p>{carDetails.FastChargeSpeed}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
