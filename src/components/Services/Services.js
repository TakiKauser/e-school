import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    // react hooks
    const [services, setServices] = useState([]);
    // fetch json data
    useEffect(() => {
        fetch("./services.JSON")
            .then(response => response.json())
            .then(jsonData => setServices(jsonData))
    }, []);
    return (
        <div className="container my-5">
            <h2 className="my-5">Courses</h2>
            <Row xs={1} sm={2} md={4} className="g-4">
                {
                    services.map(service => <Service 
                        key={service.key}
                        service={service}
                    ></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;