import { NavItems, Nav, NavList } from "./navbarStyles";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavList>
          <NavItems to="/home">Planetarium</NavItems>
          <NavItems to="/mercury">Mercury</NavItems>
          <NavItems to="/venus">Venus</NavItems>
          <NavItems to="/earth">Earth</NavItems>
          <NavItems to="/mars">Mars</NavItems>
          <NavItems to="/jupiter">Jupiter</NavItems>
          <NavItems to="/saturn">Saturn</NavItems>
          <NavItems to="/uranus">Uranus</NavItems>
          <NavItems to="/neptune">Neptune</NavItems>
          <NavItems to="/pluto">Pluto</NavItems>
        </NavList>
      </Nav>
    </>
  );
};

export default Navbar;
