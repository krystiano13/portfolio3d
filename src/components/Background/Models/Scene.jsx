import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import scene from './scene.glb';

export function Model(props) {
  const { nodes, materials } = useGLTF(scene)
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['Sphere001_Material_#50_0'].geometry} material={materials.Material_50} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/scene.glb')
