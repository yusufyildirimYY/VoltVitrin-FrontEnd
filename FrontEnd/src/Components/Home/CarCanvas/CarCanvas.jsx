import React, { useEffect, useRef, useState } from "react";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
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
  useDepthBuffer,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { AiOutlineFullscreen } from "react-icons/ai";
import { AiOutlineFullscreenExit } from "react-icons/ai";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { DEG2RAD } from "three/src/math/MathUtils.js";
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
            position: [0, 1, 5.5],
          }}
        >
          <color attach="background" args={["black"]} />
          {/* <CameraControls /> */}
          <PresentationControls rotation={[0.2, 0.05, 0]}>
            <Light />
            <mesh
              receiveShadow
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, -1, -5]}
            >
              <circleGeometry args={[20, 74]} />
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
          </PresentationControls>
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
  const spotLight1 = useRef();
  const spotLight2 = useRef();
  const spotLight3 = useRef();
  const spotLight4 = useRef();

  // useHelper(spotLight1, THREE.SpotLightHelper, "teal");
  useEffect(() => {
    spotLight1.current.target = mesh1.current;
    spotLight2.current.target = mesh2.current;
    spotLight3.current.target = mesh3.current;
    spotLight4.current.target = mesh4.current;
  }, []);
  const depthBuffer = useDepthBuffer();
  const taycan = useLoader(GLTFLoader, "./Models/porshe_taycan/taycan.gltf");
  const model3 = useLoader(GLTFLoader, "./Models/tesla_model_3/scene.gltf");
  const ipace = useLoader(GLTFLoader, "./Models/jaguar_i_pace/scene.gltf");
  const modelx = useLoader(GLTFLoader, "./Models/tesla_model_x/scene.gltf");

  const teslalogo = useLoader(GLTFLoader, "./Models/tesla/scene.gltf");
  const porschelogo = useLoader(GLTFLoader, "./Models/porsche/scene.gltf");
  const jaguarlogo = useLoader(GLTFLoader, "./Models/jaguar/scene.gltf");
  return (
    <>
      <group>
        <SpotLight
          depthBuffer={depthBuffer}
          ref={spotLight1}
          position={[30, 20, -20]}
          target={mesh1.current}
          penumbra={0.2}
          radiusTop={0.4}
          radiusBottom={20}
          distance={150}
          angle={0.45}
          attenuation={40}
          anglePower={4}
          intensity={1}
          opacity={0.2}
        />
        <mesh ref={mesh1} position={[12, -1, -7]} />
        <primitive
          object={modelx.scene}
          position={[9.1, -1, -7]}
          rotation={[0, DEG2RAD * -50, 0]}
          scale={0.05}
        />
      </group>
      <group>
        <SpotLight
          depthBuffer={depthBuffer}
          ref={spotLight2}
          position={[25, 20, -30]}
          target={mesh2.current}
          penumbra={0.2}
          radiusTop={0.4}
          radiusBottom={20}
          distance={180}
          angle={0.45}
          attenuation={40}
          anglePower={4}
          intensity={1}
          opacity={0.2}
        />
        <primitive
          ref={mesh2}
          position={[8, 0.4, -13.1]}
          rotation={[0, DEG2RAD * 130, 0]}
          object={model3.scene}
          scale={0.02}
        />
      </group>
      <group>
        <SpotLight
          depthBuffer={depthBuffer}
          ref={spotLight3}
          position={[-20, 20, -25]}
          target={mesh3.current}
          penumbra={0.2}
          radiusTop={0.4}
          radiusBottom={25}
          distance={150}
          angle={0.45}
          attenuation={40}
          anglePower={4}
          intensity={1}
          opacity={0.2}
        />
        <primitive
          ref={mesh3}
          position={[-6.5, -1, -13]}
          rotation={[0, DEG2RAD * 45, 0]}
          object={taycan.scene}
          scale={2}
        />
      </group>
      <group>
        <SpotLight
          depthBuffer={depthBuffer}
          ref={spotLight4}
          position={[-25, 20, -20]}
          target={mesh4.current}
          penumbra={0.2}
          radiusTop={0.4}
          radiusBottom={25}
          distance={180}
          angle={0.45}
          attenuation={40}
          anglePower={4}
          intensity={1}
          opacity={0.2}
        />
        <mesh ref={mesh4} position={[-12, 0.8, -9]} />
        <primitive
          position={[-10.5, 0.8, -8]}
          rotation={[0, DEG2RAD * 46, 0]}
          object={ipace.scene}
          scale={0.6}
        />
      </group>
    </>
  );
}

export default CarCanvas;
