import React from 'react'
import QuizNature from './models-3d/QuizNature';
import { Canvas } from '@react-three/fiber';
import Navbar from '../../components/Navbar';
import { Physics } from '@react-three/rapier';
import Lights from './models-3d/Lights';
import Car from '../Desert/models-3d/Car';
import NatureEnvironment from './components/NatureEnvironment';
import EnvironmentSetup from './components/EnvironmentSetup';
const World = (onLogout) => {
  return (
    <div className="canvas-container-staging">
        <Navbar onLogout={onLogout}/>
        <Canvas shadows>
          <EnvironmentSetup />
            <Physics debug={false}>
                <NatureEnvironment />
                <Lights />
                <Car />
                <QuizNature />
            </Physics>
        </Canvas>     
    </div>
  );
};

export default World;
