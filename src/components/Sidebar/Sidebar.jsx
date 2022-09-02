import React from 'react'
import{SidebarContainer, 
    Icon,
    SidebarWrapper,
    SidebarMenu, 
    SidebarLink} from './SidebarStyle'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={ isOpen } onClick={ toggle }>
            <Icon onClick={ toggle }></Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={ toggle }>About</SidebarLink>
                    <SidebarLink to="passion" onClick={ toggle }>Passion</SidebarLink>
                    <SidebarLink to="education" onClick={ toggle }>Education</SidebarLink>
                    <SidebarLink to="skills" onClick={ toggle }>Skills</SidebarLink>
                    <SidebarLink to="experience" onClick={ toggle }>Experience</SidebarLink>
                    <SidebarLink to="projects" onClick={ toggle }>Projects</SidebarLink>
                    <SidebarLink to="contact" onClick={ toggle }>Contact</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;