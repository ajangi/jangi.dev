import React from 'react';
import {certificates} from '../../../../../../config/conf';
const Certificates = () => {
    return (
        <div className="certificates-list-holder">
            {
                certificates.map((value, index) => {
                    return (
                        <div className="certificate-item" key={index}>
                            <div className="title">
                                {value.title}
                            </div>
                            <div className="sub-title">
                                {value.sub_title}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Certificates;