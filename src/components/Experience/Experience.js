import React from "react"
import { Container, Row, Col, CardDeck, Card, Button } from 'react-bootstrap';
import ADOD from "../../images/adod.png"
import Farmers from "../../images/farmers.png"


const Experience = () => {
    return(   
        <div id="experience">
            <Container>
                <Row>
                    <Col>
                        <div className="projectsTitle">
                            <h2> Experience </h2> 
                        </div>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <CardDeck id="deckStyle">
                        <Card id="cardStyle" className="text-center">
                            <Card.Header as="h6" bg={"dark"}> Software Developer </Card.Header>
                            <Card.Img variant="top" src={Farmers} className="cardImage"/>
                            <Card.Body>
                                <Card.Title>Farmers Insurance</Card.Title>
                                <Card.Text>
                                is a community led TF2 charity event, created in 2020, 
                                to help fundraise for clean water and proper sanitation for those in need.
                                </Card.Text>
                                <Button 
                                    href="https://adropofdelight.org" target="_blank" rel="noopener noreferrer" 
                                    variant="outline-primary" 
                                    className="cardButton"
                                >
                                    View
                                </Button>
                            </Card.Body>
                            <Card.Footer className="text-right" id="cardFooter">
                                Java React Node.js
                            </Card.Footer>
                        </Card>
                        <Card id="cardStyle" className="text-center">
                            <Card.Header as="h6" bg={"dark"}> Lead Frontend Developer </Card.Header>
                            <Card.Img variant="top" src={ADOD} className="cardImage"/>
                            <Card.Body>
                                <Card.Title>A Drop of Delight</Card.Title>
                                <Card.Text>
                                is a community led TF2 charity event, created in 2020, 
                                to help fundraise for clean water and proper sanitation for those in need.
                                </Card.Text>
                                <Button 
                                    href="https://adropofdelight.org" target="_blank" rel="noopener noreferrer" 
                                    variant="outline-primary" 
                                    className="cardButton"
                                >
                                    View
                                </Button>
                            </Card.Body>
                            <Card.Footer className="text-right" id="cardFooter">
                                React Node.js
                            </Card.Footer>
                        </Card>
                        <Card id="cardStyle" className="text-center">
                            <Card.Header as="h6" bg={"dark"}> Lead Frontend Developer </Card.Header>
                            <Card.Img variant="top" src={ADOD} className="cardImage"/>
                            <Card.Body>
                                <Card.Title>A Drop of Delight</Card.Title>
                                <Card.Text>
                                is a community led TF2 charity event, created in 2020, 
                                to help fundraise for clean water and proper sanitation for those in need.
                                </Card.Text>
                                <Button 
                                    href="https://adropofdelight.org" target="_blank" rel="noopener noreferrer" 
                                    variant="outline-primary" 
                                    className="cardButton"
                                >
                                    View
                                </Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Row>
            </Container>
        </div>
    )
}

export default Experience;

