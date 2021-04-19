import React from 'react';
import './../assets/styles/mobile/mobile.scss';
import NavBarMobile from '../components/navbar/NavBarMobile';
const MobileLayout = (props) => {
    const {children} = props;
    return (
        <>
            <div className="wrapper">
                    <NavBarMobile />
                    <div className="container">
                        {children}
                    </div>
            </div>
        </>
    )
};

export default MobileLayout;