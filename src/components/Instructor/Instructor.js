import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Instructor.css'

const Instructor = (props) => {
    // destructure properties of object from props
    const { img, name, expertise } = props.instructor;
    // individual instructor data displayed
    return (
        <div className="mx-auto instructor col-sm-1 col-md-3">
            <div className=" d-flex justify-content-center align-items-center">
                <div>
                    <img className="instructor-image" src={img} alt="" />
                </div>
                <div className="ms-3">
                    <h3>{name}</h3>
                    <h6><FontAwesomeIcon icon={faGraduationCap} /> {expertise}</h6>
                </div>
            </div>
        </div>
    );
};

export default Instructor;