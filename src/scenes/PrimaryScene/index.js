import React, { useRef } from 'react';
// import { ControlsTrackball } from '../../components/ControlsTrackball';
import { inputManagerState } from '../../components/InputManager/store';
import { useFrame } from '@react-three/fiber';
import { useRecoilValue } from 'recoil';

export const PrimaryScene = () => {
  const meshRef = useRef();
  const inputState = useRecoilValue(inputManagerState);

  const moveSpeed = 0.03;

  useFrame(() => {
    if (inputState.includes('w')) {
      meshRef.current.rotation.x += moveSpeed;
    }

    if (inputState.includes('s')) {
      meshRef.current.rotation.x -= moveSpeed;
    }

    if (inputState.includes('a')) {
      meshRef.current.rotation.y += moveSpeed;
    }

    if (inputState.includes('d')) {
      meshRef.current.rotation.y -= moveSpeed;
    }
  });

  return (
    <>
      <mesh ref={meshRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'cyan'} />
      </mesh>
    </>
  );
};
