import React from "react"
import { Container, Row, Col, Button } from 'react-bootstrap';

const Contact = () => {
    return(
        <div id = "contact">
            <Container>
                <Row>
                    <Col>
                        <div className="contactTitle">
                            <h2> Get in Touch </h2> 
                        </div>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="contactText">
                            I'm currently looking for new job opportunities, so if you'd like to discuss something, my inbox is open! 
                            Otherwise, if you just want to chat, feel free to reach out as well! <br/> <br/>
                            <div className="myEmail"> Email: anahuja@ucsc.edu </div>
                        </div>
                        <a href="mailto:anahuja@ucsc.edu"> <Button id="btnOutlook" className="contactButton"> Contact Me </Button> </a>
                    </Col>
                </Row>
            </Container>
            
            
            
        </div>
    )
}

export default Contact;