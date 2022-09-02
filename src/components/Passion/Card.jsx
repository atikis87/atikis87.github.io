import React from 'react';
import first from '../../images/ServicesImages/graphicsDesign.png';
import secound from '../../images/ServicesImages/webdeveloper01.png';
import third from '../../images/ServicesImages/service01.png';

import {
    CardWrapper,
    BildDiv,
    Picture,
    PassionContent} from './PassionStyle'



const Card = () => {
    return (
        <>
        <CardWrapper id="1">
            <BildDiv>
                <Picture src={first} alt="dev1" />
            </BildDiv>
            <PassionContent>
                <h4>Responsive Ui Design</h4>
                <p>A user interface is like a joke. If you have to explain it, it's not that good. I strive to develop and implement responsive
                    and aesthetically pleasing interfaces for websites and apps that adapt to any type of device, platform, or browser.
                </p>
            </PassionContent>
        </CardWrapper>
        <CardWrapper id="2">
            <BildDiv>
                <Picture src={secound} alt="dev2" />
            </BildDiv>
            <PassionContent>
                <h4>Web Developer</h4>
                <p>With a strong foundation in computer science, I'm passionate about web design and development, and interested in mobile 
                    app development.
                </p>
            </PassionContent>
        </CardWrapper>
        <CardWrapper id="3">
            <BildDiv>
                <Picture src={third} alt="dev3" />
            </BildDiv>
            <PassionContent>
                <h4>Web Design</h4>
                <p>Design isn't just what a product looks like and feels like on the outside. Design encompasses the internal functionality 
                    of a product as well as the overall user experience.
                </p>
            </PassionContent>
        </CardWrapper>
        <CardWrapper id="4">
            <BildDiv>
                <Picture src={third} alt="dev3" />
            </BildDiv>
            <PassionContent>
                <h4>Web Design</h4>
                <p>Design isn't just what a product looks like and feels like on the outside. Design encompasses the internal functionality 
                    of a product as well as the overall user experience.
                    
                </p>
            </PassionContent>
        </CardWrapper>
        </>
    )
}

export default Card
