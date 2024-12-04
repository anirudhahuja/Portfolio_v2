import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { FaArrowCircleDown } from 'react-icons/fa';
import scrollTo from 'gatsby-plugin-smoothscroll';
import Typewriter from 'typewriter-effect';

const Hero = () => {
    return (
        <Container id="hero">
            <div className="hero-container">
                <Row className="hero-title">
                    <h1>
                        Hello, I'm Anirudh Ahuja. <br />
                        <Typewriter
                            className="typewriter-effect"
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
                <Row className="hero-subtitle">
                    <mark className="blueText">But you can just call me Ani.</mark>
                </Row>
            </div>
            <Row className="resume-button-row">
                <Button
                    variant="outline-primary"
                    className="resume-button"
                    href="https://drive.google.com/file/d/1rhINwdksZjRwEFQOlFwIqZlUP8_9t3ca/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Resume
                </Button>
            </Row>
            <Row className="scroll-button-row">
                <Button
                    variant="outline-primary"
                    className="scroll-button"
                    size="lg"
                    onClick={() => scrollTo('#about')}
                >
                    <FaArrowCircleDown color="white" size="1.75em" />
                </Button>
            </Row>
        </Container>
    );
};

export default Hero;
