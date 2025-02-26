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
        details: [
            "Designed and developed dynamic user interfaces with React Bootstrap, integrating RPG mechanics to create a highly interactive fitness tracking experience.",
            "Built scalable backend services using Node.js, enabling real-time tracking of fitness activities via APIs.",
            "Architected and maintained database schemas with Cloudflare's D1 SQL database to securely store user progress and game-related statistics.",
            "Developed a comprehensive nutrition tracker that integrates external APIs, allowing users to log consumed food items and track nutritional information effectively.",
            "Utilized Redux to manage the player state, ensuring consistent and seamless updates across the application.",
            "Enhanced user engagement and retention by gamifying fitness progress through level-ups, quests, and rewards systems.",
        ],
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
        details: [
            "Spearheaded the development of a comprehensive website using Node.js and React.js for a high-profile fundraiser charity stream in collaboration with the organization Just a Drop.",
            "Implemented a solution to host images and static assets on a dedicated content delivery network, thereby enhancing the website's speed and responsiveness.",
            "Deployed the application using CI/CD pipelines, ensuring quick and seamless updates during the live charity event.",
            "Integrated donation tracking features to monitor progress towards the $10,000 goal, providing real-time updates to participants and donors.",
            "Collaborated with team members to integrate social media sharing functionalities, increasing campaign visibility and engagement.",
        ],
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
    const [detailsPage, setDetailsPage] = useState(0);

    // Split details into chunks of 3
    const detailChunks = [
        project.details.slice(0, 3),
        project.details.slice(3)
    ];

    const handleNextDetails = () => {
        setDetailsPage((prev) => (prev + 1) % detailChunks.length);
    };

    const handlePrevDetails = () => {
        setDetailsPage((prev) => (prev - 1 + detailChunks.length) % detailChunks.length);
    };

    return (
        <div className={`card-container ${isFlipped ? 'is-flipped' : ''}`}>
            <div className="card-front">
                <Card className="shadow-sm experience-card" style={{ height: '750px' }}>
                    <div className="project-image-container" style={{ height: '350px' }}>
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
                    <Card.Body className="experience-card-body">
                        <Card.Title className="experience-card-title">
                            {project.title}
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted experience-subtitle">
                            {project.location} | {project.duration}
                        </Card.Subtitle>
                        <div className="details-container">
                            <ul className="experience-details">
                                {detailChunks[detailsPage].map((detail, idx) => (
                                    <li key={idx} className="experience-detail-item">{detail}</li>
                                ))}
                            </ul>
                            <div className="details-navigation">
                                <Button 
                                    variant="link" 
                                    onClick={handlePrevDetails} 
                                    disabled={detailsPage === 0}
                                    className="nav-button"
                                >
                                    <FaArrowLeft />
                                </Button>
                                <span className="page-indicator">
                                    {detailsPage + 1} / {detailChunks.length}
                                </span>
                                <Button 
                                    variant="link" 
                                    onClick={handleNextDetails}
                                    disabled={detailsPage === detailChunks.length - 1}
                                    className="nav-button"
                                >
                                    <FaArrowRight />
                                </Button>
                            </div>
                        </div>
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
                <Card className="shadow-sm experience-card" style={{ height: '750px' }}>
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
            <Row className="experience-grid">
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