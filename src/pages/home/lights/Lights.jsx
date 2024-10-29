const Lights = () => {
    return (
        <>
            <ambientLight intensity={0.8} />
            <directionalLight
              position={[0, 5, 0]}
              castShadow
              intensity={2.5}
            />
        </>
    );
};

export default Lights;