import {
    ChakraBaseProvider,
  } from '@chakra-ui/react';
 import { ColorModeSwitcher } from '../ColorModeSwitcher';

  import Container from 'react-bootstrap/Container';
  import Nav from 'react-bootstrap/Nav';
  import Navbar from 'react-bootstrap/Navbar';
  import NavDropdown from 'react-bootstrap/NavDropdown';
  
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
            <Nav.Link href="/projects">Fun Projects</Nav.Link>
            <Nav.Link href="/youtube">Youtube</Nav.Link>
            <Nav.Link href="/posts">Posts</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <div  className="bg-success bg-gradient bg-opacity-80">
                </div>
            <NavDropdown menuVariant='Secondary'  title="More Information" id="basic-nav-dropdown">
              <NavDropdown.Item className='dropDownLink' href="#action/3.1">GDPR and Cookies</NavDropdown.Item>
              <NavDropdown.Divider  />
              <NavDropdown.Item className='dropDownLink' href="https://buymeacoffee.com/haroldas">Buy me a coffe</NavDropdown.Item>
              
            </NavDropdown>

           
            <ColorModeSwitcher justifySelf="flex-end" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </ChakraBaseProvider>
        {/* <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Flex w={'80%'} h={60} alignItems={'center'} justifyContent={'space-between'}>
                <Link href='/'>Home</Link>
                <Link href='/education'>Education</Link>
                <Link href='/experience'>Experience</Link>
                <Link href='/certifications'>Certifications</Link>
                <Link href='/projects'>Fun Projects</Link>
                <Link href='/youtube'>Youtube</Link>
                <Link href='/posts'>Posts</Link>
                <Link href='/contact'>Contact</Link>
                <Link href='/about'>About</Link>
            </Flex>
            </Box> */}
        </>
    );
}
   
