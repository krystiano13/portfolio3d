import React , { useEffect } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import PropTypes from "prop-types";
import { useFrame } from "@react-three/fiber";
import gsap from 'gsap';

const Camera = ({ CameraRef, animState }) => {

  useEffect(() => {
    if(animState == -1) {
        gsap.to(CameraRef.current.position, { z : 200, duration : 2 })
    }
  },[]);

  useFrame(() => {
    if (animState == 0 || animState == -1) {
      CameraRef.current.position.x += 0.01;
      CameraRef.current.position.z -= 0.01;
      CameraRef.current.rotation.y += 0.0001;
    }
  });

  return (
    <PerspectiveCamera
      ref={CameraRef}
      rotation={[-0.28, -0.1, 0]}
      position={[0, 35, 1000]}
      fov={75}
      makeDefault
    />
  );
};

Camera.propTypes = {
  CameraRef: PropTypes.any,
  animState: PropTypes.number,
};

export { Camera };
