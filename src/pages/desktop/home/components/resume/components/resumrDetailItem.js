import React from 'react';

const ResumeetailItem = (props) => {
    const {icon, active_icon, title, active, onClick} = props;

    return (
        <div className="resume-detail-item" onClick={onClick}>
            <div className={"icon-holder" + (active ? " active" : "")}>
                <img src={active ? active_icon : icon} alt="resume-item-icon" width={20} />
            </div>
            <div className={"item-title" + (active ? " active" : "")}>
                {title}
            </div>
        </div>
    )
};

export default ResumeetailItem;