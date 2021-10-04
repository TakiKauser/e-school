import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight, faUserFriends, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Course.css';

const Course = (props) => {
    const { img, name, Description, seats, price } = props.course;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img className="course-image" variant="top" src={img} />
                    <Card.Body>
                        <Card.Title><FontAwesomeIcon icon={faHandPointRight} /> {name}</Card.Title>
                        <Card.Text>
                            <div className="d-flex justify-content-center">
                                <h5 className="p-2 m-2">Available Seat: <FontAwesomeIcon icon={faUserFriends} /> {seats}</h5>
                                <h5 className="p-2 m-2">Course Fee: <FontAwesomeIcon icon={faDollarSign} /> {price}</h5>
                            </div>
                            <p>{Description}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Course;