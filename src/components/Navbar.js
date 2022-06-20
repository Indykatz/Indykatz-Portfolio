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
        <Link to="/about">
          <NavbarItems>About</NavbarItems>
        </Link>
        <Link to="/codeNation">
          <NavbarItems>Code Nation</NavbarItems>
        </Link>
      </NavbarContainer>
    </div>
  );
};

export default Navbar;
