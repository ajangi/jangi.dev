import React from 'react';
import Arrow from './../../../../../../assets/images/icons/arrow.svg';
const ExperienceItem = (props) => {
    const {company,conpany_title, title, date, short_description, actions} = props;
    return (
        <div className="experience-item-holder">
            <div className="header">
                {/* <div className="logo-holder">
                    <img src={logo} width={55} />
                </div> */}
                <div className="data">
                    <span className="company">{company}</span>
                    <span className="job-title">{title}</span>
                    <span className="date">( {date.start_date} - {date.end_date} )</span>
                    <div className="company-title">
                        {conpany_title}
                    </div>
                </div>
            </div>
            <div className="description">
                {short_description}
            </div>
            <div className="actions">
                {
                    actions.map((value,index) => {
                        return(
                            <div className="action-holder" key={index}>
                                <img src={Arrow} width={15} alt={"arrow"} />
                                {value}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default ExperienceItem;