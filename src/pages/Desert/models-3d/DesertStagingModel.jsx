import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { MeshStandardMaterial } from 'three';
import { RigidBody } from "@react-three/rapier";

const DesertStagingModel = (props) => {
  const { nodes, materials, scene } = useGLTF("/models/DesertStaging.glb");
  const DesertModelRef = useRef(null);
  // Habilitar sombras para los objetos del modelo
  scene.traverse((node) => {
    if (node.isMesh) {
      node.castShadow = true;
      node.receiveShadow = true;
      if (node.material) {
        node.material = new MeshStandardMaterial({
          color: node.material.color,
          metalness: 0.7, 
          roughness: 0.7,
        });
      }
    }
  });

  return (
    <RigidBody type="fixed" colliders="trimesh">
      <group {...props} dispose={null} scale={[2, 2, 2]} ref={DesertModelRef} castShadow receiveShadow>
        <primitive object={scene} />
      </group>
    </RigidBody>
  );
  
};

export default DesertStagingModel;

useGLTF.preload("/models-3d/DesertStagingModel.glb");
