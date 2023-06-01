import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { TextureImporter } from "./TextureImporter";

export const Planet = ({ texturePath, scale, position, rotSpeed }) => {
  const ModelRef = useRef(null);
  const texture = TextureImporter(texturePath);

  useFrame(() => {
    ModelRef.current.rotation.y += rotSpeed;
  });
  return (
    <mesh position={position} scale={scale} ref={ModelRef}>
      <sphereBufferGeometry />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};
