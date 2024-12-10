import { Environment, Stars } from "@react-three/drei";

const EnvironmentSetup = ({ isDay }) => (
  <>
    <Environment files={isDay ? "/hdris/sky/sky3.hdr" : "/hdris/sky/sky2.hdr"} background />
    {!isDay && <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />}
  </>
);

export default EnvironmentSetup;
