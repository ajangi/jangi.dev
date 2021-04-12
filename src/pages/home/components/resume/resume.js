import React from 'react';
import PersonalInfo from './components/personalInfo';
import Skills from './components/skills';

const Resume = () => {
    return (
        <div className="resume-holder">
            <PersonalInfo />
            <Skills />
        </div>
    )
};

export default Resume;