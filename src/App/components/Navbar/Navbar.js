import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.scss';
import { Navbar as NavBar, Container, Nav } from 'react-bootstrap'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css'
import { LinkContainer } from 'react-router-bootstrap'

const Navbar = () => (
  <NavBar bg="primary" variant="dark">
    <Container>
      <NavBar.Brand href="/">Home</NavBar.Brand>
      <Nav className="me-auto">
        <LinkContainer to="/">
          <Nav.Link>home</Nav.Link>
        </LinkContainer> 
        <LinkContainer to="/thumbnail">
          <Nav.Link>thumbnail</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/edit">
          <Nav.Link>edit</Nav.Link>
        </LinkContainer>
      </Nav>
    </Container>
  </NavBar>
);

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
