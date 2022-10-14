import styled from "styled-components";
import { devices } from "../devices";

export const PlanetContainer = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-rows: 40px auto auto auto auto fit-content;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
  z-index: 100;
  grid-template-areas:
    ".     .     title"
    ".     .     wiki"
    "image image wiki"
    "image image wiki"
    "image image data"
    "image image data";

  padding: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  border: 2px solid ${(props) => props.theme.colors.nav_link_hover};
  & > img {
    grid-area: image;
    width: 300px;
    padding-top: 10px;
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
    padding-left: 3rem;
  }
  & > .data {
    grid-area: data;
  }

  @media ${devices.laptopL} {
    & td {
      border-bottom: 1px solid ${(props) => props.theme.colors.white};
    }
  }

  @media ${devices.tablet} {
    padding: 20px;
    grid-template-rows: 40px auto auto auto auto fit-content;
    grid-template-columns: auto auto;
    grid-template-areas:
      "title title"
      "image image"
      "image image"
      "wiki  wiki"
      "data data"
      "data data";
    justify-content: center;

    & > main {
      padding-left: 0;
    }

    & > img {
      width: 200px;
      padding-top: 5px;
      margin: 0 auto;
    }
  }
`;

export const PlanetSection = styled.section`
  height: 100%;

  & .data_Container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  & .planet_Title {
    text-align: left;
    padding-left: 3rem;
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

  @media ${devices.tablet} {
    & td {
      border-bottom: 1px solid ${(props) => props.theme.colors.white};
    }
  }
`;

export const PlanetTitle = styled.h1`
  text-align: center;
`;
