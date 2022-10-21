import React, { useEffect } from 'react';
import { inputManagerState } from './store';
import { useRecoilState } from 'recoil';

export const InputManager = () => {
  const [inputState, setInputState] = useRecoilState(inputManagerState);

  const handleKeyDown = (event) => {
    const { key } = event;
    // console.log('keyDown (event): ', key);

    !inputState.includes(key) &&
      setInputState((state) => {
        // console.log('keyDown state: ', state);
        // console.log('keyDown state update: ', [...state, key]);
        return [...state, key];
      });

    // console.log('keyDown: ', inputState);
  };

  const handleKeyUp = (event) => {
    const { key } = event;
    // console.log('keyUp (event): ', key);

    inputState.includes(key) &&
      setInputState((state) => {
        // console.log('keyUp state: ', state);
        // console.log('keyUp state: ', [
        //   ...state.filter((stateKey) => stateKey !== key),
        // ]);
        return [...state.filter((stateKey) => stateKey !== key)];
      });

    // console.log('keyUp: ', inputState);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  });

  return <></>;
};
