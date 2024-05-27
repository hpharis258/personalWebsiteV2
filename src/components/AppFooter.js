import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
const AppFooter = () => {
    return (
        <footer className="bg-success bg-gradient bg-opacity-80">
            <Container>
                <Row>
                    <Col md={3}>
                        <h5>All Rights Reserved</h5>
                        <p>©Haroldas Varanauskas {new Date().getFullYear()}</p>
                    </Col>
                    <Col md={3}>
                        <h5>Useful Links</h5>
                        <Nav.Link href="/education">Education</Nav.Link>
            <Nav.Link href="/experience">Experience</Nav.Link>
            <Nav.Link href="/certifications">Certifications</Nav.Link>
            <Nav.Link href="/projects">Fun Projects</Nav.Link>
            <Nav.Link href="/youtube">Youtube</Nav.Link>
            <Nav.Link href="/posts">Posts</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
                    </Col>
                    <Col md={3}>
                        <h5>Socials</h5>
                        <Nav.Link href="https://www.linkedin.com/in/haroldas-varanauskas-8b980b14b/"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</Nav.Link>
                        <Nav.Link href="https://www.instagram.com/haroldas_varanauskas/"><FontAwesomeIcon icon={faInstagram} /> Instagram</Nav.Link>
                        <Nav.Link href="https://www.youtube.com/channel/UCeeLNsdE6Foc_Tec7D21xoA"><FontAwesomeIcon icon={faYoutube} /> Youtube</Nav.Link>
                        
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default AppFooter;