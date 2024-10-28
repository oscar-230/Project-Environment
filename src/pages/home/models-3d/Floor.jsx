import React from 'react'

const Floor = () => {
  return (
    <mesh
      position={[0, -2.75, 0]} // Coloca el plano justo debajo de la Tierra
      rotation={[-Math.PI / 2, 0, 0]} // Asegúrate de que esté horizontal
      receiveShadow
    >
    <planeGeometry args={[15, 15]} /> {/* Ajusta el tamaño del plano */}
    <shadowMaterial opacity={0.1}  /> {/* Material del piso */}
    </mesh>
  )
}

export default Floor;
