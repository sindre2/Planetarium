import styled from "styled-components";

export const PlanetContainer = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: 100px 100px 100px 100px 100px 100px;
  grid-template-columns: 34% 30% 25%;
  grid-gap: 10px;
  /* grid-template-columns:

  "title title"
  "image"
  "image"
  "image"
  "image" 
  "sidebar" 
  "sidebar"
  "sidebar"
  "sidebar"; */

  padding: 40px;
  background-color: blueviolet;
  & > * {
    border: 2px solid red;
  }
  & > img {
    grid-column: span 2;
    object-fit: cover;
  }
  & > h1 {
    grid-column: span 3;
    grid-row: span 1;
  }
  & > main {
    grid-column: 2 / -1;
    grid-row: 1 / 4;
  }
  & > div {
    grid-column: 2 / -1;
    grid-row: 4 / -1;
  }
`;

export const PlanetSection = styled.section`
  display: grid;
  grid-template-rows: 50px;
  border: 2px solid red;
`;

export const PlanetTitle = styled.h1`
  text-align: center;
`;
