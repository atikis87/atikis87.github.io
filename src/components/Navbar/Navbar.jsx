import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu,
  NavItem, 
  NavLinks, 
  NavBtn, 
  NavBtnLink, 
  Image } from './NavbarStyle';
import logo from '../../images/logoSkin02.png';

const Navbar = ({ toggle }) =>{
    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () =>{
        if(window.scrollY > 80){
            setScrollNav(true)
        }
        else{
            setScrollNav(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll', changeNav)
    }, []);
    const toggleHome = () =>{
        window.location.reload();
        //scroll.scrollToTop();
    }
    return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>
                    <Image src={logo} alt='logo' />
                </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'
                        smooth={true}
                        duration={1200}
                        spy={true}
                        exact='true'
                        offset={-80}>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='passion'
                        smooth={true}
                        duration={1200}
                        spy={true}
                        exact='true'
                        offset={-80}>Passion</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='experience'
                        smooth={true}
                        duration={1200}
                        spy={true}
                        exact='true'
                        offset={-80}>Experience</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='skills'
                        smooth={true}
                        duration={1200}
                        spy={true}
                        exact='true'
                        offset={-80}>Skills</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='education'
                        smooth={true}
                        duration={1200}
                        spy={true}
                        exact='true'
                        offset={-80}>Education</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='projects'
                        smooth={true}
                        duration={1200}
                        spy={true}
                        exact='true'
                        offset={-80}>Projects</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='contact'
                        smooth={true}
                        duration={1200}
                        spy={true}
                        exact='true'
                        offset={-80}>Contact</NavLinks>
                    </NavItem>
                    <NavBtn>
                        <NavBtnLink to="Attila Kiss CV.pdf" download="Attila Kiss CV.pdf">Resume</NavBtnLink>
                    </NavBtn>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
    </>
    );
};
export default Navbar;