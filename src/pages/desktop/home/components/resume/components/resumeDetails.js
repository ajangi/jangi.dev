import React from 'react';
import {useSelector} from 'react-redux'
import Certificates from './certificates';
import Educations from './educations';
import Experiences from './experiences';
import Projects from './projects';
import ResumeDetailItems from './resumeDetailItems';
import Skills from './skills';

const ResumeDetails = () => {
    const {resume_active_item} = useSelector(state => state.resume);
    const renderResumeDetails = () => {
        switch(resume_active_item){
            case 'experience':
                return <Experiences />
            case 'skills':
                return <Skills />
            case 'certificates':
                return <Certificates />
            case 'education':
                return <Educations />
            case 'projects':
                return <Projects />
            default:
                return null;
        }
    }
    return (
        <div className="resume-details-holder">
            <div className="resume-detail-items-holder">
                <ResumeDetailItems />
            </div>
            <div className="resume-details-item-data">
                {renderResumeDetails()}
            </div>
        </div>
    )
};

export default ResumeDetails;