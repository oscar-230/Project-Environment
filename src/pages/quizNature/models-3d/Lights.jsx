import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

const Lights = () => {
  const directionalLightHelper = useRef();
  useHelper(directionalLightHelper, DirectionalLightHelper);

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight
        //ref={directionalLightHelper} -40
        color={"white"}
        position={[50, 40, 20]}
        intensity={10}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-left={-80}
        shadow-camera-right={80}
        shadow-camera-top={85}
        shadow-camera-bottom={-85}
      />
    </>
  );
};

export default Lights;
