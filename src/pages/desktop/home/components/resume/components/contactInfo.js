import React from 'react';
import Button from '../../../../../../components/buttons/Button';
//import ProfileImage from './../../../../../../assets/images/avatar.jpg';
import CallIcon from './../../../../../../assets/images/icons/Calling.svg';
import MailIcon from './../../../../../../assets/images/icons/Message.svg';
import ContactItem from './contactItem';
const ContactMe = () => {
    return (
        <div className="contact-me-holder">
            <div className="profile-image-holder">
                {/* <img src={ProfileImage} height={'180px'} alt={"avatar"} /> */}
                <div className="avatar-placeholder">
                    AJ
                </div>
            </div>
            <div className="data-holder">
                <div className="name-holder">
                    <div className="name">
                        Alireza Jangi
                    </div>
                    <div className="current-position">
                        Technical Team Lead at SnappDoctor
                    </div>
                </div>
                <div className="contact-items-list">
                    <ContactItem icon={CallIcon} value="+98 939-356-3537" />
                    <ContactItem icon={MailIcon} value="ajangi@hotmail.com" />
                </div>
                <div className="action-buttons">
                    <Button type="primary" content={"Contact Me"} block={true}><a href="mailto:ajangi@hotmail.com">Contact Me</a></Button>
                    <Button type="success" content={"Follow"} block={true}><a href="https://www.linkedin.com/in/alireza-jangi-9b280867/" target="blank">Follow</a></Button>
                </div>
            </div>
        </div>
    )
};

export default ContactMe;