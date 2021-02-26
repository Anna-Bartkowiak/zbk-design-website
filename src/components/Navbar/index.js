import React, { useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { animationScroll as scroll } from 'react-scroll';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
} from './NavbarElements';

export const Navbar = ({ toggle }) => {
    // const [hover, setHover] = useState(false);

    // const onHover = () => {
    //     setHover(!hover);
    // };

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
                    <NavLogo to='/' onClick={toggleHome} alt='logo'>
                        <NavIcon />
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <BiMenuAltRight />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="project"
                                smooth={true}
                                duration={800}
                                spy={true}
                                exact='true'
                                offset={0}
                                activeClass='active'
                            >projekty</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="aboutUs"
                                smooth={true}
                                duration={800}
                                spy={true}
                                exact='true'
                                offset={0}
                                activeClass='active'
                            >o mnie</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact"
                                smooth={true}
                                duration={800}
                                spy={true}
                                exact='true'
                                offset={0}
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