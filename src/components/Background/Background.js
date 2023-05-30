import React from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls, Stars } from "@react-three/drei";
import "./Background.css";
import { Mercury } from "./Models/Mercury/Mercury";
import { Sun } from "./Models/Sun/Sun";
import { Venus } from "./Models/Wenus/Venus";
import { Earth } from "./Models/Earth/Earth";
import { Mars } from "./Models/Mars/Mars";
import { Jowisz } from "./Models/Jowisz/Jowisz";
import { Saturn } from "./Models/Saturn/Saturn";
import { Seredip } from "./Models/Seredip/Seredip";
import { MercuryPos, MercuryRot } from "./Animations/MercuryAnim";
import gsap from "gsap";

const Background = () => {
  const CameraRef = React.useRef(null);

  React.useLayoutEffect(() => {
      //gsap.to(CameraRef.current.position, {
        //x: 0,
       //y: 35,
        //z: 225,
        //duration: 2,
     //});
  });

  return (
    <section className="BackgroundContainer">
      <Canvas>
        <PerspectiveCamera
          ref={CameraRef}
          rotation={[-0.28, -0.1, 0]}
          position={[0, 35, 225]}
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
    </section>
  );
};

export default Background;
