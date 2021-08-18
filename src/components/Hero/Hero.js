import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import scrollTo from 'gatsby-plugin-smoothscroll';
import Animation from '../../utils/animation';

const Hero = () => {
    return (
        <div id="hero">
            <Animation />
            <div className="heroSection" >
                <div className="heroTitle">
                    <h1> Hello, I'm Anirudh Ahuja. <br/>
                    I'm a Full Stack Developer. </h1>
                </div>
                <div className="heroText">
                    <mark className="blueText"> But you can just call me Ani. </mark> 
                </div>  
                
            </div>
            <div className = "buttonSection">
                <Button variant="outline-primary" className="heroButton" onClick={() => scrollTo('#header')}>
                    More about Me
                </Button>
                <Button variant="outline-primary" className="heroButton" href="https://drive.google.com/file/d/1uv45BEgmh7u7QSFoB0gMNhMLkWTEUEFz/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    My Resume
                </Button>
            </div>
        </div>
    )   
}

export default Hero;
