import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import "./CarCanvas.css";
import {
  MeshReflectorMaterial,
  SpotLight,
  OrbitControls,
  useDepthBuffer,
  Text3D,
  Text,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { AiOutlineFullscreen } from "react-icons/ai";
import { AiOutlineFullscreenExit } from "react-icons/ai";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { useGesture } from "react-use-gesture";
import font from "./2.json";

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
            position: [0, 5, 15],
          }}
        >
          <OrbitControls
            enableRotate={false}
            maxDistance={15}
            minDistance={9}
          />
          {/* <Perf /> */}
          <color attach="background" args={["black"]} />
          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -1, -5]}
          >
            <circleGeometry args={[50, 74]} />
            <MeshReflectorMaterial
              blur={[300, 100]}
              resolution={480}
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
          <Suspense fallback={<Text position={[0, 0, 0]}>LOADING...</Text>}>
            <Light />
            <Cards />
            <Texts />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

function Light() {
  useEffect(() => {
    spotLight1.current.target = circle.current;
    spotLight2.current.target = circle.current;
    spotLight3.current.target = circle.current;
  }, []);
  const lfloor = useRef();
  const circle = useRef();
  const depthBuffer = useDepthBuffer();
  const spotLight1 = useRef();
  const spotLight2 = useRef();
  const spotLight3 = useRef();
  return (
    <>
      <ambientLight intensity={0.015} />
      <directionalLight
        position={[0, 5, 20]}
        color={"white"}
        intensity={5}
        target={lfloor.current}
      />
      ;
      <mesh ref={lfloor} position={[0, -1, -5]} receiveShadow />;
      <SpotLight
        depthBuffer={depthBuffer}
        ref={spotLight1}
        position={[0, 20, -15]}
        target={circle.current}
        penumbra={0.2}
        radiusTop={0.4}
        radiusBottom={25}
        distance={100}
        angle={0.45}
        attenuation={40}
        anglePower={4}
        intensity={1}
        opacity={0.2}
      />
      <SpotLight
        depthBuffer={depthBuffer}
        ref={spotLight2}
        position={[15, 20, -10]}
        target={circle.current}
        penumbra={0.2}
        radiusTop={0.4}
        radiusBottom={20}
        distance={120}
        angle={0.45}
        attenuation={40}
        anglePower={4}
        intensity={1}
        opacity={0.2}
      />
      <SpotLight
        depthBuffer={depthBuffer}
        ref={spotLight3}
        position={[-15, 20, -10]}
        target={circle.current}
        penumbra={0.2}
        radiusTop={0.4}
        radiusBottom={20}
        distance={120}
        angle={0.45}
        attenuation={40}
        anglePower={4}
        intensity={1}
        opacity={0.2}
      />
      <mesh position={[0, -2, 0]} ref={circle}>
        <cylinderGeometry args={[9, 15, 3, 64]} />
        <meshStandardMaterial color={"black"} resolution={420} />
      </mesh>
    </>
  );
}
function Cards(props) {
  const mesh = useRef();
  const taycan = useLoader(GLTFLoader, "./Models/porshe_taycan/taycan.gltf");

  const bind = useGesture({
    onDrag: ({ offset: [x, y] }) => {
      mesh.current.rotation.y = x / 100;
    },
  });
  return (
    <>
      <group rotation={[0, 0, 0]}>
        <primitive
          ref={mesh}
          {...bind()}
          {...props}
          position={[0, -0.45, 0]}
          rotation={[0, 0, 0]}
          object={taycan.scene}
          scale={3}
        />
      </group>
    </>
  );
}

function Texts() {
  return (
    <>
      <Text3D
        font={font}
        position={[-14, 7, 3]}
        rotation={[0, 0.5, 0]}
        curveSegments={32}
        height={0.1}
        lineHeight={0.9}
        letterSpacing={0.1}
        size={1.5}
      >
        {"Most Popular Car\n  Of This Month"}
      </Text3D>
      <group>
        <Text3D
          font={font}
          position={[4.5, 5, 3]}
          rotation={[0, -0.7, 0]}
          curveSegments={32}
          height={0.2}
          lineHeight={0.8}
          letterSpacing={0.01}
          size={1}
        >
          {"Porsche\nTaycan"}
        </Text3D>
      </group>
    </>
  );
}
export default CarCanvas;
