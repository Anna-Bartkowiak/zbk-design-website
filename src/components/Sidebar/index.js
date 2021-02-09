import React, { useState } from 'react';
import {
    SidebarContainer,
    SidebarLogo,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    // SideBtnWrap,
    SidebarRoute
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <SidebarLogo to='home'>
                ZBK DESIGN
            </SidebarLogo>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='project' onClick={toggle}>projekty</SidebarLink>
                    <SidebarLink to='pricing' onClick={toggle}>o nas</SidebarLink>
                    <SidebarLink to='contact' onClick={toggle}>kontakt</SidebarLink>
                </SidebarMenu>
                {/* <SideBtnWrap>
                    <SidebarRoute
                        to="signin"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}>
                        Zapisz się
                        </SidebarRoute>
                </SideBtnWrap> */}
            </SidebarWrapper>
        </SidebarContainer >
    );
};


export default Sidebar;
