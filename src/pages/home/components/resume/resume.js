import React from 'react';
import PersonalInfo from './components/personalInfo';
import ResumeDetails from './components/resumeDetails';

const Resume = () => {
    return (
        <div className="resume-holder">
            <PersonalInfo />
            <ResumeDetails />
        </div>
    )
};

export default Resume;