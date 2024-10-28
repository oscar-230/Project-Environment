import React from 'react'

const Floor = () => {
  return (
    <mesh name='floor' rotation-x={-Math.PI * 0.5} 
        position={[0, -2.5, 0]} 
        receiveShadow >
        <planeGeometry args={[10,10]} />
        <meshStandardMaterial color="white" 
        transparent opacity={0.5} />
    </mesh>
  )
}

export default Floor;
