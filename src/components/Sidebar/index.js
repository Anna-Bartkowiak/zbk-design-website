import React, { useState } from 'react';
import {
    SidebarContainer,
    SidebarLogo,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarRoute
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <SidebarLogo to='/'>
                ZBK DESIGN
            </SidebarLogo>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='project' onClick={toggle}>projekty</SidebarLink>
                    <SidebarLink to='aboutUs' onClick={toggle}>o mnie</SidebarLink>
                    <SidebarLink to='contact' onClick={toggle}>kontakt</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer >
    );
};


export default Sidebar;
