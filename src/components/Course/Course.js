import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight, faUserFriends, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Course.css';

const Course = (props) => {
    // destructure properties from object as props
    const { img, name, Description, seats, price } = props.course;
    // individual course
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img className="course-image" variant="top" src={img} />
                    <Card.Body>
                        <Card.Title><FontAwesomeIcon icon={faHandPointRight} /> {name}</Card.Title>
                        <Card.Text>
                            <div className="d-flex justify-content-center">
                                <p className="p-2 m-2 fw-bold">Available Seat: <FontAwesomeIcon icon={faUserFriends} /> {seats}</p>
                                <p className="p-2 m-2 fw-bold">Course Fee: <FontAwesomeIcon icon={faDollarSign} /> {price}</p>
                            </div>
                            <p className="p-2 mx-2">{Description.slice(0, 203)}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Course;