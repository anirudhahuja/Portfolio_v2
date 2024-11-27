import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
    return( 
        <Container id="about">
            <div className="aboutTitle">
                <h2> About Me </h2> 
            </div>
            <hr/> 
            <br/>
            <Row>
                <Col>
                    <div className="aboutText">
                        Hi there! I'm Ani, a Web Developer based in Los Angeles, California. 
                        I have a very strong passion for web development and mastering new technologies to improve my craft. <br/> <br/>
                        Over the last few years, I've had the opportunity to obtain extensive experience in creating the Front End 
                        for web applications and websites, but also became proficient in Database Management, as well as Back End implementation. <br/> <br/>
                    </div>  
                </Col>
            </Row>
        </Container>
    )
}

export default About;