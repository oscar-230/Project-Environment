import React, { useRef, useState, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import * as THREE from 'three';

const Farmer = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/Farmer.glb");
  const { actions } = useAnimations(animations, group);
  const [currentAction] = useState("CharacterArmature|Wave");

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
    <RigidBody type="fixed" colliders="trimesh">
    <group ref={group} {...props} 
        dispose={null}
        position={[-18,11.8,-12]} 
        scale={1.1} 
        rotation={[0,1,0]}
        >
      <group name="Root_Scene">
        <group name="RootNode">
          <group name="CharacterArmature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root} />
          </group>
          <group name="Farmer_Feet" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name="Farmer_Feet_1"
              geometry={nodes.Farmer_Feet_1.geometry}
              material={materials.Brown2}
              skeleton={nodes.Farmer_Feet_1.skeleton}
            />
            <skinnedMesh
              name="Farmer_Feet_2"
              geometry={nodes.Farmer_Feet_2.geometry}
              material={materials.Brown}
              skeleton={nodes.Farmer_Feet_2.skeleton}
            />
          </group>
          <skinnedMesh
            name="Farmer_Pants"
            geometry={nodes.Farmer_Pants.geometry}
            material={materials.LightBlue}
            skeleton={nodes.Farmer_Pants.skeleton}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <group name="Farmer_Body" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name="Farmer_Body_1"
              geometry={nodes.Farmer_Body_1.geometry}
              material={materials.Brown}
              skeleton={nodes.Farmer_Body_1.skeleton}
            />
            <skinnedMesh
              name="Farmer_Body_2"
              geometry={nodes.Farmer_Body_2.geometry}
              material={materials.LightBlue}
              skeleton={nodes.Farmer_Body_2.skeleton}
            />
            <skinnedMesh
              name="Farmer_Body_3"
              geometry={nodes.Farmer_Body_3.geometry}
              material={materials.Skin}
              skeleton={nodes.Farmer_Body_3.skeleton}
            />
            <skinnedMesh
              name="Farmer_Body_4"
              geometry={nodes.Farmer_Body_4.geometry}
              material={materials.Beige}
              skeleton={nodes.Farmer_Body_4.skeleton}
            />
          </group>
          <group name="Farmer_Head" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name="Farmer_Head_1"
              geometry={nodes.Farmer_Head_1.geometry}
              material={materials.Skin}
              skeleton={nodes.Farmer_Head_1.skeleton}
            />
            <skinnedMesh
              name="Farmer_Head_2"
              geometry={nodes.Farmer_Head_2.geometry}
              material={materials.Beige}
              skeleton={nodes.Farmer_Head_2.skeleton}
            />
            <skinnedMesh
              name="Farmer_Head_3"
              geometry={nodes.Farmer_Head_3.geometry}
              material={materials.Eyebrows}
              skeleton={nodes.Farmer_Head_3.skeleton}
            />
            <skinnedMesh
              name="Farmer_Head_4"
              geometry={nodes.Farmer_Head_4.geometry}
              material={materials.Red}
              skeleton={nodes.Farmer_Head_4.skeleton}
            />
            <skinnedMesh
              name="Farmer_Head_5"
              geometry={nodes.Farmer_Head_5.geometry}
              material={materials.Eye}
              skeleton={nodes.Farmer_Head_5.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
    </RigidBody>
  );
};

export default Farmer;

useGLTF.preload("/models-3d/Farmer.glb");