import React, { useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
// import { animationScroll as scroll } from 'react-scroll';
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
import logo from '../../images/zuzanna_b_kaluc_logo.svg';

export const Navbar = ({ toggle }) => {
    // const [hover, setHover] = useState(false);

    // const onHover = () => {
    //     setHover(!hover);
    // };

    // useEffect(() => {
    //     window.addEventListener('scroll')
    // }, []);

    // const toggleHome = () => {
    //     scroll.scrollToTop();
    // };

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/' alt='logo'>
                        <NavIcon src={logo} alt='logo ZBK interiors' />
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <BiMenuAltRight />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks
                                to="offer"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                activeClass='active'
                            >oferta</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="project"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-100}
                                activeClass='active'
                            >projekty</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="aboutUs"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-90}
                                activeClass='active'
                            >o mnie</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="contact"
                                smooth={true}
                                duration={500}
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