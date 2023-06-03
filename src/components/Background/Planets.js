import { Saturn } from "./Models/Saturn/Saturn";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { planetList } from "./planetList";
import { Planet } from "./Planet";
import { Camera } from "./Camera";

const Planets = ({ animState }) => {
  const CameraRef = useRef(null);

  useEffect(() => {
    import("./LoadAnimations").then((module) =>
      module.LoadAnimations(CameraRef, animState)
    );
  }, [animState]);

  return (
    <Canvas>
      <Camera animState={animState} CameraRef={CameraRef} />
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
  );
};

Planets.propTypes = {
  animState: PropTypes.number,
  ready: PropTypes.func,
};

export default Planets;
