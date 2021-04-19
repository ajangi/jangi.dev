import React from 'react';
import {educations} from '../../../../../../config/conf';
const Educations = () => {
    return(
        <div className="educations-list-holder">
            {
                educations.map((value, index) => {
                    return (
                        <div className="education-item" key={index}>
                            <div className="university">
                                {value.university}
                                <span className="date">( {value.date.start_date} - {value.date.end_date} )</span>
                            </div>
                            <div className="sub-title">
                                {value.sub_title}
                            </div>
                            <div className="meta-data">
                            {value.meta_data}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Educations;