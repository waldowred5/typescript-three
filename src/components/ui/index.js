import React from 'react';
import { StyledParagraph, UIContainer } from './styles';

export const UI = () => {
  return (
    <>
      <UIContainer>
        <StyledParagraph>W / S: Rotate Camera Up / Down</StyledParagraph>
        <StyledParagraph>A / D: Rotate Camera Left / Right</StyledParagraph>
      </UIContainer>
    </>
  );
};
