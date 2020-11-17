import React from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
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
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>ZBK DESIGN</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <BiMenuAltRight />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="project">projekty</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="pricing">wycena</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact">kontakt</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/call">+48 667 806 802</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
}

export default Navbar;