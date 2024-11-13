import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Earth2 = React.forwardRef((props) => {
  const { nodes, materials } =  useGLTF("models/Earth.glb");
  const earthRef = useRef();

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.003;  
    }
  });

  return (
    <group {...props} dispose={null} ref={earthRef} {...props}>
      <group name="Scene">
        <group name="Sphere" 
          position={[0,1,0]}
          rotation={[-3.138, 0.873, 3.14]} 
          scale={[4,4,4]}>
          <mesh
            name="Sphere002"
            castShadow
            receiveShadow
            geometry={nodes.Sphere002.geometry}
            material={materials['Material.009']}
          />
          <mesh
            name="Sphere002_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere002_1.geometry}
            material={materials['Material.008']}
          />
          <mesh
            name="Sphere002_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere002_2.geometry}
            material={materials['Material.010']}
          />
          <mesh
            name="Sphere002_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere002_3.geometry}
            material={materials['Material.005']}
          />
        </group>
      </group>
    </group> 

  );
});

export default Earth2;

useGLTF.preload("models/Earth.glb");