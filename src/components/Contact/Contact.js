import {
    faEnvelope,
    faTty,
    faMapMarkedAlt,
    faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <div className="p-5 d-flex justify-content-around align-items-center">
                <div>
                    <FontAwesomeIcon className="contact-icon" icon={faEnvelope} />
                    <h4>eSchool@yahoo.com</h4>
                </div>
                <div>
                    <FontAwesomeIcon className="contact-icon" icon={faTty} />
                    <h4>+02 0987654321</h4>
                </div>
                <div>
                    <FontAwesomeIcon className="contact-icon" icon={faMapMarkedAlt} />
                    <h4>57/A, Dhanmondi, Dhaka</h4>
                </div>
            </div>
            <div className="social-icons-container">
                <Link><a href="https://github.com/TakiKauser" target="_blank" rel="noopener noreferrer"><FaGithub className="social-icon" /></a></Link>
                <Link><a href="https://www.linkedin.com/in/taki-kauser/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="social-icon" /></a></Link>
                <Link><a href="https://www.facebook.com/taki.kauser" target="_blank" rel="noopener noreferrer"><FaFacebook className="social-icon" /></a></Link>
                <Link><a href="https://www.instagram.com/taki_kauser/" target="_blank" rel="noopener noreferrer"><FaInstagram className="social-icon" /></a></Link>
                <Link><a href="https://twitter.com/taki_kauser" target="_blank" rel="noopener noreferrer"><FaTwitter className="social-icon" /></a></Link>
            </div>
            <div className="container p-4">
                <h2>Contact Us</h2>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="email" placeholder="xyz@yahoo.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" placeholder="Type your Message" rows={3} />
                </Form.Group>
                <div>
                    <Button type="submit" className="mb-5 px-3" variant="dark">
                        <FontAwesomeIcon icon={faPaperPlane} /> Send
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Contact;