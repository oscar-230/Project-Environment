import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

const Nature = (props) => {
  const { scene } = useGLTF("/models/Nature.glb");
  const natureRef = useRef(null);


  const handleNature = (e) => {
    e.stopPropagation();
    console.log("Evento de clic en el objeto:", e);
  };

  return (
    <group {...props} dispose={null} scale={[0.16, 0.16, 0.16]} ref={natureRef}>
      <primitive object={scene} onClick={handleNature} />
    </group>
  );
  
};

export default Nature;

useGLTF.preload("/models-3d/Nature.glb");
