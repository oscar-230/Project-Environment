import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { RigidBody } from "@react-three/rapier";

const DesertStagingModel = (props) => {
  const { nodes, materials } = useGLTF("/models/DesertStaging.glb");
  const DesertModelRef = useRef(null);

  return (
    <RigidBody type="fixed" colliders="trimesh">
      <group {...props} dispose={null} scale={30} ref={DesertModelRef} receiveShadow>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.024}>
          <group position={[-32.598, -30.772, 15.287]} rotation={[0, 0, -1.844]} scale={0.159}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.PALM5_0.geometry}
              material={materials.Green}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.PALM5_1.geometry}
              material={materials.Brown}
            />
          </group>
          <group position={[-29.726, -27.111, 14.705]} rotation={[0, 0, -1.531]} scale={0.159}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.PALM5_003_0.geometry}
              material={materials.Green}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.PALM5_003_1.geometry}
              material={materials.Brown}
            />
          </group>
          <group
            position={[-27.698, -28.731, 15.056]}
            rotation={[-0.245, -0.113, 1.251]}
            scale={0.167}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.PALM3_006_0.geometry}
              material={materials.Green}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.PALM3_006_1.geometry}
              material={materials.Brown}
            />
          </group>
          <group
            position={[-22.991, -29.505, 14.531]}
            rotation={[-0.269, -0.02, 0.902]}
            scale={0.167}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.PALM3_007_0.geometry}
              material={materials.Green}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.PALM3_007_1.geometry}
              material={materials.Brown}
            />
          </group>
          <group
            position={[-22.451, -6.177, -21.609]}
            rotation={[-0.027, -0.002, 0.002]}
            scale={5.941}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane_006_0.geometry}
              material={materials.Camel}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane_006_1.geometry}
              material={materials.eyes}
            />
          </group>
          <group position={[-3.808, -25.506, 15.187]} rotation={[0, 0, -1.549]} scale={0.867}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_114_0.geometry}
              material={materials.Roof}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_114_1.geometry}
              material={materials.House}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_114_2.geometry}
              material={materials.Material_002}
            />
          </group>
          <group
            position={[-7.546, -30.696, 14.109]}
            rotation={[0, 0, -1.549]}
            scale={[0.242, 0.191, 0.103]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_003_0.geometry}
              material={materials.door}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_003_1.geometry}
              material={materials.wood}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_003_2.geometry}
              material={materials.House2}
            />
          </group>
          <group
            position={[-2.39, -29.262, 14.133]}
            rotation={[0, 0, -2.006]}
            scale={[0.242, 0.191, 0.103]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_002_0.geometry}
              material={materials.door}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_002_1.geometry}
              material={materials.wood}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_002_2.geometry}
              material={materials.House2}
            />
          </group>
          <group
            position={[1.407, -23.893, 14.575]}
            rotation={[0, 0, -0.987]}
            scale={[0.242, 0.191, 0.103]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_005_0.geometry}
              material={materials.door}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_005_1.geometry}
              material={materials.wood}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_005_2.geometry}
              material={materials.House2}
            />
          </group>
          <group
            position={[-3.152, -18.414, 14.474]}
            rotation={[-0.015, -0.033, 0]}
            scale={[0.242, 0.191, 0.103]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_008_0.geometry}
              material={materials.door}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_008_1.geometry}
              material={materials.wood}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_008_2.geometry}
              material={materials.House2}
            />
          </group>
          <group
            position={[-9.15, -20.063, 14.159]}
            rotation={[0.052, -0.016, 0.532]}
            scale={[0.242, 0.191, 0.103]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_010_0.geometry}
              material={materials.door}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_010_1.geometry}
              material={materials.wood}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_010_2.geometry}
              material={materials.House2}
            />
          </group>
          <group
            position={[0.229, -19.587, 14.566]}
            rotation={[0, 0, -0.48]}
            scale={[0.242, 0.191, 0.103]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_076_0.geometry}
              material={materials.door}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_076_1.geometry}
              material={materials.wood}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_076_2.geometry}
              material={materials.House2}
            />
          </group>
          <group position={[-7.082, -21.658, 13.935]} rotation={[0, 0, 0.394]} scale={0.158}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle_0.geometry}
              material={materials.Water}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle_1.geometry}
              material={materials.Well2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle_2.geometry}
              material={materials.Well}
            />
          </group>
          <group
            position={[-8.769, -26.717, 16.451]}
            rotation={[0, 0, -2.923]}
            scale={[0.398, 0.941, 0.158]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Icosphere_025_0.geometry}
              material={materials.Leaves}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Icosphere_025_1.geometry}
              material={materials.Trunk}
            />
          </group>
          <group position={[-24.2, -24.364, 22.75]} rotation={[0, 0, 0.689]} scale={0.307}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane_014_0.geometry}
              material={materials.eyes}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane_014_1.geometry}
              material={materials.eagle3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane_014_2.geometry}
              material={materials.Eagle2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane_014_3.geometry}
              material={materials.Eagle1}
            />
          </group>
          <group position={[-27.205, -20.671, 22.75]} rotation={[0, 0, -0.62]} scale={0.307}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane_015_0.geometry}
              material={materials.eyes}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane_015_1.geometry}
              material={materials.eagle3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane_015_2.geometry}
              material={materials.Eagle2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane_015_3.geometry}
              material={materials.Eagle1}
            />
          </group>
          <group position={[-21.493, -18.882, 22.75]} rotation={[0, 0, -2.283]} scale={0.307}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane_016_0.geometry}
              material={materials.eyes}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane_016_1.geometry}
              material={materials.eagle3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane_016_2.geometry}
              material={materials.Eagle2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane_016_3.geometry}
              material={materials.Eagle1}
            />
          </group>
          <group position={[-20.263, -15.734, 14.705]} rotation={[0, 0, 2.045]} scale={0.159}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.PALM5_003001_0.geometry}
              material={materials.Green}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.PALM5_003001_1.geometry}
              material={materials.Brown}
            />
          </group>
          <group position={[-20.3, -14.556, 14.243]} rotation={[0, 0, 0.386]} scale={0.171}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.PALM5_003002_0.geometry}
              material={materials.Green}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.PALM5_003002_1.geometry}
              material={materials.Brown}
            />
          </group>
          <group
            position={[-25.304, -27.443, 15.056]}
            rotation={[-0.245, -0.113, 1.251]}
            scale={0.167}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.PALM3_006001_0.geometry}
              material={materials.Green}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.PALM3_006001_1.geometry}
              material={materials.Brown}
            />
          </group>
          <group position={[-19.45, -23.356, 14.738]} rotation={[0.14, -0.231, 2.952]} scale={0.167}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.PALM3_006002_0.geometry}
              material={materials.Green}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.PALM3_006002_1.geometry}
              material={materials.Brown}
            />
          </group>
          <group position={[-19.782, -20.558, 15.056]} rotation={[0.079, 0.035, 2.958]} scale={0.167}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.PALM3_006003_0.geometry}
              material={materials.Green}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.PALM3_006003_1.geometry}
              material={materials.Brown}
            />
          </group>
          <group
            position={[-22.273, -3.011, -21.597]}
            rotation={[-0.027, 0.003, -0.172]}
            scale={5.941}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane_006001_0.geometry}
              material={materials.Camel}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane_006001_1.geometry}
              material={materials.eyes}
            />
          </group>
          <group
            position={[-21.331, 0.386, -21.409]}
            rotation={[-0.026, 0.008, -0.365]}
            scale={5.941}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane_006002_0.geometry}
              material={materials.Camel}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane_006002_1.geometry}
              material={materials.eyes}
            />
          </group>
          <group
            position={[6.552, 27.874, 17.466]}
            rotation={[0, 0, 1.112]}
            scale={[0.473, 1.118, 0.188]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Icosphere_025001_0.geometry}
              material={materials.Leaves}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Icosphere_025001_1.geometry}
              material={materials.Trunk}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_0.geometry}
            material={materials.material_25}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003_0.geometry}
            material={materials.Sand}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_007_0.geometry}
            material={materials.Cactus}
            position={[-5.93, 0.128, 15.037]}
            rotation={[0, -0.057, Math.PI]}
            scale={0.387}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane_0.geometry}
            material={materials.Water}
            position={[-23.789, -20.932, 12.476]}
            scale={10.388}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_018_0.geometry}
            material={materials.Cactus}
            position={[-30.27, 1.812, 13.646]}
            rotation={[0, 0, -2.453]}
            scale={0.596}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_011_0.geometry}
            material={materials.Plant}
            position={[-18.055, 2.631, 14.013]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.067, 0.067, 0.067]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_049_0.geometry}
            material={materials.Cactus}
            position={[4.712, 0.167, 42.642]}
            rotation={[0, 0, 1.815]}
            scale={0.596}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_050_0.geometry}
            material={materials.Cactus}
            position={[-33.809, -4.094, 13.646]}
            rotation={[0, 0, 2.365]}
            scale={0.596}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_070_0.geometry}
            material={materials.Cactus_2}
            position={[-6.371, -16.896, 14.792]}
            rotation={[0.218, -0.004, -0.017]}
            scale={[0.087, 0.029, 0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_065_0.geometry}
            material={materials.Cactus}
            position={[-20.732, 1.803, 14.241]}
            rotation={[0, -0.057, 0]}
            scale={0.387}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere_0.geometry}
            material={materials.Rocks}
            position={[16.165, 29.509, 13.988]}
            rotation={[0, 0, -1.766]}
            scale={[2.27, 9.889, 3.462]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_108_0.geometry}
            material={materials.material}
            position={[-8.611, 2.434, 16.145]}
            rotation={[0, 0, -0.86]}
            scale={0.192}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere_013_0.geometry}
            material={materials.Rocks}
            position={[-11.187, -2.85, 17.804]}
            scale={[0.237, 1.131, 0.401]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere_028_0.geometry}
            material={materials.Rocks}
            position={[-25, -21.41, 11.662]}
            rotation={[0.721, -0.908, -1.007]}
            scale={[0.678, 1.917, 0.663]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_121_0.geometry}
            material={materials.Bones}
            position={[13.052, 21.465, 14.421]}
            rotation={[1.174, 0.691, -3.027]}
            scale={0.305}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_007001_0.geometry}
            material={materials.Cactus}
            position={[-20.064, 13.436, 16.785]}
            rotation={[0, -0.057, Math.PI]}
            scale={0.387}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_007002_0.geometry}
            material={materials.Cactus}
            position={[23.806, 12.059, 16.921]}
            rotation={[0, -0.057, Math.PI]}
            scale={0.387}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_007003_0.geometry}
            material={materials.Cactus}
            position={[-12.813, 30.874, 15.683]}
            rotation={[0, -0.057, Math.PI]}
            scale={0.387}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_007004_0.geometry}
            material={materials.Cactus}
            position={[21.633, -22.603, 16.762]}
            rotation={[0, -0.057, Math.PI]}
            scale={0.387}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_007005_0.geometry}
            material={materials.Cactus}
            position={[37.619, -16.513, 15.868]}
            rotation={[0, -0.057, Math.PI]}
            scale={0.387}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere_013001_0.geometry}
            material={materials.Rocks}
            position={[29.242, 21.882, 17.804]}
            rotation={[0, 0, -1.253]}
            scale={[0.237, 1.131, 0.401]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere_013002_0.geometry}
            material={materials.Rocks}
            position={[38.033, -37.028, 13.018]}
            rotation={[-2.321, -0.019, -1.928]}
            scale={[0.237, 1.131, 0.401]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_108001_0.geometry}
            material={materials.material}
            position={[-0.365, -25.795, 13.473]}
            rotation={[0, 0, -1.71]}
            scale={0.192}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_108002_0.geometry}
            material={materials.material}
            position={[32.256, 22.099, 16.144]}
            rotation={[0, 0, 3.141]}
            scale={0.192}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_108003_0.geometry}
            material={materials.material}
            position={[35.318, -38.006, 13.647]}
            rotation={[0.01, 0.006, -2.883]}
            scale={0.214}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_011001_0.geometry}
            material={materials.Plant}
            position={[-5.69, -18.529, 13.82]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.056, 0.056, 0.056]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_011002_0.geometry}
            material={materials.Plant}
            position={[14.589, 23.248, 14.045]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.067, 0.067, 0.067]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_007006_0.geometry}
            material={materials.Cactus}
            position={[-21.785, 14.266, 16.972]}
            rotation={[0, -0.057, Math.PI]}
            scale={0.387}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_007007_0.geometry}
            material={materials.Cactus}
            position={[-23.291, 20.598, 16.953]}
            rotation={[0.045, -0.036, -2.249]}
            scale={0.387}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_050001_0.geometry}
            material={materials.Cactus}
            position={[23.69, -23.968, 16.389]}
            rotation={[0, 0, -1.466]}
            scale={0.596}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_049001_0.geometry}
            material={materials.Cactus}
            position={[24.797, -27.642, 16.389]}
            rotation={[0, 0, 2.977]}
            scale={0.596}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_018001_0.geometry}
            material={materials.Cactus}
            position={[17.203, -26.277, 16.389]}
            scale={0.596}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_018002_0.geometry}
            material={materials.Cactus}
            position={[-25.603, 26.679, 16.528]}
            rotation={[0, 0, -1.532]}
            scale={0.596}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_049002_0.geometry}
            material={materials.Cactus}
            position={[-26.674, 19.038, 16.528]}
            rotation={[0, 0, 1.445]}
            scale={0.596}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_050002_0.geometry}
            material={materials.Cactus}
            position={[-23.046, 20.286, 16.528]}
            rotation={[0, 0, -2.998]}
            scale={0.596}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_011003_0.geometry}
            material={materials.Plant}
            position={[0.72, 2.631, 42.372]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.067, 0.067, 0.067]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_050003_0.geometry}
            material={materials.Cactus}
            position={[20.285, 13.727, 16.401]}
            rotation={[0, 0, -2.239]}
            scale={0.596}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_018003_0.geometry}
            material={materials.Cactus}
            position={[14.03, 16.607, 16.401]}
            rotation={[0, 0, -0.773]}
            scale={0.596}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere001_0.geometry}
            material={materials.Rocks}
            position={[12.277, 31.038, 13.988]}
            rotation={[0, 0, -1.766]}
            scale={[1.327, 2.963, 5.06]}
          />
        </group>
      </group>
    </RigidBody>
  );
  
};

export default DesertStagingModel;

useGLTF.preload("/models-3d/DesertStagingModel.glb");
