import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

const Forest = (props) => {
  const { scene } = useGLTF("/models/Island.glb");
  const ForestRef = useRef(null);

  const handleForest = (e) => {
    e.stopPropagation();
    console.log("Evento de clic en el objeto:", e);
  };

  return (
    <group {...props} dispose={null} scale={[2, 2, 2]} ref={ForestRef}>
      <primitive object={scene} onClick={handleForest} />
    </group>
  );
  
};

export default Forest;

useGLTF.preload("/models-3d/Forest.glb");
