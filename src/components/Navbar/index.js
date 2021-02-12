import React, { useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { animationScroll as scroll } from 'react-scroll';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

export const Navbar = ({ toggle }) => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    // useEffect(() => {
    //     window.addEventListener('scroll')
    // }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>
                        <NavLinks>ZBK DESIGN</NavLinks>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <BiMenuAltRight />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="project"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                activeClass='active'
                            >projekty</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="aboutUs"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                activeClass='active'
                            >o nas</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                activeClass='active'
                            >kontakt</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
}

export default Navbar;