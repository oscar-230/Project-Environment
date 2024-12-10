import { Text3D } from "@react-three/drei";

const Text3DHeader = () => (
  <Text3D
    font="/fonts/Inter_Bold.json"
    size={5}
    color="#007BFF"
    bevelEnabled
    bevelSize={0.02}
    bevelThickness={0.01}
    height={0.2}
    position={[30, 25, 60]}
    rotation={[0, -3.3, 0]}
  >
    Cuidemos el Agua!
    <meshNormalMaterial />
  </Text3D>
);

export default Text3DHeader;
