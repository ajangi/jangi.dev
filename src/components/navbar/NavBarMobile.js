import React from 'react';
const NavBarMobile = () => {
    //const sidebarRef = useRef();
/*     const toggleMenu = () => {
        sidebarRef.current.classList.toggle('open');
    }; */
    return(
        <>
            <div className="nav-bar">
                <div className="brand">
                    Jangi.dev
                </div>
            </div>
            {/* <div className="toggle-nav">
                <img src={MenuIcon} width={30} alt={"toggle-nav-bar"} onClick={toggleMenu} />
                <div className="nav-items" ref={sidebarRef}>
                </div>
            </div> */}
        </>
    )
};

export default NavBarMobile;