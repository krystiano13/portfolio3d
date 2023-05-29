import React from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls, Stars } from "@react-three/drei";
import './Background.css';

const Background = () => {
    return (
      <section className="BackgroundContainer">
        <Canvas>
            <PerspectiveCamera fov={75} makeDefault  />
            <OrbitControls />
            <Stars />
        </Canvas>
      </section>
    );
}

export { Background };