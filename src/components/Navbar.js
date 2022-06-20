import { Link } from "react-router-dom";
import { NavbarContainer, NavbarItems } from "../css/Navbar.styled";
//
const Navbar = () => {
  return (
    <div>
      <NavbarContainer>
        <Link to="/">
          <NavbarItems>Home</NavbarItems>
        </Link>
        <Link to="/About">
          <NavbarItems>About</NavbarItems>
        </Link>
        <Link to="/CodeNation">
          <NavbarItems>Code Nation</NavbarItems>
        </Link>
        <Link to="/Calculator">
          <NavbarItems>Calculator</NavbarItems>
        </Link>
      </NavbarContainer>
    </div>
  );
};

export default Navbar;
