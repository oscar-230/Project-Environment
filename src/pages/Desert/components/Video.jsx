import { useVideoTexture, RoundedBox } from "@react-three/drei";
import { useCallback, useState } from "react";

const Video = (props) => {
    const texture = useVideoTexture("/videos/scarcity.mp4", {
        muted: true,
        loop: true,
        start: true
    });

    const [pause, setPause] = useState(false);

    const handleVideo = useCallback(
        (e) => {
            e.stopPropagation();
            pause ? texture.image.play() : texture.image.pause();
            setPause(!pause)
        },
        [pause, setPause, texture]
    );

    return (
        <mesh {...props} 
            position={[22.8,20,-22.4]} 
            scale={2.5}
            rotation={[0,-0.7,0]}
            radius={0.5}
            onClick={handleVideo}
            >
            <planeGeometry args={[3,2]} />
            <meshBasicMaterial map={texture} toneMapped={false} />
        </mesh>
    );
};

export default Video;