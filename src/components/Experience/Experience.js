import React from "react"
import { Container, Row, Col, CardDeck, Card, Button } from 'react-bootstrap';
import ADOD from "../../images/adod.png"
import Farmers from "../../images/farmers.png"
import Community from "../../images/community.png"

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
                            <Card.Img variant="top" src={Farmers} className="cardImage" id="farmersImage"/>
                            <Card.Body>
                                <Card.Title>Farmers Insurance</Card.Title>
                                <Card.Text>
                                    Worked within the Configuration team to increase efficiency and stability of the product 
                                    by implementing changes presented by other teams. <br/> <br/>
                                </Card.Text>
                                <Button 
                                    disabled
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
                            <Card.Header as="h6" bg={"dark"}> Lead Front End Developer </Card.Header>
                            <Card.Img variant="top" src={ADOD} className="cardImage"/>
                            <Card.Body>
                                <Card.Title>A Drop of Delight</Card.Title>
                                <Card.Text>
                                    Developed a website’s Front End using React for a community led 
                                    charity event for the organization Just a Drop. <br/> <br/> <br/>
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
                                Gatsby React Node.js AWS 
                            </Card.Footer>
                        </Card>
                        <Card id="cardStyle" className="text-center">
                            <Card.Header as="h6" bg={"dark"}> Intern </Card.Header>
                            <Card.Img variant="top" src={Community} className="cardImage" id="communityImage"/>
                            <Card.Body>
                                <Card.Title>Community Bridges</Card.Title>
                                <Card.Text>
                                    Collaborated with a team to optimize the survey process meant for new users on
                                    the non-profit's website. <br/> <br/> <br/>
                                </Card.Text>
                                <Button 
                                    href="https://communitybridges.org/" target="_blank" rel="noopener noreferrer"
                                    variant="outline-primary" 
                                    className="cardButton"
                                >
                                    View
                                </Button>
                            </Card.Body>
                            <Card.Footer className="text-right" id="cardFooter">
                                WordPress KoboCollect 
                            </Card.Footer>
                        </Card>
                    </CardDeck>
                </Row>
            </Container>
        </div>
    )
}

export default Experience;

