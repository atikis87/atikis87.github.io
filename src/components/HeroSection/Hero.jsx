import React, {useState} from 'react';
import Video from '../../videos/video02.mp4';
import {Button} from './HeroButton';
import {HeroContainer,
        HeroBg,
        VideoBg,
        HeroContent,
        HeroH2,
        HeroH3,
        HeroName,
        HeroP,
        HeroBtnWrapper,
        Send,
        ArrowForward,
        ArrowRight,
        Arrow
} from './HeroStyle';

const HeroSection = () =>
{
    const [hover, setHover] = useState(false)

    const onHover = () =>
    {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video02/mp4' />
            </HeroBg>

            <HeroContent>
                <HeroH3>Hi, My name is</HeroH3>
                 <HeroName>Attila Kiss</HeroName>

                    <br/>

                    <HeroH2>Junior Software Developer</HeroH2>

                <HeroP>
                I'm a Vienna-based software engineer who specializes in building 
                (and occasionally designing) exceptional digital experiences. I enjoy turning complex problems into simple, beautiful and intuitive designs.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter={onHover} 
                    onMouseLeave = {onHover}
                    primary='true'
                    dark='true'>
                    <Send href="mailto:ati.radeone@gmail.com"> Get In Touch {hover ? <ArrowForward /> : <ArrowRight />}</Send>
                    </Button>
                </HeroBtnWrapper>

            </HeroContent>
            <Arrow></Arrow>
        </HeroContainer>
    )
}

export default HeroSection;
