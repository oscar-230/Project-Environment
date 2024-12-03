import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const Alpaca = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF("models/Alpaca.glb")
  const { actions } = useAnimations(animations, group)
  const [currentAction] = useState("AnimalArmature|Walk");

  useEffect(() => {
    const action = actions[currentAction];
    if (action) {
      action
        .reset() 
        .fadeIn(0.5) 
        .play(); 
      action.setLoop(THREE.LoopRepeat);
    }

    return () => {
      action?.fadeOut(0.5).stop(); 
    };
  }, [actions, currentAction]);
  
  console.log(actions);
    
  return (
    <RigidBody type="dynamic" colliders="trimesh" >
      <group ref={group} {...props} 
        dispose={null} 
        scale={0.3} 
        position={[20,10,0]}
        rotation={[0,0.5,0]}
        >
      <group name="Root_Scene">
        <group name="RootNode">
          <group name="AnimalArmature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Body} />
            <primitive object={nodes.IKBackLegL} />
            <primitive object={nodes.IKFrontLegL} />
            <primitive object={nodes.IKBackLegR} />
            <primitive object={nodes.IKFrontLegR} />
          </group>
          <group name="Alpaca" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name="Alpaca_1"
              geometry={nodes.Alpaca_1.geometry}
              material={materials.Main_Light}
              skeleton={nodes.Alpaca_1.skeleton}
              castShadow
            />
            <skinnedMesh
              name="Alpaca_2"
              geometry={nodes.Alpaca_2.geometry}
              material={materials.Main}
              skeleton={nodes.Alpaca_2.skeleton}
              castShadow
            />
            <skinnedMesh
              name="Alpaca_3"
              geometry={nodes.Alpaca_3.geometry}
              material={materials.Main_Dark}
              skeleton={nodes.Alpaca_3.skeleton}
              castShadow
            />
            <skinnedMesh
              name="Alpaca_4"
              geometry={nodes.Alpaca_4.geometry}
              material={materials.Muzzle}
              skeleton={nodes.Alpaca_4.skeleton}
              castShadow
            />
            <skinnedMesh
              name="Alpaca_5"
              geometry={nodes.Alpaca_5.geometry}
              material={materials.Hooves}
              skeleton={nodes.Alpaca_5.skeleton}
              castShadow
            />
            <skinnedMesh
              name="Alpaca_6"
              geometry={nodes.Alpaca_6.geometry}
              material={materials.Eyes_Black}
              skeleton={nodes.Alpaca_6.skeleton}
              castShadow
            />
            <skinnedMesh
              name="Alpaca_7"
              geometry={nodes.Alpaca_7.geometry}
              material={materials.Eyes_White}
              skeleton={nodes.Alpaca_7.skeleton}
              castShadow
            />
          </group>
        </group>
      </group>
    </group>
  </RigidBody>
  );
};

export default Alpaca;

useGLTF.preload("/models-3d/Alpaca.glb");