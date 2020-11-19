import React from 'react';
// import { FaTimes } from 'react-icons/fa';
import { SidebarContainer, SidebarLogo, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
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
                    <SidebarLink to='pricing' onClick={toggle}>wycena</SidebarLink>
                    <SidebarLink to='contact' onClick={toggle}>contact</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer >
    );
};


export default Sidebar;
