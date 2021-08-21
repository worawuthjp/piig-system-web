import MyButton from 'components/MyButton';
import PiiGLogo from 'components/PiiGLogo';
import React, { useEffect, useRef } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavbarStyle } from './styled';

export default function MyNavbar({ className, setRef, ...props }) {
  const navRef = useRef(null);
  useEffect(() => {
    setRef ? setRef(navRef) : null;
  }, [navRef]);
  return (
    <NavbarStyle ref={navRef}>
      <Navbar {...props} className={className} variant="white" expand="lg">
        <Navbar.Brand href="#home">
          <PiiGLogo sm />
        </Navbar.Brand>

        <Nav className="mr-auto">
          <Nav.Link className="text-nav" href="#home">
            Home
          </Nav.Link>
        </Nav>

        <Nav className="ml-auto">
          <MyButton className="danger">sign out</MyButton>
        </Nav>
      </Navbar>
    </NavbarStyle>
  );
}
