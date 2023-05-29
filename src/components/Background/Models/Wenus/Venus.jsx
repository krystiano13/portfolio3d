import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import venusModel from "./planet_venus.glb";
import { useFrame } from "@react-three/fiber";

export function Venus(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(venusModel);
  const { actions } = useAnimations(animations, group);
  useFrame(() => {
    group.current.rotation.y += 0.00075;
  })
  return (
    <group scale={[0.005,0.005,0.005]} position={[10,0,30]} ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={61.518}
        >
          <group name="Root">
            <group
              name="Camera"
              position={[48.908, -38.435, -0.002]}
              rotation={[1.572, 0.888, -0.154]}
              scale={4.287}
            />
            <group name="Ceres" scale={9.385}>
              <mesh
                name="Ceres_0"
                geometry={nodes.Ceres_0.geometry}
                material={materials.Material}
              />
            </group>
            <group name="Point" position={[24.324, -3.709, 6.099]}>
              <group name="Point_1" />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/planet_venus.glb");
