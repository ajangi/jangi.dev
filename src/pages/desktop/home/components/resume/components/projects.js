import React from 'react';
import {projects} from '../../../../../../config/conf';
const Projects = () => {
    return (
        <div className="projects-list-holder">
            {
                projects.map((value, index) => {
                    return (
                        <div className="project-item">
                            <div className="title">
                                {value.title} {value.sub_title}
                            </div>
                            <div className="description">
                                {value.description}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Projects;