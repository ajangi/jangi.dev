import React from 'react';

const Button = (props) => {
    const { type, content, block, children } = props;
    return (
        <div className="btn-holder">
            <button className={
            "btn" + (type !== undefined ? " btn-"+type : " btn-success") + ((block ? " btn-block" : ""))}
            >
                {children ?? content}
            </button>
        </div>
    )
};

export default Button;