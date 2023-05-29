import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import earthModel from './earth.glb';
import { useFrame } from '@react-three/fiber';

function Earth(props) {
  const { nodes, materials } = useGLTF(earthModel)
  const group = useRef(null);
  useFrame(() => {
    group.current.rotation.y += 0.00065
  })
  return (
    <group scale={[3.5,3.5,3.5]} position={[45,0,-15]} ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials['Scene_-_Root']} scale={1.128} />
    </group>
  )
}

useGLTF.preload('/earth.glb')

export { Earth };
