import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import reactImage from "../../images/icons/react.png";
import nodeImage from "../../images/icons/node.png";
import angularImage from "../../images/icons/angular.png";
import reduxImage from "../../images/icons/redux.png";
import dockerImage from "../../images/icons/docker.png";
import cImage from "../../images/icons/c.png";
import javaImage from "../../images/icons/java.png";
import cppImage from "../../images/icons/cpp.png";
import pythonImage from "../../images/icons/python.png";
import gitImage from "../../images/icons/git.png";
import sassImage from "../../images/icons/sass.png";
import bootstrapImage from "../../images/icons/bootstrap.png";
import sqlImage from "../../images/icons/sql.png";
import jsonImage from "../../images/icons/json.png";
import mongoImage from "../../images/icons/mongo.png";
import expressImage from "../../images/icons/express.png";
import pytorchImage from "../../images/icons/pytorch.png";

const technologies = [
    { name: "React", imgSrc: reactImage },
    { name: "NodeJS", imgSrc: nodeImage },
    { name: "SQL", imgSrc: sqlImage },
    { name: "Python", imgSrc: pythonImage },
    { name: "Redux", imgSrc: reduxImage },
    { name: "Git", imgSrc: gitImage },
    { name: "MongoDB", imgSrc: mongoImage },
    { name: "Express", imgSrc: expressImage },
    { name: "Angular", imgSrc: angularImage },
    { name: "Docker", imgSrc: dockerImage },
    { name: "Java", imgSrc: javaImage },
    { name: "C", imgSrc: cImage },
    { name: "PyTorch", imgSrc: pytorchImage },
    { name: "Bootstrap", imgSrc: bootstrapImage },
    { name: "Sass", imgSrc: sassImage },
    { name: "JSON", imgSrc: jsonImage },
    { name: "C++", imgSrc: cppImage },
];

const Tech = () => {
    return (
        <Container id="tech" className="text-center py-5 techContainer">
            <h2 className="techTitle mb-4">Technologies and Tools</h2>
            <hr className="techDivider" />
            <br />
            <Row>
                <Col>
                    <div className="techDescription">
                        These are the technologies and frameworks I leverage to create
                        high-quality applications.
                        <br />
                        <br />
                    </div>
                </Col>
            </Row>
            <Row className="techGrid">
                {technologies.map((tech, index) => (
                    <Col key={index} xs={5} md={2} lg={2} className="techCol">
                        <Card className="techCard">
                            <Card.Img
                                src={tech.imgSrc}
                                alt={tech.name}
                                className="techImage"
                            />
                            <Card.Body className="p-0">
                                <Card.Text className="techName">{tech.name}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Tech;
