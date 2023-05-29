import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import marsModel from './mars.glb';
import { useFrame } from '@react-three/fiber';

export function Mars(props) {
  const { nodes, materials } = useGLTF(marsModel)
  const group = useRef(null);

  useFrame(() => {
    group.current.rotation.y += 0.0065;
  })

  return (
    <group scale={[3,3,3]} position={[-40,0,-85]} ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials['Material.001']} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/mars.glb')
