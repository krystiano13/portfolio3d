import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
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
import { defaultPos, defaultRot } from "./Animations/DefaultAnim";
import gsap from "gsap";

const Background = ({ animState }) => {
  const CameraRef = React.useRef(null);

  React.useEffect(() => {
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
  }, [animState, CameraRef.current]);

  return (
    <section className="BackgroundContainer">
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
    </section>
  );
};

export default Background;
