const Lights = () => {
  return (
    <>
      <ambientLight intensity={0} />
      <directionalLight
        position={[7, 10, 0]}
        intensity={1}
        castShadow // Esta luz proyectará sombras
        shadow-mapSize-width={1024} // Ajuste para la calidad de las sombras
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
    </>
  );
};

export default Lights;
