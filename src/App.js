import React from 'react';
import './App.css';
import { RecoilRoot } from 'recoil';
import { Canvas } from '@react-three/fiber';
import { PrimaryScene } from './scenes/PrimaryScene';
import { InputManager } from './components/InputManager';
import { UI } from './components/ui';
import { StatsPanel } from './components/StatsPanel';

const App = () => {
  return (
    <RecoilRoot>
      <div className="App">
        <UI />
        <Canvas>
          <StatsPanel />
          <InputManager />
          <pointLight position={[1.1, 2.2, 4.4]} />
          <pointLight position={[-1, -2, -4]} />
          <ambientLight intensity={0.1} />
          <perspectiveCamera
            fov={75}
            aspect={window.innerWidth / window.innerHeight}
            near={0.6}
            far={120}
            position={[0, 0, 5]}
          />
          <PrimaryScene />
        </Canvas>
      </div>
    </RecoilRoot>
  );
};

export default App;
