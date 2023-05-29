import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import saturnModel from './saturn_project.glb';
import { useFrame } from '@react-three/fiber';

export function Saturn(props) {
  const { nodes, materials } = useGLTF(saturnModel);
  const group = useRef(null);

  useFrame(() => {
    group.current.rotation.y += 0.0055;
  })

  return (
    <group position={[-150,0,70]} ref={group} {...props} dispose={null}>
      <group scale={5}>
        <mesh geometry={nodes.pSphere1_aiStandardSurface1_0.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.pTorus1_aiStandardSurface2_0.geometry} material={materials.aiStandardSurface2} scale={[1.886, 0.014, 1.886]} />
      </group>
    </group>
  )
}

useGLTF.preload('/saturn_project.glb')
