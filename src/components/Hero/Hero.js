import React from 'react'
import { Link } from 'gatsby'
import { Button } from 'react-bootstrap';
import Animation from '../../utils/animation';

const Hero = () => {
    return (
        <div id="hero">
            <Animation />
            <div className="hero-Section" >
                <div className="hero-titleText">
                    <h1> Hello, I'm Anirudh Ahuja. <br/>
                    I'm a Fullstack Developer. </h1>
                </div>
                <div className="hero-underTitleText">
                    <mark className="blueText"> But you can just call me Ani. </mark> 
                </div>  
            </div>
            {/* Link to the beginning of About Section */}
            <Link to = "/#header">
                <Button variant="outline-primary" className="hero-Button"> Check out my Work </Button>
            </Link>
        </div>
    )   
}

export default Hero;
