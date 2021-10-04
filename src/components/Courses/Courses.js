import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {
    // react hooks
    const [courses, setCourses] = useState([]);
    // fetch json data
    useEffect(() => {
        fetch("./courses.JSON")
            .then(response => response.json())
            .then(jsonData => setCourses(jsonData))
    }, []);
    return (
        <div className="container my-5">
            <h2 className="my-5">Courses</h2>
            <Row xs={1} md={1} className="g-4">
                {
                    courses.map(course => <Course
                        key={course.key}
                        course={course}
                    ></Course>)
                }
            </Row>
        </div>
    );
};

export default Courses;