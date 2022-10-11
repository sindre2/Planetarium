import { NavItems, Nav, NavList } from "./navbarStyles";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavList>
          <li>
            <NavItems to="/home">Planetarium</NavItems>
          </li>
        </NavList>

        <NavList>
          <li>
            <NavItems to="/mercury">Mercury</NavItems>
          </li>
          <li>
            <NavItems to="/venus">Venus</NavItems>
          </li>
          <li>
            <NavItems to="/earth">Earth</NavItems>
          </li>
          <li>
            <NavItems to="/mars">Mars</NavItems>
          </li>
          <li>
            <NavItems to="/jupiter">Jupiter</NavItems>
          </li>
          <li>
            <NavItems to="/saturn">Saturn</NavItems>
          </li>
          <li>
            <NavItems to="/uranus">Uranus</NavItems>
          </li>
          <li>
            <NavItems to="/neptune">Neptune</NavItems>
          </li>
        </NavList>

        <NavList>
          <li>
            <NavItems to="/contact">Contact</NavItems>
          </li>
        </NavList>
      </Nav>
    </>
  );
};

export default Navbar;
