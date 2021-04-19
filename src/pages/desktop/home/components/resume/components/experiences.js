import React from 'react';
import {experiences} from '../../../../../../config/conf';
import ExperienceItem from './ExperienceItem';
const Experiences = () => {
    return (
        <div className="experiences-holder">
            {
                experiences.map((value,index) => {
                    return <ExperienceItem {...value} key={index} />
                })
            }
        </div>
    )
};

export default Experiences;