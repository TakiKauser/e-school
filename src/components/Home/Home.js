import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Instructors from '../Instructors/Instructors';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Instructors></Instructors>
            <Contact></Contact>
        </div>
    );
};

export default Home;