import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { MeshStandardMaterial } from 'three';

const DesertStagingModel = (props) => {
  const { scene } = useGLTF("/models/DesertStaging.glb");
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
    <group {...props} dispose={null} scale={[2, 2, 2]} ref={DesertModelRef} castShadow receiveShadow>
      <primitive object={scene} />
    </group>
  );
  
};

export default DesertStagingModel;

useGLTF.preload("/models-3d/DesertStagingModel.glb");
