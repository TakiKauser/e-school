import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Instructor from '../Instructor/Instructor';
import './Instructors.css';

const Instructors = () => {
    // react hooks
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch("./instructors.JSON")
            .then(response => response.json())
            .then(jsonData => setInstructors(jsonData))
    }, []);
    return (
        <div className="container-fluid row">
            {
                instructors.map(instructor => <Instructor
                    key={instructor.key}
                    instructor={instructor}
                ></Instructor>)
            }
        </div>
    );
};

export default Instructors;