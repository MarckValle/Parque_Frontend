import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Model = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={2} />;  // Aumenta la escala si es necesario
};

const Model3D = ({ modelPath }) => {
  return (
    <div className="container">
      <h3 className="text-center">Modelo 3D</h3>
      <div style={{ width: "100%", height: "300px" }}> {/* Ajusta el tamaño */}
        <Canvas camera={{ position: [0, 3, 7], fov: 60 }}> {/* Ajusta la cámara */}
          <ambientLight intensity={0.8} />
          <directionalLight position={[2, 5, 2]} />
          <Suspense fallback={null}>
            <Model modelPath={modelPath} />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
};

export default Model3D;
