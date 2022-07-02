import styled from 'styled-components';
import { Link as LinkR} from 'react-router-dom';
import { Link as LinkS} from 'react-scroll';


export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#000000cc' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    width:100%;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight:bold;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 50px;

    @media (max-width: 768px) {
        padding: 0px 10px;
    }
`

export const NavLogo = styled(LinkR)`
    width:80px;
    height:80px;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display:flex;
    align-items: center;
    margin-left: 20px;
`

export const Image = styled.img`
    width:60px;
    height:60px;

    &:hover{
        transform: translateY(-3px);
        transition: all 0.2s ease-in-out;
    }

    @media (max-width: 480px) {
        width:50px;
        height:50px;
    }


`


export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display:block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`
export const NavMenu = styled.ul`
    display:flex;
    align-items: center;
    box-pack: justify;
    justify-content: space-between;
    box-align: center;
    list-style: outside none none;
    margin: 0px;
    padding: 0px;

    @media screen and (max-width: 768px){
        display: none;
    }
`
export const NavItem = styled.li`
    height:80px;
    position: relative;
    margin: 0px 5px;
    counter-increment: item 1;

`

/* Navbar links */
export const NavLinks = styled(LinkS)`
    color: #f7ffff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    box-align: center;

    &:hover{
        text-shadow: 5px 10px 30px #f7ffff;
    }

    &.active{
    border-bottom: 3px solid #037FFF;
    }
`;


export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width:768px){
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    cursor: pointer;
    text-decoration: none;
    background:linear-gradient(to right, #ff729a, #d30000);
    color: #f7ffff;
    padding: 10px 20px;
    font-size: 16px;
    display: inline-block;
    transition: .5s;
    position: relative;
    overflow: hidden;
    z-index: 1;
    border-radius: 20px;


    &:hover:before {
        width: 198%;
    }
    
    &:hover{
        color:#d30000;
    }

    &:before{
        position: absolute;
        content: "";
        top: 0px;
        height: 100%;
        left: -25%;
        width: 0%;
        background: #fff;
        transform: skew(50deg);
        transition-duration: .6s;
        z-index: -1;
        transition: .5s;
    }

    

`