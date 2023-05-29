import React from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls, Stars } from "@react-three/drei";
import './Background.css';
import { Mercury } from "./Models/Mercury/Mercury";
import { Sun } from "./Models/Sun/Sun";
import { Venus } from "./Models/Wenus/Venus";
import { Earth } from './Models/Earth/Earth';

const Background = () => {
    return (
      <section className="BackgroundContainer">
        <Canvas>
            <Mercury />
            <Sun />
            <Venus />
            <Earth />
            <OrbitControls />
            <Stars />
            <ambientLight />
        </Canvas>
      </section>
    );
}

export { Background };