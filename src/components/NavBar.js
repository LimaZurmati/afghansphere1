
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "../styles/NavBar.module.css"; 
import { NavLink } from "react-router-dom";


const NavBar = () => {
  return (
    <Navbar expand="md" fixed="top">
      <Container>
      <NavLink to="/">
        <Navbar.Brand className={styles.NavBrand}
           alt="logo">
          
           <span>Afghanspher</span>
           <i class="fa-brands fa-skyatlas"></i>
        </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
               to ="/">
              <i className="fas fa-home"></i>Home
            </NavLink>
            <NavLink className={styles.NavLink}
              activeClassName={styles.Active} to ="signin">
              <i className="fas fa-sign-in-alt"></i>Sign in
            </NavLink>
            <NavLink to ="signup" className={styles.NavLink}
              activeClassName={styles.Active}>
              <i className="fas fa-user-plus"></i>Sign up
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
