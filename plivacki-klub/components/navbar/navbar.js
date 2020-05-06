import { NavbarBrand, Navbar, Nav, NavItem, NavLink } from "reactstrap";

// navbar component, dynamically listed NavItems depending on user role
// dynamically show NavItems depending on existing token (activation and login should have hidden NavItems)
const CustomNavbar = ({ hideNav = false }) => {
  return (
    <Navbar color="dark" dark={true} expand="md">
      <NavbarBrand href="/">Plivacki klub</NavbarBrand>
      <Nav className="mr-auto" navbar hidden={hideNav}>
        <NavItem>
          <NavLink href="">Klubovi</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="">Grupe</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default CustomNavbar;
