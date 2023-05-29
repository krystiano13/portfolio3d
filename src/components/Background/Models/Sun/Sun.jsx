import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import SunModel from './sun.glb';

export function Sun(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(SunModel)
  const { actions } = useAnimations(animations, group)
  return (
    <group scale={[2,2,2]} position={[-40,0,0]} ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="3a2aaa22fb3d4b329318a980ad1bf6d1fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="UnstableStarCore" rotation={[-Math.PI / 2, 0, 0]}>
                  <mesh name="UnstableStarCore_1_0" geometry={nodes.UnstableStarCore_1_0.geometry} material={materials.material} />
                </group>
                <group name="UnstableStarref" rotation={[-Math.PI / 2, 0, 0]} scale={1.01}>
                  <mesh name="UnstableStarref_2_0" geometry={nodes.UnstableStarref_2_0.geometry} material={materials.material_1} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/sun.glb')
