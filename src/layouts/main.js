import React from 'react';
import NavBar from '../components/navbar/NavBar';

const MainLayout = (props) => {
    const {children} = props;
    return (
        <div className="wrapper">
            <NavBar />
            <div className="container">
                {children}
            </div>
        </div>
    )
};

export default MainLayout;