import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

const Desert = (props) => {
  const { scene } = useGLTF("/models/Desert.glb");
  const desertRef = useRef(null);


  const handleDesert = (e) => {
    e.stopPropagation();
    console.log("Evento de clic en el objeto:", e);
  };

  return (
    <group {...props} 
        dispose={null} 
        scale={[6.5, 6.5, 6.5]} 
        position={[1, 3, -2]} 
        rotation={[0,0.7,0]}
        ref={desertRef}>
      <primitive object={scene} onClick={handleDesert} />
    </group>
  );
  
};

export default Desert;

useGLTF.preload("/models/Desert.glb");
