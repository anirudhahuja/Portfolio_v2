import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaCogs, FaArrowLeft } from 'react-icons/fa';
import { FaReact, FaNode, FaPython, FaDocker, FaDatabase, FaJava, FaGit, FaWordpress, FaCheckCircle } from 'react-icons/fa';
import { SiTensorflow, SiJavascript, SiCplusplus, SiExpress, SiPostman, SiPytorch, SiOpencv, SiFlask, SiTwilio } from 'react-icons/si';

const experiences = [
    {
        title: "Software Developer",
        company: "DataAnnotation Tech",
        location: "Remote",
        duration: "August 2023 – Current",
        details: [
            "Trained AI models by developing and implementing high-quality data labeling solutions using Python, JavaScript, C++, and Docker, achieving a 40% reduction in task completion time",
            "Oversaw projects focused on training AI models, achieving accuracy rates over 95% and improving model performance by 20%",
            "Collaborated with cross-functional teams to optimize data annotation workflows and enhance model training efficiency",
        ],
        technologies: [
            { icon: FaJava, name: "Java" },
            { icon: FaPython, name: "Python" },
            { icon: FaReact, name: "React" },
            { icon: FaNode, name: "Node.js" },
            { icon: SiCplusplus, name: "C++" },
            { icon: FaDocker, name: "Docker" },
            { icon: FaDatabase, name: "SQL" },
        ],
    },
    {
        title: "Software Developer",
        company: "Farmers Insurance",
        location: "Los Angeles, CA",
        duration: "August 2020 – February 2023",
        details: [
            "Led a cross-team effort to parallelize an internal API using an Express.js web application, reducing the time to send POST requests by 75%",
            "Reduced release overhead by 40 manhours by developing documentation and utilizing Guidewire, collaborating effectively in a Scrum environment",
            "Mentored junior developers and conducted code reviews to maintain high code quality standards",
        ],
        technologies: [
            { icon: FaJava, name: "Java" },
            { icon: FaReact, name: "React" },
            { icon: FaNode, name: "Node.js" },
            { icon: SiExpress, name: "Express" },
            { icon: SiPostman, name: "Postman" },
            { icon: FaDatabase, name: "SQL" },
            { icon: FaGit, name: "Git" },
        ],
    },
    {
        title: "AI and Machine Learning Bootcamp",
        company: "Caltech",
        location: "Pasadena, CA",
        duration: "October 2022 – February 2023",
        details: [
            "Engineered a recommendation engine for books using collaborative filtering techniques to deliver personalized recommendations",
            "Developed a convolutional neural network model using TensorFlow to classify traffic signals with high accuracy",
            "Implemented and optimized various machine learning algorithms including decision trees, random forests, and neural networks",
        ],
        technologies: [
            { icon: FaPython, name: "Python" },
            { icon: SiTensorflow, name: "TensorFlow" },
            { icon: SiPytorch, name: "PyTorch" },
            { icon: SiOpencv, name: "OpenCV" },
        ],
    },
    {
        title: "Software Developer Intern",
        company: "Farmers Insurance",
        location: "Los Angeles, CA",
        duration: "June 2019 – August 2019",
        details: [
            "Developed a proof-of-concept application to notify Farmer agents, estimating a 15% increase in customer retention",
            "Streamlined the process of editing policies by creating a web application, reducing data modification time by 20%",
            "Implemented automated testing suites that improved code coverage by 35%",
        ],
        technologies: [
            { icon: FaReact, name: "React" },
            { icon: SiJavascript, name: "JavaScript" },
            { icon: FaNode, name: "Node.js" },
            { icon: FaPython, name: "Python" },
            { icon: SiFlask, name: "Flask" },
            { icon: SiTwilio, name: "Twilio" },
            { icon: FaGit, name: "Git" },
        ],
    },
    {
        title: "Software Developer Intern",
        company: "Community Bridges",
        location: "Los Angeles, CA",
        duration: "August 2020 – Present",
        details: [
            "Reduced user onboarding time by an average of 20% by optimizing the survey process utilized by the nonprofit",
            "Collaborated with non-profit leadership through regular meetings to align technical solutions with organizational goals and address key business needs",
            "Developed and maintained responsive web applications using React.js and Node.js to improve user experience",
        ],
        technologies: [
            { icon: FaPython, name: "Python" },
            { icon: FaWordpress, name: "WordPress" },
            { icon: FaCheckCircle, name: "KoboCollect" },
        ],
    },
];

const ExperienceCard = ({ experience }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className={`card-container ${isFlipped ? 'is-flipped' : ''}`}>
            <div className="card-front">
                <Card className="shadow-sm experience-card" style={{ height: '400px' }}>
                    <Card.Body>
                        <Card.Title className="experience-card-title">
                            {experience.title} - <span className="experience-company">{experience.company}</span>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted experience-subtitle">
                            {experience.location} | {experience.duration}
                        </Card.Subtitle>
                        <ul className="experience-details">
                            {experience.details.map((detail, idx) => (
                                <li key={idx} className="experience-detail-item">{detail}</li>
                            ))}
                        </ul>
                    </Card.Body>
                    <div className="project-links">
                        <Button 
                            variant="outline-info"
                            onClick={() => setIsFlipped(true)}
                            className="tech-button"
                        >
                            <FaCogs /> Technologies
                        </Button>
                    </div>
                </Card>
            </div>
            <div className="card-back">
                <Card className="shadow-sm experience-card" style={{ height: '400px' }}>
                    <Card.Body className="tech-card-body">
                        <h3>Technologies Used</h3> <br/>
                        <div className="tech-grid">
                            {experience.technologies?.map((tech, idx) => (
                                <div key={idx} className="tech-item">
                                    <tech.icon className="tech-icon" />
                                    <span className="tech-name">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </Card.Body>
                    <div className="project-links">
                        <Button 
                            variant="outline-secondary"
                            onClick={() => setIsFlipped(false)}
                            className="tech-button"
                        >
                            <FaArrowLeft /> Back
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
    );
};

const Experience = () => {
    return (
        <Container id="experience">
            <div className="projectsTitle">
                <h2>Experience</h2>
            </div>
            <hr />
            <br />
            <br />
            <Row className="experience-grid">
                {experiences.map((exp, index) => (
                    <Col key={index} md={5} className="mb-4">
                        <ExperienceCard experience={exp} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Experience;
