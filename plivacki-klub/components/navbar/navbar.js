import styles from "./navbar.module.css";
import {
  NavbarBrand,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  NavbarToggler,
  Collapse,
  Button
} from "reactstrap";
import { useState } from "react";
import Router from "next/router";

// navbar component, dynamically listed NavItems depending on user role
// dynamically show NavItems depending on existing token (activation and login should have hidden NavItems)
const CustomNavbar = ({ hideNav = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const logOut = () => {
    localStorage.removeItem("token");
    Router.push("/users/login");
  };

  return (
    <Navbar color="dark" dark={true} expand="md">
      <NavbarBrand href="/">Plivacki klub</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar hidden={hideNav}>
          <NavItem>
            <NavLink href="/clubs">Clubs</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/groups">Groups</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/users">Users</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/tasks">Tasks</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/attendances">Attendances</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/notifications">Notifications</NavLink>
          </NavItem>
          <NavItem>
            <Button onClick={logOut} color="primary">Log out</Button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
