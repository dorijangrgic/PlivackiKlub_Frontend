import { NavbarBrand, Navbar, Nav, NavItem, NavLink } from "reactstrap";

// navbar component, dynamically listed NavItems depending on user role
const CustomNavbar = () => {
  return (
    <Navbar color="dark" dark={true} expand="md">
      <NavbarBrand href="">Plivacki klub</NavbarBrand>
      <Nav className="mr-auto" navbar>
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
