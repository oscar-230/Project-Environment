const Lights = () => {
    return (
      <>
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 10, 0]} intensity={2} />
      </>
    );
  };
  
  export default Lights;
  