import React from "react";
import { Canvas } from "@react-three/fiber";
import "./CarCanvas.css";
import { CameraControls, Text } from "@react-three/drei";
import { Perf } from "r3f-perf";

const CarCanvas = () => (
  <div className="CanvasContainer">
    <Canvas>
      <CameraControls />
      {/* <Perf /> */}
      <Text color="black" anchorX="center" anchorY="middle">
        ARABALAR
      </Text>
    </Canvas>
  </div>
);

export default CarCanvas;
