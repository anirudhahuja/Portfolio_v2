import React from 'react'
import { Container, Col, Row, Button } from "react-bootstrap"
import { FaArrowCircleDown } from 'react-icons/fa';
import scrollTo from 'gatsby-plugin-smoothscroll';
import Typewriter from 'typewriter-effect';

const Hero = () => {
    return (
        <Container id="hero">
            <div className="heroSection" >
                <Row className="heroTitle">
                    <h1> 
                        Hello, I'm Anirudh Ahuja. <br/>
                        <Typewriter 
                            className="typewriter"
                            options={{
                                autoStart: true,
                                loop: true,
                            }}
                            onInit={(typewriter) => {
                            typewriter
                                .typeString("I'm a Fullstack Developer.")
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString("I'm a Software Developer.")
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString("I'm a Frontend Developer.")
                                .pauseFor(2000)
                                .deleteAll()
                                .start();
                            }}
                        /> 
                    </h1>
                </Row>
                <Row className="heroText">
                    <mark className="blueText"> But you can just call me Ani. </mark> 
                </Row>  
                <Row className="resumeButton">
                    <Button variant="outline-primary" className="heroButton" href="https://drive.google.com/file/d/1rhINwdksZjRwEFQOlFwIqZlUP8_9t3ca/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        Resume
                    </Button>
                </Row>
                <Row className="downButton">
                    <Button variant="outline-primary" className="goDown" size="lg" onClick={() => scrollTo('#about')}>
                            <FaArrowCircleDown color='white' size='1.75em'/>
                    </Button>
                </Row>
            </div>
        </Container>
    )   
}

export default Hero;
