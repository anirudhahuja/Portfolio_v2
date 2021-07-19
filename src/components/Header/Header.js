import React, { useEffect, useState } from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import { StaticImage } from 'gatsby-plugin-image'

const Header = () => { 
    //Checking to see if Menu is open or mobile to lock scrolling
    const [open, setOpen] = useState(false);

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
        }

        //If menu open, lock scrolling
        // { open ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "unset")};
    });

    return (
        <Navbar collapseOnSelect id="header" expand="lg">
            <Navbar.Brand href="#">
                <StaticImage className="brandStyle"
                    src="../../images/brand.png"
                    alt=""
                    layout="fixed"
                    width={40}
                    height={40}
                />
            </Navbar.Brand>
        <Navbar.Toggle 
            aria-controls="navbarScroll" 
            onClick = {() => setOpen(!open)}
            className="toggleStyle"
        >
            {open ? <FaTimes color='#9DEBE3' size='1.5em'/> : <FaBars color='#9DEBE3' size='1.5em'/>}
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Container className="insideLink">
                    <Nav.Link href="#about" data-toggle="collapse">
                        <mark className="blueText">I.</mark><mark className="whiteText">About</mark>
                    </Nav.Link>
                    <Nav.Link href="#experience">
                        <mark className="blueText">II.</mark><mark className="whiteText">Experience</mark>
                    </Nav.Link>
                    <Nav.Link href="#contact">
                        <mark className="blueText">III.</mark><mark className="whiteText">Contact</mark>
                    </Nav.Link>
                    <Nav.Link href="https://drive.google.com/file/d/1uv45BEgmh7u7QSFoB0gMNhMLkWTEUEFz/view?usp=sharing" target="_blank" rel="noopener noreferrer">
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