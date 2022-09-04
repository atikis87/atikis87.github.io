import React from 'react';
import {FaGithub,FaLinkedin,FaTelegram, FaArrowAltCircleUp} from 'react-icons/fa';
import {FooterContainer,
        FooterWrap,
        SocialMedia,
        SocialMediaWrap,
        SocialLogo,
        WebsiteRights,
        SocialIcons,
        SocialIconLink
} from './FooterStyle';
import {animateScroll as scroll} from 'react-scroll';

const toggleHome = () =>{
    scroll.scrollToTop();
}
const Footer = () => {
    return (
        <>
        <FooterContainer>
            <FooterWrap>
                    <SocialMedia>
                        <SocialMediaWrap>
                                <SocialLogo to='/'onClick={toggleHome}>
                                <FaArrowAltCircleUp/>
                                </SocialLogo>
                                <WebsiteRights> A.T. I © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                                <SocialIcons>
                                    <SocialIconLink href="https://github.com/atikis87" target="_blank" aria-label="Github"><FaGithub/></SocialIconLink>
                                    <SocialIconLink href="https://www.linkedin.com/in/attila-kiss-2330791b4/" target="_blank" aria-label="LinkedIn"><FaLinkedin/></SocialIconLink>
                                    <SocialIconLink href="mailto:ati.radeone@gmail.com" target="_blank" aria-label="Mail"><FaTelegram/></SocialIconLink>
                                </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
            </FooterWrap>
        </FooterContainer>

        </>
    )
}
export default Footer;