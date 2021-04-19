import React from 'react';

const Skills = () => {
    const skills_list = [
        "PHP", 
        "Laravel Framework", 
        "XML", 
        "Lumen", 
        "Symfony", 
        "MVC", 
        "mySql", 
        "mongoDB", 
        "REST API", 
        "TDD", 
        "Unit Test", 
        "OOP", 
        "Linux", 
        "Server Configuration", 
        "git", 
        "Docker", 
        "Docker Compose", 
        "Docker Swarm", 
        "Kong Api Gateway", 
        "CI/CD", 
        "Gitlab-Ci", 
        "Scrum", 
        "Design Patterns", 
        "React", 
        "Redux", 
        "React Native", 
        "Angular", 
        "Clean Code", 
        "Clean Architecture", 
        "Virtualization", 
        "SVG",  
        "GoLang", 
        "Redis", 
        "Socket",
        "GrayLog", 
        "Gelf", 
        "Sentry", 
        "SOA", 
        "Microservice Architecture", 
        "HAProxy", 
        "Technical Team Lead", 
        "Bash Scripting"
    ];
    return (
        <div className="skills-list-holder">
            {/* <div className="title">
                Skills
            </div> */}
            <div className="skills-items">
                {
                    skills_list.map((value, index) => {
                        return (
                            <div className="skill-item" key={index}>
                                {value}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Skills;