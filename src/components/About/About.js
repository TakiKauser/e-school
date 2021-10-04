import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="container about-container">
            <div className="row">
                <div className="col-5">
                    <h3>About</h3>
                    <h1 className="fw-bolder">eSchool</h1>
                </div>
                <div className="col-5 content">
                    <p>"eSchool" is an online platform to learn & develop your skills. Experts are providing courses of different kinds of basic skill development sectors. Join us & utilize your time by developing your skills with the supervision of proffessionals.</p>
                </div>
            </div>
        </div>
    );
};

export default About;