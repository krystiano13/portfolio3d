import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import seredipModel from './seredip.glb';
import { useFrame } from '@react-three/fiber';

export function Seredip(props) {
  const { nodes, materials } = useGLTF(seredipModel);
  const group = useRef(null);

  useFrame(() => {
    group.current.rotation.y += 0.005;
  })

  return (
    <group position={[-25,0,150]} scale={6} ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.defaultMat} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/seredip.glb')
