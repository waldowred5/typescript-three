import React, { useRef } from 'react';
import { extend, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';

extend({ TrackballControls });

export const ControlsTrackball = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  const controls = useRef();

  useFrame(() => {
    if (!controls.current) {
      return;
    }

    controls.current.update();
  });

  const mouseButtons = {
    LEFT: THREE.MOUSE.PAN,
    MIDDLE: THREE.MOUSE.ZOOM,
    RIGHT: THREE.MOUSE.ROTATE,
  };

  return (
    <trackballControls
      ref={controls}
      args={[camera, domElement]}
      noZoom={false}
      noPan={true}
      rotateSpeed={6}
      dynamicDampingFactor={0.1}
      mouseButtons={mouseButtons}
    />
  );
};
