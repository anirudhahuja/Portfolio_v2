import React, { useEffect, useState } from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { FaGithub, FaLinkedin, FaBars } from 'react-icons/fa';
import { StaticImage } from 'gatsby-plugin-image'

//Smooth Scrolling
if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
}

const Header = () => { 
    useEffect(() => {
        window.onscroll = function() {fixHeader()};
        // Get the header
        const header = document.getElementById("header");
        // Get the offset position of the navbar
        var topofHeader = header.offsetTop;
        // Get the offset for Y position
        var prevScrollpos = window.pageYOffset;

        function fixHeader() {
            var currentScrollPos = window.pageYOffset;
            // Once scrollbar passes the navbar's initial position, attach the fixed header class
            if (window.pageYOffset > topofHeader) {
                header.classList.add("fixed-header");

                // Hide scrollbar while scrolling down
                if (prevScrollpos > currentScrollPos) {
                document.getElementById("header").style.top = "0";
                } else {
                document.getElementById("header").style.top = "-70px";
                }
                prevScrollpos = currentScrollPos;

            } else {
                header.classList.remove("fixed-header");
            }
            console.log(currentScrollPos, prevScrollpos)
        }
    });

    return (
        <Navbar id="header" expand="lg">
            <Navbar.Brand href="#">
                <StaticImage className="brandStyle"
                    src="../../images/brand.png"
                    alt=""
                    layout="fixed"
                    width={40}
                    height={40}
                />
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggleStyle">
            <FaBars color='#9DEBE3' size='1.5em'/>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Container className="insideLink">
                    <Nav.Link href="#about">
                        <mark className="blueText">I.</mark><mark className="whiteText">About</mark>
                    </Nav.Link>
                    <Nav.Link href="#experience">
                        <mark className="blueText">III.</mark><mark className="whiteText">Experience</mark>
                    </Nav.Link>
                    <Nav.Link href="#about">
                        <mark className="blueText">IV.</mark><mark className="whiteText">Contact</mark>
                    </Nav.Link>
                    <Nav.Link href="#about">
                        <Button variant="outline-primary" className="resumeButton">Resume</Button>
                    </Nav.Link>
                </Container>
            </Nav>
            <Nav className="ml-auto">
                <Container className="outsideLink">
                    <Nav.Link href="https://github.com/anirudhahuja" target="_blank" rel="noopener noreferrer">
                        <FaGithub color='white' size='1.75em'/>
                    </Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/anirudhahuja/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin color='white' size='1.75em'/>
                    </Nav.Link>
                </Container>
            </Nav>
        </Navbar.Collapse>
      </Navbar>     
    )
}

export default Header