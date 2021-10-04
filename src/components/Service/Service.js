import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight, faUserFriends, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css';

const Sevice = (props) => {
    // destructure object properties
    const { img, name, seats, price } = props.service;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img className="card-image" variant="top" src={img} />
                    <Card.Body>
                        <Card.Title><FontAwesomeIcon icon={faHandPointRight} /> {name}</Card.Title>
                        <Card.Text className="d-flex justify-content-center">
                            <h5 className="p-2 m-2"><FontAwesomeIcon icon={faUserFriends} /> {seats}</h5>
                            <h5 className="p-2 m-2"><FontAwesomeIcon icon={faDollarSign} /> {price}</h5>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Sevice;