import React from 'react';
import AboutMe from './components/aboutMe';
import ContactMe from './components/contactInfo';
import Experiences from './components/experiences';
const Resume = () => {
    return (
        <div className="resume-holder">
            <ContactMe />
            <AboutMe />
            <Experiences />
        </div>
    )
};

export default Resume;