import { useParams } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import { GiSteeringWheel } from "react-icons/gi";
import { IoMdSpeedometer } from "react-icons/io";
import { FaRoad } from "react-icons/fa";
import { GiCarSeat } from "react-icons/gi";
import { PiSpeedometerFill } from "react-icons/pi";
import { BsLuggageFill } from "react-icons/bs";
import { PiPlugChargingBold } from "react-icons/pi";
import { MdBatteryCharging30 } from "react-icons/md";
import { PiPlugChargingFill } from "react-icons/pi";
import { IoMdBatteryCharging } from "react-icons/io";

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
                <GiSteeringWheel size="3em" />
                <p className="text-2xl font-semibold ">Drivetrain</p>
                <p className="whitespace-nowrap ">{carDetails.Drive}</p>
              </div>
              <div className="space-y-2 flex  flex-col items-center div2">
                <IoMdSpeedometer size="3em" />
                <p className="text-2xl font-semibold whitespace-nowrap">
                  Top Speed
                </p>
                <p>{carDetails.Top_Speed + " Km/h"}</p>
              </div>
              <div className="space-y-2 flex flex-col items-center">
                <FaRoad size="3em" />
                <p className="text-2xl font-semibold">Range</p>
                <p className="whitespace-nowrap">{carDetails.Range + " Km"}</p>
              </div>
              <div className="space-y-2 flex flex-col items-center">
                <GiCarSeat size="3em" />
                <p className="text-2xl font-semibold ">Seat</p>
                <p className="">{carDetails.Seat}</p>
              </div>
              <div className="space-y-2 flex flex-col items-center">
                <PiSpeedometerFill size="3em" />
                <p className="text-2xl font-semibold whitespace-nowrap">
                  0-100 Acceleration
                </p>
                <p>{carDetails.Acceleration + " Second"}</p>
              </div>
              <div className="space-y-2 flex flex-col items-center">
                <BsLuggageFill size="3em" />
                <p className="whitespace-nowrap text-2xl font-semibold  px-2">
                  Cargo Space
                </p>
                <p className="">{carDetails.Cargo + " Liter"}</p>
              </div>
              <div className="space-y-2 flex flex-col items-center">
                <PiPlugChargingBold size="3em" />
                <p className="text-2xl font-semibold whitespace-nowrap">
                  Charge Power
                </p>
                <p>{carDetails.ChargePower}</p>
              </div>
              <div className="space-y-2 flex flex-col items-center">
                <MdBatteryCharging30 size="3em" />
                <p className="text-2xl font-semibold whitespace-nowrap">
                  Charge Speed
                </p>
                <p>{carDetails.ChargeSpeed}</p>
              </div>
              <div className="space-y-2 flex flex-col items-center">
                <PiPlugChargingFill size="3em" />
                <p className="text-2xl font-semibold whitespace-nowrap">
                  Fast Charge Power
                </p>
                <p>{carDetails.FastChargePower}</p>
              </div>
              <div className="space-y-2 flex flex-col items-center">
                <IoMdBatteryCharging size="3em" />
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
