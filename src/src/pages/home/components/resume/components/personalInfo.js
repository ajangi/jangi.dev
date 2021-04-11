import React from 'react';
import AboutMe from './aboutMe';
import ContactMe from './contactInfo';

const PersonalInfo = () => {
    return (
        <div className="personal-info-holder">
            <ContactMe />
            <AboutMe />
        </div>
    )
};

export default PersonalInfo;