import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Earth = (props) => {
  const { nodes, materials } =  useGLTF("models/Earth.glb");

  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group name="Sphere" rotation={[-3.138, 0.873, 3.14]}>
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
};

export default Earth;

useGLTF.preload("models/earth.glb");


/*const EarthModel = (props) => {
  const { nodes, materials } = useGLTF("models/Earth.glb");
  const earthRef = useRef(null);

  console.log(nodes, materials); // Verifica la carga del modelo

  const handleEarthClick = (e) => {
    e.stopPropagation();
    console.log("Earth clicked", e);
  };

  useFrame((state, delta) => {
    const { forward } = get();

    if(forward){
        earthRef.current.position.x = Math.cos(state.clock.elapsedTime * 2)
        earthRef.current.position.y += 1 * delta;
    }
    
    const pressed = get().back
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={earthRef}
        name="Earth"
        geometry={nodes.Cube001.geometry} // Acceso correcto a la geometría
        material={materials['Default OBJ']} // Acceso correcto al material
        onClick={(e) => handleEarthClick(e)}
      />
    </group>
  );
};

export default EarthModel;

useGLTF.preload("models/Earth.glb");*/