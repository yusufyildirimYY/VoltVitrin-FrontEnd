import { useState } from "react";
import "./ImageSlider.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const ImageSlider = ({ carDetails, image1, image2, image3, image4 }) => {
  const [slide, setSlide] = useState(0);
  const images = [image1, image2, image3, image4];

  const nextSlide = (event) => {
    event.preventDefault();
    setSlide((slide + 1) % images.length);
  };

  const prevSlide = (event) => {
    event.preventDefault();
    setSlide((slide - 1 + images.length) % images.length);
  };
  const getActiveImage = () => {
    return images.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={carDetails.Brand + " " + carDetails.Model}
        className={`slide ${index === slide ? "active" : ""}`}
      />
    ));
  };
  return (
    <>
      <div className="w-3/4 relative flex justify-center items-center z-30">
        <ArrowBackIosNewIcon
          onClick={prevSlide}
          onMouseDown={(e) => e.preventDefault()}
          className="arrow arrow-left z-30 scale-150"
        />
        <div className="image-container">{getActiveImage()}</div>
        <ArrowForwardIosIcon
          onClick={nextSlide}
          onMouseDown={(e) => e.preventDefault()}
          className="arrow arrow-right z-30 scale-150"
        />
      </div>
    </>
  );
};

export default ImageSlider;
