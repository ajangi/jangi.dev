import React from 'react';
const ContactItem = (props) => {
    const { icon, value } = props;
    return (
        <div className="contact-item-holder">
            <div className="icon">
                <img src={icon} width={18} alt={"contact-me"} />
            </div>
            <div className="value">
                {value}
            </div>
        </div>
    )
};

export default ContactItem;