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
                            Hi there! I'm Ani, a Web Developer based in the Bay Area, California. <br/>
                            My 'career' in web development started back in 2010 when I started making 
                            HTML webpages for shows I was into. I was only 13 at the time, 
                            but my interest in web dev never left. <br/> <br/>
                            Fast-forward to now, and I now have a passion for learning and developing new technologies 
                            for the web. <br/> <br/>
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