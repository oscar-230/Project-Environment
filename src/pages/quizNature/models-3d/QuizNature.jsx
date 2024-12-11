import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

const QuizNature = (props) => {
  const { nodes, materials } = useGLTF('/models/QuizNature.glb')
  return (
    <RigidBody type='fixed' colliders='trimesh'>
    <group {...props} dispose={null} position={[50,0,5]}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="lown_poly_environments_01objcleanermaterialmergergles">
            <mesh
              name="Object_2"
              castShadow
              receiveShadow
              geometry={nodes.Object_2.geometry}
              material={materials.Material}
            />
            <mesh
              name="Object_3"
              castShadow
              receiveShadow
              geometry={nodes.Object_3.geometry}
              material={materials.Material}
            />
            <mesh
              name="Object_4"
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials.Material}
            />
            <mesh
              name="Object_5"
              castShadow
              receiveShadow
              geometry={nodes.Object_5.geometry}
              material={materials.Material}
            />
            <mesh
              name="Object_6"
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={materials.Material}
            />
            <mesh
              name="Object_7"
              castShadow
              receiveShadow
              geometry={nodes.Object_7.geometry}
              material={materials.Material}
            />
            <mesh
              name="Object_8"
              castShadow
              receiveShadow
              geometry={nodes.Object_8.geometry}
              material={materials.Material}
            />
          </group>
        </group>
      </group>
    </group>
    </RigidBody>
  );
};

export default QuizNature;

useGLTF.preload('/models-3d/QuizNature.glb');