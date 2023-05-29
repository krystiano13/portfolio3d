import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import scene from "./scene.glb";

export function Mercury(props) {
  const { nodes, materials } = useGLTF(scene);
  const ModelRef = React.useRef(null);
  useFrame(() => {
    ModelRef.current.rotation.y += 0.001;
  })
  return (
    <group scale={[0.25,0.25,0.25]} ref={ModelRef} {...props} dispose={null}>
      <mesh
        geometry={nodes["Sphere001_Material_#50_0"].geometry}
        material={materials.Material_50}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/scene.glb");
