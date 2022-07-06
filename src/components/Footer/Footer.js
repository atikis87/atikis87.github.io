import React from 'react';
import {FaGithub,FaLinkedin,FaTelegram} from 'react-icons/fa';
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

const toggleHome = () =>
{
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
                                    A.T. I
                                </SocialLogo>
                                <WebsiteRights> A.T. I © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                                <SocialIcons>
                                    <SocialIconLink href="https://www.linkedin.com/in/attila-kiss-2330791b4/" target="_blank" aria-label="LinkedIn"><FaGithub/></SocialIconLink>
                                    <SocialIconLink href="https://github.com/atikis87" target="_blank" aria-label="LinkedIn"><FaLinkedin/></SocialIconLink>
                                    <SocialIconLink href="mailto:ati.radeone@gmail.com" target="_blank" aria-label="LinkedIn"><FaTelegram/></SocialIconLink>
                                </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
            </FooterWrap>
        </FooterContainer>

        </>
    )
}

export default Footer;