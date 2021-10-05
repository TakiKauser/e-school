import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Instructor from '../Instructor/Instructor';
import './Instructors.css';

const Instructors = () => {
    // react hooks
    const [instructors, setInstructors] = useState([]);
    // fetch json data
    useEffect(() => {
        fetch("./instructors.JSON")
            .then(response => response.json())
            .then(jsonData => setInstructors(jsonData))
    }, []);
    return (
        <div className="container-fluid row">
            <Row xs={1} md={2} lg={3} className="g-4">

                {
                    instructors.map(instructor => <Instructor
                        key={instructor.key}
                        instructor={instructor}
                    ></Instructor>)
                }
            </Row>
        </div>
    );
};

export default Instructors;