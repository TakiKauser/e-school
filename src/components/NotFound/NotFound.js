import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Button } from 'react-bootstrap';
import './NotFound.css';
import { NavLink } from 'react-router-dom';

const NotFound = () => {

    return (
        <div className="not-found">
            <NavLink to="/">
                <Button type="submit" className="m-5 px-3" variant="danger">
                    <FontAwesomeIcon icon={faArrowLeft} /> Back to Home
                </Button>
            </NavLink>
        </div>
    );
};

export default NotFound;