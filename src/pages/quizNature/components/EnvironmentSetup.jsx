import { Environment } from "@react-three/drei";

const EnvironmentSetup = () => (
  <>
    <Environment files={"/hdris/sky/nature.hdr"} background />
  </>
);

export default EnvironmentSetup;
