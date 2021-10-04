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
            {/* back-up text as bg-img can rarely found in netlify! */}
            <h1 className="bg-danger text-white fw-bolder p-3">404 Page Not Found ! ! !</h1>
        </div>
    );
};

export default NotFound;