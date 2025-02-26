import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import { FaExternalLinkAlt, FaGithub, FaReact, FaNode, FaDatabase, FaArrowLeft, FaArrowRight, FaCogs } from 'react-icons/fa';
import { SiRedux, SiCloudflare, SiBootstrap, SiTypescript } from 'react-icons/si';
import RPG1 from "../../images/projects/RPG1.png";
import RPG2 from "../../images/projects/RPG2.png";
import RPG3 from "../../images/projects/RPG3.png";
import Drop1 from "../../images/projects/Drop1.png";
import Drop2 from "../../images/projects/Drop2.png";
import Drop3 from "../../images/projects/Drop3.png";

const projects = [
    {
        title: "RoleplayingGainz (RPGz)",
        location: "Los Angeles, CA",
        duration: "November 2024 - Present",
        description: 
            "RoleplayingGainz, RPGz for short, is an innovative fitness web application designed " +
            "to make your workout routine more engaging and enjoyable. By integrating RPG mechanics, " +
            "users can track their fitness progress in a fun and interactive way. The app leverages " +
            "React for dynamic user interfaces and Node.js for scalable backend services, ensuring " +
            "real-time tracking of activities. With a comprehensive nutrition tracker and gamified " +
            "progress tracking, I hope to get users to stay motivated and get active, including me :).",
        technologies: [
            { icon: FaReact, name: "React" },
            { icon: FaNode, name: "Node.js" },
            { icon: SiRedux, name: "Redux" },
            { icon: SiCloudflare, name: "Cloudflare D1" },
            { icon: SiBootstrap, name: "Bootstrap" },
            { icon: SiTypescript, name: "TypeScript" },
        ],
        images: [RPG1, RPG2, RPG3],
        liveLink: "https://rpgz.me",
        githubLink: "https://github.com/anirudhahuja/RPGz",
    },
    {
        title: "A Drop of Delight",
        location: "Los Angeles, CA",
        duration: "July 2019 - September 2020",
        description: 
            "A Drop of Delight was a collaborative project undertaken with a group of friends, " +
            "driven by our shared passion for making a difference. We developed a website to support " +
            "a charity stream on Twitch, aimed at raising funds to make drinking water more accessible " +
            "through the charity Just a Drop. Built with Node.js and React.js, the site was designed to engage " +
            "viewers and streamline donation tracking. By hosting images on a dedicated content delivery " +
            "network, we ensured fast and responsive user experiences. This project not only highlights " +
            "the power of technology in driving social impact but also the strength of teamwork in achieving " +
            "a common goal.",
        technologies: [
            { icon: FaReact, name: "React" },
            { icon: FaNode, name: "Node.js" },
            { icon: SiBootstrap, name: "Bootstrap" },
            { icon: FaDatabase, name: "MongoDB" },
            { icon: SiTypescript, name: "TypeScript" },
        ],
        images: [Drop1, Drop2, Drop3],
        liveLink: "https://adropofdelight.org/",
        githubLink: "https://github.com/ADropOfDelight",
    },
];

const ProjectCard = ({ project }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className={`card-container ${isFlipped ? 'is-flipped' : ''}`}>
            <div className="card-front">
                <Card className="shadow-sm project-card">
                    <div className="project-image-container">
                        <Carousel interval={null} indicators={true} style={{ height: '100%' }}>
                            {project.images.map((image, idx) => (
                                <Carousel.Item key={idx} style={{ height: '100%' }}>
                                    <img
                                        className="project-image"
                                        src={image}
                                        alt={`${project.title} screenshot ${idx + 1}`}
                                        style={{ height: '100%', objectFit: 'cover' }}
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                    <Card.Body className="project-card-body">
                        <Card.Title className="project-card-title">
                            {project.title}
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted project-subtitle">
                            {project.location} | {project.duration}
                        </Card.Subtitle>
                        <p className="project-description">
                            <br/>{project.description}
                        </p>
                    </Card.Body>
                    <div className="project-links">
                        {project.liveLink && (
                            <Button 
                                variant="outline-info" 
                                href={project.liveLink} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mr-2"
                            >
                                <FaExternalLinkAlt /> Visit Site
                            </Button>
                        )}
                        {project.githubLink && (
                            <Button 
                                variant="outline-secondary" 
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub /> Source Code
                            </Button>
                        )}
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
                <Card className="shadow-sm project-card">
                    <Card.Body className="tech-card-body">
                        <h3>Technologies Used</h3> <br/>
                        <div className="tech-grid">
                            {project.technologies.map((tech, idx) => (
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

const Projects = () => {
    return (
        <Container id="projects">
            <div className="projectsTitle">
                <h2>Projects</h2>
            </div>
            <hr />
            <br />
            <br />
            <Row className="project-grid">
                {projects.map((project, index) => (
                    <Col key={index} md={5} className="mb-4">
                        <ProjectCard project={project} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Projects; 