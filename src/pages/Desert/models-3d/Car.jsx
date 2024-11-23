import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations, KeyboardControls } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier';
import Ecctrl, { EcctrlAnimation, EcctrlJoystick } from 'ecctrl'


const Car = (props) => {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF("/models/Car.glb");
    const { actions } = useAnimations(animations, group);
    const [currentAction, setCurrentAction] = useState("Idle");

    const keyboardMap = [
        { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
        { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
        { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
        { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
        { name: 'jump', keys: ['Space'] },
        { name: 'run', keys: ['Shift'] },
        { name: 'action1', keys: ['1'] },
        { name: 'action2', keys: ['2'] },
        { name: 'action3', keys: ['3'] },
        { name: 'action4', keys: ['KeyF'] }
      ]
    
    const url = "models/Car.glb"

    console.log(animations);
    

    return (

        <KeyboardControls map={keyboardMap}>

            <Ecctrl
                capsuleHalfHeight={0.3}
                floatingDis={0.4}
                camInitDis={-3.5}
                camMinDis={-2}
                camMaxDis={-30}
                maxVelLimit={3.5}
                position={[13,15,1]}
                >

                <group ref={group} {...props} dispose={null} scale={0.4} position={[0, -0.6, 0]}>
                    <group name="Sketchfab_Scene">
                        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.379}>
                            <group
                                name="b7442e26e25842a8b9888e6c536fe8d3fbx"
                                rotation={[Math.PI / 2, 0, 0]}
                                scale={0.01}>
                                    <group name="Object_2">
                                        <group name="RootNode">
                                            <group name="Car" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                                                <group name="Object_5">
                                                    <primitive object={nodes._rootJoint} />
                                                        <skinnedMesh
                                                            name="Object_78"
                                                            geometry={nodes.Object_78.geometry}
                                                            material={materials.Mat_Robot}
                                                            skeleton={nodes.Object_78.skeleton}
                                                        />
                                                            <group name="Object_77" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                                                </group>
                                            </group>
                                        <group name="Msh_Carro" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                                    </group>
                                </group>
                            </group>
                        </group>
                    </group>
                </group>

          

            </Ecctrl>

        </KeyboardControls>
    );
};

export default Car;

useGLTF.preload("/models-3d/Car.glb");