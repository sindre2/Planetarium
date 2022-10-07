import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  width: 100%;
  font-size: 1.5em;
  text-align: center;
  height: 100px;
  background: #262321;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex: row;
`;
export const NavItems = styled(NavLink)`
  background: brown;
  color: white;
  height: 2rem;
  margin-right: 0.625rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #fb6012;
  }
`;
