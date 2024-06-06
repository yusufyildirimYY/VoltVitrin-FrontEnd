import { useParams } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SpeedIcon from "@mui/icons-material/Speed";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import FastForwardIcon from "@mui/icons-material/FastForward";
import LuggageIcon from "@mui/icons-material/Luggage";
import PowerOutlinedIcon from "@mui/icons-material/PowerOutlined";
import Battery3BarIcon from "@mui/icons-material/Battery3Bar";
import PowerIcon from "@mui/icons-material/Power";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import "./CarDetail.css";
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
    <div className="flex h-screen z-10 relative">
      <ImageSlider
        carDetails={carDetails}
        image1={image1}
        image2={image2}
        image3={image3}
        image4={image4}
      />
      <div className="w-1/4  Details relative z-50 ">
        <div className="grid text-center mt-10 space-y-5 text-4xl font-semibold">
          <p className="text-6xl brand"> {carDetails.Brand.toUpperCase()}</p>
          <p className="whitespace-nowrap model">{carDetails.Model}</p>
        </div>
        <div className="flex flex-col mb-14 text-center items-center text-xl space-y-32 ">
          <div className="price h-60 text-center items-end pb-10  flex ">
            <p className="text-3xl font-medium">
              {formatPrice(carDetails.Price)}
            </p>
          </div>
          <div className="w-full  ">
            <div className="containerb ">
              <div className="space-y-2  flex flex-col items-center div1">
                <DirectionsCarIcon className="scale-300 mb-6" />
                <p className="text-2xl font-semibold ">Drivetrain</p>
                <p className="whitespace-nowrap ">{carDetails.Drive}</p>
              </div>
              <div className="space-y-2 flex  flex-col items-center div2">
                <SpeedIcon className="scale-300 mb-6" />
                <p className="text-2xl font-semibold whitespace-nowrap">
                  Top Speed
                </p>
                <p>{carDetails.Top_Speed + " Km/h"}</p>
              </div>
              <div className="space-y-2 flex flex-col items-center">
                <AddRoadIcon className="scale-300 mb-6" />
                <p className="text-2xl font-semibold">Range</p>
                <p className="whitespace-nowrap">{carDetails.Range + " Km"}</p>
              </div>
              <div className="space-y-2 flex flex-col items-center">
                <AirlineSeatReclineNormalIcon className="scale-300 mb-6" />
                <p className="text-2xl font-semibold ">Seat</p>
                <p className="">{carDetails.Seat}</p>
              </div>
              <div className="space-y-2 flex flex-col items-center">
                <FastForwardIcon className="scale-300 mb-6" />
                <p className="text-2xl font-semibold whitespace-nowrap">
                  0-100 Acceleration
                </p>
                <p>{carDetails.Acceleration + " Second"}</p>
              </div>
              <div className="space-y-2 flex flex-col items-center">
                <LuggageIcon className="scale-300 mb-6" />
                <p className="whitespace-nowrap text-2xl font-semibold  px-2">
                  Cargo Space
                </p>
                <p className="">{carDetails.Cargo + " Liter"}</p>
              </div>
              <div className="space-y-2 flex flex-col items-center">
                <PowerOutlinedIcon className="scale-300 mb-6" />
                <p className="text-2xl font-semibold whitespace-nowrap">
                  Charge Power
                </p>
                <p>{carDetails.ChargePower}</p>
              </div>
              <div className="space-y-2 flex flex-col items-center">
                <Battery3BarIcon className="scale-300 mb-6" />
                <p className="text-2xl font-semibold whitespace-nowrap">
                  Charge Speed
                </p>
                <p>{carDetails.ChargeSpeed}</p>
              </div>
              <div className="space-y-2 flex flex-col items-center">
                <PowerIcon className="scale-300 mb-6" />
                <p className="text-2xl font-semibold whitespace-nowrap">
                  Fast Charge Power
                </p>
                <p>{carDetails.FastChargePower}</p>
              </div>
              <div className="space-y-2 flex flex-col items-center">
                <BatteryChargingFullIcon className="scale-300 mb-6" />
                <p className="text-2xl font-semibold whitespace-nowrap">
                  Fast Charge Speed
                </p>
                <p>{carDetails.FastChargeSpeed}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
