import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import ResumeetailItem from './resumrDetailItem';
import {detail_items} from './../../../../../config/conf';
import { setResumeActiveItem } from '../../../../../redux/actions/resume';
const ResumeDetailItems = () => {
    const dispatch = useDispatch();
    const {resume_active_item}  = useSelector(state => state.resume)
    return (
        <div className="resume-detail-items">
            {
                detail_items.map((value, index) => {
                    return (
                        <ResumeetailItem 
                            {...value}
                            key={index} 
                            active={resume_active_item === value.key}
                            onClick={() => dispatch(setResumeActiveItem(value.key))}
                        />
                    )
                })
            }
        </div>
    )
};

export default ResumeDetailItems;