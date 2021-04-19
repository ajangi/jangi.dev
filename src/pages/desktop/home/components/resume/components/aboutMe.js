import React from 'react';
import Image from './../../../../../../assets/images/setup.jpg';
const AboutMe = () => {
    return (
        <div className="about-me-holder">
            <div className="image-holder">
                <img src={Image} height={'180px'} alt={"about-me"} />
            </div>
            <div className="about-me">
            I really love programming and I have been doing it since I was 16. I also like engineering and project management which is clear from my educational background. Now, I work for start-ups as senior full-stack developer or technical team lead.
            </div>
        </div>
    )
};

export default AboutMe;