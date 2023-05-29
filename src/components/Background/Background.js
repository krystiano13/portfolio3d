import React from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls, Stars } from "@react-three/drei";
import './Background.css';
import { Model } from "./Models/Scene";

const Background = () => {
    return (
      <section className="BackgroundContainer">
        <Canvas>
            <Model />
            <OrbitControls />
            <Stars />
            <ambientLight />
        </Canvas>
      </section>
    );
}

export { Background };