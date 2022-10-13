import { TEXT_AND_CONTENT } from "../../textAndContent/textAndConent";
import { NavItems, Nav, NavList, NavListMain } from "./navbarStyles";

const Navbar = () => {
  const navBar = TEXT_AND_CONTENT.NAVIGATION.NAVIGATION_BAR;
  return (
    <>
      <Nav>
        <NavList>
          <li>
            <NavItems to="/home">{navBar.PLANETARIUM}</NavItems>
          </li>
        </NavList>

        <NavListMain>
          <li>
            <NavItems to={"/" + navBar.MERCURY.toLowerCase()}>
              {navBar.MERCURY}
            </NavItems>
          </li>
          <li>
            <NavItems to={"/" + navBar.VENUS.toLowerCase()}>
              {navBar.VENUS}
            </NavItems>
          </li>
          <li>
            <NavItems to={"/" + navBar.EARTH.toLowerCase()}>
              {navBar.EARTH}
            </NavItems>
          </li>
          <li>
            <NavItems to={"/" + navBar.MARS.toLowerCase()}>
              {navBar.MARS}
            </NavItems>
          </li>
          <li>
            <NavItems to={"/" + navBar.JUPITER.toLowerCase()}>
              {navBar.JUPITER}
            </NavItems>
          </li>
          <li>
            <NavItems to={"/" + navBar.SATURN.toLowerCase()}>
              {navBar.SATURN}
            </NavItems>
          </li>
          <li>
            <NavItems to={"/" + navBar.URANUS.toLowerCase()}>
              {navBar.URANUS}
            </NavItems>
          </li>
          <li>
            <NavItems to={"/" + navBar.NEPTUNE.toLowerCase()}>
              {navBar.NEPTUNE}
            </NavItems>
          </li>
        </NavListMain>

        <NavList>
          <li>
            <NavItems to={"/" + navBar.CONTACT.toLowerCase()}>
              {navBar.CONTACT}
            </NavItems>
          </li>
        </NavList>
      </Nav>
    </>
  );
};

export default Navbar;
