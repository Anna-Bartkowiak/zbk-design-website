import React from 'react';
import {
    SidebarContainer,
    SidebarLogo,
    SidebarIcon,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink
} from './SidebarElements';
import logo from '../../images/zuzanna_b_kaluc_logo.svg';

const Sidebar = ({ isOpen, toggle }) => {
    // const [hover, setHover] = useState(false);

    // const onHover = () => {
    //     setHover(!hover);
    // };

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
                    <SidebarLink
                        to='offer'
                        onClick={toggle}
                        offset={-80}
                    >oferta</SidebarLink>
                    <SidebarLink
                        to='project'
                        onClick={toggle}
                        offset={-100}
                    >projekty</SidebarLink>
                    <SidebarLink
                        to='aboutUs'
                        onClick={toggle}
                        offset={-80}
                    >o mnie</SidebarLink>
                    <SidebarLink
                        to='contact'
                        onClick={toggle}
                        offset={-80}
                    >kontakt</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer >
    );
};


export default Sidebar;
