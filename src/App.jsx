//import Earth from './components/Earth';
import { Canvas } from '@react-three/fiber';
import Nav from './components/Nav';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import Scene from '../public/Scene'


function App() {
  return (
    <div className='flex flex-col items-center bg-white'>
      <Nav></Nav>
      <div className='w-[900px] h-[600px]'>
      <Canvas>
        <ambientLight></ambientLight>
        <OrbitControls></OrbitControls>
        <Suspense fallback={null}>
        
          <Scene></Scene>
        </Suspense>
      </Canvas>
      </div>
      <Canvas>
        <ambientLight></ambientLight>
        <OrbitControls></OrbitControls>
        <Suspense fallback={null}>
        <Scene></Scene>
        </Suspense>
      </Canvas>
      
    </div>
  );
}

export default App;
