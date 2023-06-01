import { Mercury } from "./Models/Mercury/Mercury";
import { Sun } from "./Models/Sun/Sun";
import { Venus } from "./Models/Wenus/Venus";
import { Earth } from "./Models/Earth/Earth";
import { Mars } from "./Models/Mars/Mars";
import { Jowisz } from "./Models/Jowisz/Jowisz";
import { Saturn } from "./Models/Saturn/Saturn";
import Seredip from "./Models/Seredip/Seredip";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Stars } from "@react-three/drei";
import React ,{ useRef, useEffect, useLayoutEffect, useState } from "react";
import { MercuryPos, MercuryRot } from "./Animations/MercuryAnim";
import { defaultPos, defaultRot } from "./Animations/DefaultAnim";

const Planets = ({ animState, ready }) => {
  const CameraRef = useRef(null);
  const [counter,setCounter] = React.useState(0);

  React.useLayoutEffect(() => {
    setCounter(counter + 1);
    if(counter > 0) {
        setTimeout(() => ready(),100);
    } 
  },[])

  useEffect(() => {
    if (CameraRef.current !== null) {
      switch (animState) {
        case 0:
          defaultPos(CameraRef);
          defaultRot(CameraRef);
          break;
        case 1:
          MercuryPos(CameraRef);
          MercuryRot(CameraRef);
          break;
      }
    }
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
      <Mercury />
      <Sun />
      <Venus />
      <Earth />
      <Mars />
      <Jowisz />
      <Saturn />
      <Seredip />
      <Stars />
      <ambientLight />
    </Canvas>
  );
};

export default Planets;
