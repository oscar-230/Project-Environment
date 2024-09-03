import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

const CosAnimatedObject = () => {
    const cosRef = useRef();
    const speedBox = 0.05;
    const canvasLimit = 8; 

    useFrame(() => {
        const currentPosition = cosRef.current.position.x;

        cosRef.current.position.y = Math.cos(currentPosition);
        cosRef.current.position.x += speedBox;

        if (currentPosition > canvasLimit) {
            cosRef.current.position.x = -canvasLimit;
        }
    });

    return (
        <mesh ref={cosRef}>
            <boxGeometry args={[1, 1, 1]} />
            <meshPhongMaterial color="white" shininess={50} />
        </mesh>
    );
};

export default CosAnimatedObject;
