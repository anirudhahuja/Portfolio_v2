import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';

const experiences = [
    {
        title: "Software Developer - AI Trainer",
        company: "DataAnnotation Tech",
        location: "Remote",
        duration: "August 2023 – Current",
        details: [
            "Trained AI models by developing and implementing high-quality data labeling solutions using Python, JavaScript, C++, and Docker, achieving a 40% reduction in task completion time.",
            "Oversaw projects focused on training AI models, achieving accuracy rates over 95% and improving model performance by 20%.",
        ],
    },
    {
        title: "Agile Developer",
        company: "Farmers Insurance",
        location: "Los Angeles, CA",
        duration: "August 2020 – February 2023",
        details: [
            "Led a cross-team effort to parallelize an internal API using an Express.js web application, reducing the time to send POST requests by 75%.",
            "Reduced release overhead by 40 manhours by developing documentation and utilizing Guidewire, collaborating effectively in a Scrum environment.",
        ],
    },
    {
        title: "Software Developer Intern",
        company: "Farmers Insurance",
        location: "Los Angeles, CA",
        duration: "June 2019 – August 2019",
        details: [
            "Developed a proof-of-concept application to notify Farmer agents, estimating a 15% increase in customer retention.",
            "Streamlined the process of editing policies by creating a web application, reducing data modification time by 20%.",
        ],
    },
    {
        title: "Software Developer",
        company: "Community Bridges",
        location: "Los Angeles, CA",
        duration: "August 2020 – Present",
        details: [
            "Reduced user onboarding time by an average of 20% by optimizing the survey process utilized by the nonprofit.",
            "Collaborated with non-profit leadership through regular meetings to align technical solutions with organizational goals and address key business needs.",
        ],
    },
    {
        title: "AI and Machine Learning Bootcamp",
        company: "Caltech",
        location: "Pasadena, CA",
        duration: "October 2022 – February 2023",
        details: [
            "Engineered a recommendation engine for books using collaborative filtering techniques to deliver personalized recommendations.",
            "Developed a convolutional neural network model using TensorFlow to classify traffic signals with high accuracy.",
        ],
    },
    {
        title: "Website Development for Fundraiser",
        company: "A Drop of Delight",
        location: "Los Angeles, CA",
        duration: "July 2019 – September 2020",
        details: [
            "Spearheaded the development of a website using Node.js and React.js for a fundraiser charity stream, raising over $8k in a single day.",
            "Enhanced website speed by hosting images and static assets on a dedicated content delivery network.",
        ],
    },
];

const Experience = () => {
    return (
        <Container id="experience">
            <div className="projectsTitle">
                <h2>Experience and Projects</h2>
            </div>
            <hr />
            <br />
            <br />
            <Row className="experience-grid">
                {experiences.map((exp, index) => (
                    <Col key={index} md={5} className="mb-4">
                        <Card className="shadow-sm experience-card">
                            <Card.Body>
                                <Card.Title className="experience-card-title"></Card.Title>
                        <Card.Title className="experience-card-title">
                            {exp.title} - <span className="experience-company">{exp.company}</span>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted experience-subtitle">
                            {exp.location} | {exp.duration}
                        </Card.Subtitle>
                        <ul className="experience-details">
                            {exp.details.map((detail, idx) => (
                            <li key={idx} className="experience-detail-item">{detail}</li>
                            ))}
                        </ul>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Experience;
