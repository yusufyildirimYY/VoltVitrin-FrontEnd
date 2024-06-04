import React, { useEffect, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import "./CarCanvas.css";
import {
  CameraControls,
  Text,
  MeshReflectorMaterial,
  Environment,
  SpotLight,
  useHelper,
  OrbitControls,
  PresentationControls,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { AiOutlineFullscreen } from "react-icons/ai";
import { AiOutlineFullscreenExit } from "react-icons/ai";
import * as THREE from "three";

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
  const { DEG2RAD } = THREE.MathUtils;

  return (
    <div className="CanvasContainer" ref={canvasContainerRef}>
      <button
        className="absolute z-50 right-0 top-0 text-center flex flex-col justify-center items-center text-white cursor-pointer p-7"
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
        <Canvas
          gl={{ antialias: true }}
          shadows
          dpr={[1, 1.5]}
          camera={{
            fov: 90,
            position: [0, 1, 5],
          }}
        >
          <color attach="background" args={["black"]} />
          <CameraControls />
          {/* <PresentationControls rotation={[-0.1, 0, 0]}> */}
          <Light />
          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -1, -5]}
          >
            <circleGeometry args={[15, 74]} />
            <MeshReflectorMaterial
              blur={[300, 100]}
              resolution={2048}
              mixBlur={1}
              mixStrength={40}
              roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.7}
              maxDepthThreshold={1.1}
              color="#050505"
              metalness={0.6}
            />
          </mesh>
          <Cards />
          {/* </PresentationControls> */}
        </Canvas>
      </div>
    </div>
  );
};

function Light() {
  const lfloor = useRef();
  return (
    <>
      <ambientLight intensity={0.015} />
      <directionalLight
        position={[0, 5, 20]}
        color={"white"}
        intensity={6}
        target={lfloor.current}
      />
      ;
      <mesh ref={lfloor} position={[0, -1, -5]} receiveShadow />;
    </>
  );
}
function Cards() {
  const mesh1 = useRef();
  const mesh2 = useRef();
  const mesh3 = useRef();
  const mesh4 = useRef();
  const mesh5 = useRef();

  const spotLight1 = useRef();
  const spotLight2 = useRef();
  const spotLight3 = useRef();
  const spotLight4 = useRef();
  const spotLight5 = useRef();

  // useHelper(spotLight1, THREE.SpotLightHelper, "teal");
  useEffect(() => {
    spotLight1.current.target = mesh1.current;
    spotLight2.current.target = mesh2.current;
    spotLight3.current.target = mesh3.current;
    spotLight4.current.target = mesh4.current;
    spotLight5.current.target = mesh5.current;
  }, []);
  return (
    <>
      <SpotLight
        ref={spotLight1}
        position={[0, 10, -24]}
        target={mesh1.current}
        distance={20}
        angle={1}
        attenuation={14}
        anglePower={2}
      />
      <mesh ref={mesh1} position={[0, 2, -14.8]}>
        <planeGeometry args={[4, 7]} />
        <meshBasicMaterial color={"red"} />
      </mesh>

      <SpotLight
        ref={spotLight2}
        position={[15, 10, -20]}
        target={mesh2.current}
        distance={20}
        angle={1}
        attenuation={14}
        anglePower={2}
      />
      <mesh
        ref={mesh2}
        position={[7, 2, -11.8]}
        rotation={[0, Math.PI * -2.25, 0]}
      >
        <planeGeometry args={[4, 7]} />
        <meshBasicMaterial color={"red"} />
      </mesh>

      <SpotLight
        ref={spotLight3}
        position={[-15, 10, -20]}
        target={mesh3.current}
        distance={20}
        angle={1}
        attenuation={14}
        anglePower={2}
      />
      <mesh
        ref={mesh3}
        position={[-7, 2, -11.8]}
        rotation={[0, Math.PI * 2.25, 0]}
      >
        <planeGeometry args={[4, 7]} />
        <meshBasicMaterial color={"red"} />
      </mesh>

      <SpotLight
        ref={spotLight4}
        position={[20, 10, -5]}
        target={mesh4.current}
        distance={20}
        angle={1}
        attenuation={14}
        anglePower={2}
      />
      <mesh
        ref={mesh4}
        position={[9.8, 2, -5]}
        rotation={[0, Math.PI * -2.5, 0]}
      >
        <planeGeometry args={[4, 7]} />
        <meshBasicMaterial color={"red"} />
      </mesh>

      <SpotLight
        ref={spotLight5}
        position={[-20, 10, -5]}
        target={mesh5.current}
        distance={20}
        angle={1}
        attenuation={14}
        anglePower={2}
      />
      <mesh
        ref={mesh5}
        position={[-9.8, 2, -5]}
        rotation={[0, Math.PI * 2.5, 0]}
      >
        <planeGeometry args={[4, 7]} />
        <meshBasicMaterial color={"red"} />
      </mesh>
    </>
  );
}

export default CarCanvas;
