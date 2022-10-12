import styled, { keyframes } from "styled-components";

const moveAstronaut = keyframes`
    100% { -moz-transform: translate(-160px, -160px);}
    100% { -webkit-transform: translate(-160px, -160px);}
`;
const rotateAstronaut = keyframes`
    100% { -moz-transform: rotate(-720deg)};
    100% { -webkit-transform: rotate(-720deg)};
`;
export const Wrapper404 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20vh;
  position: relative;
`;
export const Image404 = styled.img`
  pointer-events: none;
  width: 40%;
  &::selection {
    background: transparent;
  }
`;

export const AstronautWrapper = styled.div`
  z-index: 110 !important;
  width: 15%;
  position: absolute;
  top: 80%;
  right: 80%;
  will-change: transform;
  animation: ${moveAstronaut} 50s infinite linear both alternate;
`;

export const Astronaut = styled.img`
  pointer-events: none;
  animation: ${rotateAstronaut} 200s infinite linear both alternate;
  &::selection {
    background: transparent;
  }
`;
