import React from 'react';
import {experiences} from '../../../../../../config/conf';
import ExperienceItem from './ExperienceItem';
const Experiences = () => {
    return (
        <div className="experiences-holder">
            <div className="title">
                Experiences
            </div>
            <div className="body">
                {
                    experiences.map((value,index) => {
                        return (
                            <div key={index}>
                                <ExperienceItem {...value} />
                                {
                                    index < (experiences.length - 1) ? <div className="seperator" >.        .        .</div> : null
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Experiences;