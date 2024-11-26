import React, { useEffect, useRef, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import * as THREE from 'three';

const Snake = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models/Snake.glb');
  const { actions } = useAnimations(animations, group);

  const [currentAction] = useState("SnakeArmature|Snake_Idle");

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

  return (
    <RigidBody type="dynamic" colliders="trimesh">
      <group
        ref={group}
        {...props}
        dispose={null}
        position={[20, 11.8, 15]}
        rotation={[0, 10, 0]}
      >
        <group name="Root_Scene">
          <group name="RootNode">
            <group
              name="SnakeArmature"
              rotation={[-Math.PI / 2, 0, 0]}
              scale={45}
            >
              <primitive object={nodes.Root} />
            </group>
            <group
              name="Snake"
              position={[0, 0.022, -0.028]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            >
              <skinnedMesh
                name="Snake_1"
                geometry={nodes.Snake_1.geometry}
                material={materials.DarkGreen}
                skeleton={nodes.Snake_1.skeleton}
              />
              <skinnedMesh
                name="Snake_2"
                geometry={nodes.Snake_2.geometry}
                material={materials.LightGreen}
                skeleton={nodes.Snake_2.skeleton}
              />
              <skinnedMesh
                name="Snake_3"
                geometry={nodes.Snake_3.geometry}
                material={materials.Red}
                skeleton={nodes.Snake_3.skeleton}
              />
              <skinnedMesh
                name="Snake_4"
                geometry={nodes.Snake_4.geometry}
                material={materials.Teeth}
                skeleton={nodes.Snake_4.skeleton}
              />
              <skinnedMesh
                name="Snake_5"
                geometry={nodes.Snake_5.geometry}
                material={materials.Purple}
                skeleton={nodes.Snake_5.skeleton}
              />
              <skinnedMesh
                name="Snake_6"
                geometry={nodes.Snake_6.geometry}
                material={materials.Yellow}
                skeleton={nodes.Snake_6.skeleton}
              />
              <skinnedMesh
                name="Snake_7"
                geometry={nodes.Snake_7.geometry}
                material={materials.DarkRed}
                skeleton={nodes.Snake_7.skeleton}
              />
            </group>
          </group>
        </group>
      </group>
    </RigidBody>
  );
};

export default Snake;

useGLTF.preload("/models-3d/Snake.glb");
