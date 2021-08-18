import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image'

const About = () => {
    return( 
        <div id="about">
            <Container>
                <Row>
                    <Col>
                        <div className="aboutTitle">
                            <h2> About Me </h2> 
                        </div>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={8}>
                        <div className="aboutText">
                            Hi there! I'm Ani, a Web Developer based in Los Angeles, California. 
                            I have a very strong passion for web development and mastering new technologies to improve my craft. <br/> <br/>
                            Over the last few years, I've had the opportunity to obtain extensive experience in creating the Front End 
                            for web applications and websites, but also became proficient in Database Management, as well as Back End implementation. <br/> <br/>
                            Here's some stuff I enjoy/have experience working with! <br/> <br/>
                        </div>
                        <div className="aboutList">
                            <ul className="a">
                                <li> ReactJS </li>
                                <li> C# </li>
                                <li> Java </li>
                                <li> PostgreSQL / OracleSQL </li>
                            </ul>
                            <ul className="a">
                                <li> NodeJS </li>
                                <li> C </li>
                                <li> Python </li>
                                <li> HTML / CSS </li>
                            </ul>        
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="imageofMe"> <StaticImage src="../../images/me.jpg" alt="Me!"/> </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;