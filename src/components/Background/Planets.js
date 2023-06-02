import { Saturn } from "./Models/Saturn/Saturn";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Stars } from "@react-three/drei";
import React, { useRef, useEffect } from "react";
import PropTypes from 'prop-types';
import { planetList } from "./planetList";
import { Planet } from "./Planet";

import './Planets.css';

const Planets = ({ animState}) => {
  const CameraRef = useRef(null);

  useEffect(() => {
    import("./LoadAnimations").then((module) =>
      module.LoadAnimations(CameraRef, animState)
    )
  }, [animState]);

  return (
    <section className="PlanetsContainer">
      <Canvas>
        <PerspectiveCamera
          ref={CameraRef}
          rotation={[-0.28, -0.1, 0]}
          position={[0, 35, 200]}
          fov={75}
          makeDefault
        />
        {planetList.map((item) => (
          <Planet
            key={item.name}
            texturePath={item.texture}
            rotSpeed={item.rotationSpeed}
            position={item.position}
            scale={item.scale}
          />
        ))}
        <Saturn />
        <Stars />
        <ambientLight />
      </Canvas>
    </section>
  );
};

Planets.propTypes = {
  animState : PropTypes.number,
  ready : PropTypes.func
}

export default Planets;
