import { TrackballControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import CosAnimatedObject from "./cosAnimatedObject";

const Object = () => {
    return (
        <Canvas
            camera={{
                position: [2, 1, 5],
            }}>
                
            <TrackballControls />
            <ambientLight intensity={1.5} />
            <directionalLight position={[0, 7, 10]} /> 
            <CosAnimatedObject />
        </Canvas>
    );
}

export default Object;