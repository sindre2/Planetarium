import styled from "styled-components";

export const PlanetContainer = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-rows: 40px auto auto auto auto 200px;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
  grid-template-areas:
    "title title title"
    "image image wiki"
    "image image wiki"
    "image image wiki"
    "image image data"
    "none none data";

  padding: 40px;
  background-color: blueviolet;
  & > * {
    border: 2px solid cyan;
  }
  & > img {
    grid-area: image;
  }
  & > .planetTitle {
    grid-area: title;
  }
  & > main {
    grid-area: wiki;
  }
  & > .data {
    grid-area: data;
  }
`;

export const PlanetSection = styled.section`
  height: 100%;
  padding: 5px;
  
  & .data_Container{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  }

  & .planet_Title{
    text-align: center;
  }
  & .data_Text {
    display: flex;
    flex-direction: column;
    padding: 0 3rem;
  }
  & .data_Number{
    display: flex;
    flex-direction: column;
    
  }
`;

export const PlanetTitle = styled.h1`
  text-align: center;
`;
