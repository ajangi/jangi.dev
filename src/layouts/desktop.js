import React from 'react';
import NavBar from '../components/navbar/NavBar';
import './../assets/styles/desktop/desktop.scss';
const DesktopLayout = (props) => {
    const {children} = props;
    return (
        <>
            <div className="wrapper">
                <NavBar />
                <div className="container">
                    {children}
                </div>
            </div>
        </>
    )
};

export default DesktopLayout;