import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Earth = (props) => {
  const { nodes, materials } =  useGLTF("models/Earth.glb");

  return (
    <group {...props} dispose={null}>
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
     {/* <mesh
        position={[0, -1.5, 0]} // Ajusta la posición de la sombra
        rotation={[-Math.PI / 2, 0, 0]} // Asegúrate de que esté en la dirección correcta
        receiveShadow
      >
        <planeGeometry args={[5, 5, 5]} /> 
        <meshStandardMaterial color="white" opacity={0.5} transparent /> 
      </mesh> */ }
    </group> 

  );
};

export default Earth;

useGLTF.preload("models/Earth.glb");


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