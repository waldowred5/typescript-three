import styled from 'styled-components';

export const UIContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
  background: darkslategrey;
  position: absolute;
  bottom: 0;
  left: 20%;
  width: 60%;
  height: 160px;
  box-shadow: 0 0 10px 15px #071d3a inset;
`;

export const StyledParagraph = styled.h1`
  color: white;
`;
