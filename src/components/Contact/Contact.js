import React, { useRef } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";

const ContactForm = () => {
    const form = useRef();
    const [loading, setLoading] = React.useState(false); // Loading indicator for email sending

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        // Basic validation
        const name = form.current.user_name.value.trim();
        const email = form.current.user_email.value.trim();
        const message = form.current.message.value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        emailjs
            .sendForm(
                "service_heihg2j",
                "template_qxb1l5t",
                form.current,
                "avj16tk3ZvQ6zghl3"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Message sent successfully!");
                    e.target.reset(); // Reset the form fields after successful submission
                    setLoading(false);
                },
                (error) => {
                    console.log(error.text);
                    alert("An error occurred. Please try again.");
                    setLoading(false);
                }
            );
    };

    return (
        <Container className="contact-container py-5">
            <h2 className="contact-title text-center mb-4">Get in Touch</h2>
            <hr />
            <div className="contact-description text-center mb-4">
                If you want to know more about me or my work, or if you would just like
                to chat, send me a message. I'd love to hear from you.
            </div>
            <Row className="contact-content-wrapper">
                {/* Contact Form Section */}
                <Col md={6} className="contact-form-wrapper">
                    <Form className="contact-form" ref={form} onSubmit={sendEmail}>
                        <Form.Group className="mb-3 contact-form-group">
                            <Form.Label className="contact-label">Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                className="contact-input"
                                name="user_name"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 contact-form-group">
                            <Form.Label className="contact-label">Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                className="contact-input"
                                name="user_email"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 contact-form-group">
                            <Form.Label className="contact-label">Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                placeholder="Enter your message"
                                className="contact-input contact-textarea"
                                name="message"
                            />
                        </Form.Group>
                        <div className="contact-form-footer">
                            <a href="mailto:ani.ahuja219@gmail.com" className="contact-link">
                                <u>Send me email directly</u>
                            </a>
                            <Button type="submit" className="contact-submit-btn" disabled={loading}>
                                {loading ? "Sending..." : "Submit"}
                            </Button>
                        </div>
                    </Form>
                </Col>

                {/* Info Section */}
                <Col md={6} className="info-wrapper">
                    <div className="info-section">
                        <br />
                        <h3 className="info-title">Email</h3>
                        <p className="info-text">ani.ahuja219@gmail.com</p>
                        <br />
                        <h3 className="info-title mt-4">Socials</h3>
                        <div className="icon-container">
                            <a href="https://github.com/anirudhahuja" target="_blank" rel="noopener noreferrer" className="social-link">
                                <FaGithub size="1.75em" className="social-icon" />
                            </a>
                            <a href="https://www.linkedin.com/in/anirudhahuja/" target="_blank" rel="noopener noreferrer" className="social-link">
                                <FaLinkedin size="1.75em" className="social-icon" />
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactForm;
