import React from 'react';

const MainLayout = (props) => {
    const {children} = props;
    return (
        <div className="wrapper">
            {children}
        </div>
    )
};

export default MainLayout;