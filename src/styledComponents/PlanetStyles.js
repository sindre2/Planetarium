import styled from "styled-components";

export const PlanetContainer = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-rows: 40px auto auto auto auto fit-content;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
  z-index: 100;
  grid-template-areas:
    "title title title"
    "image image wiki"
    "image image wiki"
    "image image wiki"
    "image image data"
    "none none data";

  padding: 40px;
  background-color: rgba(0,0,0, 0.5);
  border-radius: 15px;
  border: 2px solid ${(props)=> props.theme.colors.nav_link_hover};
  & > img {
    grid-area: image;
  }
  & > .planet_Title {
    grid-area: title;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
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

  & .data_Container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  & .planet_Title {
    text-align: center;
  }
  & .data_Text {
    padding: 0 3rem;
  }
  & td {
    padding-right: 20px;
  }

  & .data_Number {
    list-style-type: none;
    padding: 0;
    line-height: 1rem;
  }
`;

export const PlanetTitle = styled.h1`
  text-align: center;
`;
