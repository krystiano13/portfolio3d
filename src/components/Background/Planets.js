import { Saturn } from "./Models/Saturn/Saturn";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Stars } from "@react-three/drei";
import React, { useRef, useEffect } from "react";
import { planetList } from "./planetList";
import { Planet } from "./Planet";

const Planets = ({ animState, ready }) => {
  const CameraRef = useRef(null);
  const [counter, setCounter] = React.useState(0);

  React.useLayoutEffect(() => {
    setCounter(counter + 1);
    if (counter > 0) {
      setTimeout(() => ready(), 200);
    }
  }, []);

  useEffect(() => {
    import("./LoadAnimations").then((module) =>
      module.LoadAnimations(CameraRef, animState)
    );
  }, [animState]);

  return (
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
  );
};

export default Planets;
