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
        //ref={directionalLightHelper}
        color={"white"}
        position={[40, 40, 30]}
        intensity={15}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-left={-40}
        shadow-camera-right={40}
        shadow-camera-top={35}
        shadow-camera-bottom={-15}
      />
    </>
  );
};

export default Lights;
