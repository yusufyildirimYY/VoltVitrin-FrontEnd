import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import "./CarCanvas.css";
import { CameraControls, Text } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { AiOutlineFullscreen } from "react-icons/ai";
import { AiOutlineFullscreenExit } from "react-icons/ai";

const CarCanvas = () => {
  const canvasContainerRef = useRef(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      document.body.style.overflow = "hidden";
    } else {
      document.exitFullscreen();
      document.body.style.overflow = "auto";
    }
    toggleFullScreenClass(!isFullScreen);
    setIsFullScreen(!isFullScreen);
  };

  const toggleFullScreenClass = (isFullScreen) => {
    if (canvasContainerRef.current) {
      const container = canvasContainerRef.current;
      container.classList.toggle("h-screen", isFullScreen);
      container.style.height = isFullScreen ? "100vh" : "700px";
      container.style.transition = "height 0.5s ease-in-out";
    }
  };

  useEffect(() => {
    const cleanup = () => {
      document.exitFullscreen();
      toggleFullScreenClass(false);
      document.body.style.overflow = "auto";
      if (canvasContainerRef.current) {
        canvasContainerRef.current.style.transition = "none";
      }
    };

    window.addEventListener("beforeunload", cleanup);
    return () => window.removeEventListener("beforeunload", cleanup);
  }, []);

  return (
    <div className="CanvasContainer" ref={canvasContainerRef}>
      <button
        className="absolute z-50 right-0 top-0 text-center flex flex-col justify-center items-center text-white cursor-pointer p-10"
        onClick={handleFullScreen}
      >
        {isFullScreen ? (
          <>
            <AiOutlineFullscreenExit className="fsicon" size="3rem" />
            <p className="fsicon">Exit</p>
          </>
        ) : (
          <>
            <AiOutlineFullscreen className="fsicon" size="3rem" />
            <p className="fsicon">Full Screen</p>
          </>
        )}
      </button>
      <div className="h-full">
        <Canvas>
          <CameraControls />
          {/* <Perf /> */}
          <Text color="black" anchorX="center" anchorY="middle">
            ARABALAR
          </Text>
        </Canvas>
      </div>
    </div>
  );
};

export default CarCanvas;
