import React, { useState } from 'react';
import {
    SidebarContainer,
    SidebarLogo,
    SidebarIcon,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarRoute
} from './SidebarElements';
import logo from '../../images/zuzanna_b_kaluc_logo.svg';

const Sidebar = ({ isOpen, toggle }) => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <SidebarLogo to='/'>
                <SidebarIcon src={logo} alt='logo ZBK interiors' />
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
