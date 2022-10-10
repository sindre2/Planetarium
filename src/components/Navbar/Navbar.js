import { NavItems, Nav, NavList } from "./navbarStyles";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavItems to="/home">Planetarium</NavItems>

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
          <li>
            <NavItems to="/pluto">Pluto</NavItems>
          </li>
        </NavList>

        <NavItems to="/contact">Contact</NavItems>
      </Nav>
    </>
  );
};

export default Navbar;
