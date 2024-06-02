import {
    ChakraBaseProvider,
  } from '@chakra-ui/react';
 import { ColorModeSwitcher } from '../ColorModeSwitcher';

  import Container from 'react-bootstrap/Container';
  import Nav from 'react-bootstrap/Nav';
  import Navbar from 'react-bootstrap/Navbar';
  import NavDropdown from 'react-bootstrap/NavDropdown';
  import CookieConsent from "react-cookie-consent";
  
  export default function WithSubnavigation() {
    return (
        <>
        <ChakraBaseProvider>

      
  <Navbar expand="lg" className="bg-success bg-gradient bg-opacity-80">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/education">Education</Nav.Link>
            <Nav.Link href="/experience">Experience</Nav.Link>
            <Nav.Link href="/certifications">Certifications</Nav.Link>
            {/* <Nav.Link href="/projects">Fun Projects</Nav.Link> */}
            <Nav.Link href="/youtube">Youtube</Nav.Link>
            {/* <Nav.Link href="/posts">Posts</Nav.Link> */}
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <div  className="bg-success bg-gradient bg-opacity-80">
                </div>
            <NavDropdown menuVariant='Secondary'  title="More Information" id="basic-nav-dropdown">
              <NavDropdown.Item className='dropDownLink' href="/cookies">GDPR and Cookies</NavDropdown.Item>
              <NavDropdown.Divider  />
              <NavDropdown.Item className='dropDownLink' href="https://buymeacoffee.com/haroldas">Buy me a coffe</NavDropdown.Item>
              
            </NavDropdown>

           
            <ColorModeSwitcher justifySelf="flex-end" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <CookieConsent
  location="bottom"
  buttonText="Agree"
  cookieName="haroldasvaranauskas.com"
  style={{ background: "#2B373B" }}
  buttonStyle={{ color: "#4e503b", fontSize: "26px" }}
  expires={150}
>
  This website uses cookies to enhance the user experience.{" "}
  <span style={{ fontSize: "10px" }}>If you aggree with the Cookie and GDPR policy press agree. These can be found: More Information {'->'} GDPR and Cookies </span>
</CookieConsent>
    </ChakraBaseProvider>
        </>
    );
}
   
