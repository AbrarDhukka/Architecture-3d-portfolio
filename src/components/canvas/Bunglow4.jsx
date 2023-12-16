/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

// Define the component that will render the GLTF model
const BunglowModel = ({ position, rotation }) => {
  // Load the GLTF model using useGLTF hook
  const { scene } = useGLTF("./bunglow4/scene.gltf");

  return <primitive object={scene} position={position} rotation={rotation} />;
};

// Define the main Canvas component
const Bunglow4Canvas = () => {
  return (
    //camera={{position: [3, 0, 5.5], }}
    <div>
      <Canvas
        className=" object-cover"
        style={{ width: "550px", height: "550px" }}
        camera={{ position: [-7, 7, 15], fov: 32 }}
      >
        {/* Set up the 3D scene */}
        <ambientLight intensity={4} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls></OrbitControls>
        <Suspense fallback={null}>
          {/* Render the GLTF model */}
          <BunglowModel
            position={[-0.5, 1, 3.5]}
            rotation={[0, Math.PI * 6.6, 0]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Bunglow4Canvas;
