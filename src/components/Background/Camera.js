import React from "react";
import { PerspectiveCamera } from "@react-three/drei";
import PropTypes from "prop-types";
import { useFrame } from "@react-three/fiber";

const Camera = ({ CameraRef, animState }) => {

  useFrame(() => {
    if (animState == 0) {
      CameraRef.current.position.x += 0.01;
      CameraRef.current.position.z -= 0.01;
      CameraRef.current.rotation.y += 0.0001;
    }
  });

  return (
    <PerspectiveCamera
      ref={CameraRef}
      rotation={[-0.28, -0.1, 0]}
      position={[0, 35, 200]}
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
