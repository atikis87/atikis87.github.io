import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Carousel, { consts } from 'react-elastic-carousel';
//import Card from './Card';

import first from '../../images/ServicesImages/graphicsDesign.png'
import secound from '../../images/ServicesImages/webdeveloper01.png'
import third from '../../images/ServicesImages/service01.png'

import {PassionContainer,
		PassionRow, 
		BoxContainer,
		InfoLeft,
		BoxOne,
		MyDescreption,
		PassionArrow,
		CardWrapper,
		BildDiv,
		Picture,
		PassionContent} from './PassionStyle'


const Passion = () => {

const breakPoints = [
	{ width:500, itemsToShow: 1 },
	{ width:768, itemsToShow: 2, itemsToScroll: 2 },
	{ width:1200, itemsToShow: 3 },
	{ width:1500, itemsToShow: 4 }
]

	return (
			<PassionContainer id="passion">
				<PassionRow>
					<InfoLeft>
						<BoxOne>
							<MyDescreption>
									<h2>What I Do</h2>
									<p>I've been doing web development for about 2 years now, and I'm always eager to learn more in this fast paced industry.</p>
							</MyDescreption>
						</BoxOne>
					</InfoLeft>

					<BoxContainer>
						<Carousel renderArrow={({ type, onClick }) => {
							const pointer = type === consts.PREV ? <FaArrowLeft /> : <FaArrowRight />
							return <PassionArrow onClick={onClick}>{pointer}</PassionArrow>
							}}
						
						
						disableArrowsOnEnd={ false } breakPoints={breakPoints}>
							<CardWrapper>
								<BildDiv>
									<Picture src={secound} alt="dev2" />
								</BildDiv>
								<PassionContent>
									<h4>Web Development</h4>
									<p>With a strong foundation in computer science, I'm passionate about web design and development, and interested in mobile 
									   app development.
									</p>
								</PassionContent>
							</CardWrapper>
							<CardWrapper>
								<BildDiv>
									<Picture src={third} alt="dev3" />
								</BildDiv>
								<PassionContent>
									<h4>Design</h4>
									<p>Design isn't just what a product looks like and feels like on the outside. Design encompasses the internal functionality 
									   of a product as well as the overall user experience.
									</p>
								</PassionContent>
							</CardWrapper>
							<CardWrapper>
								<BildDiv>
									<Picture src={third} alt="dev3" />
								</BildDiv>
								<PassionContent>
									<h4>Development</h4>
									<p>When developing a product, it is especially important to create a reusable components which results in clarity and easier understanding of the code.
									   The source that I use for this purpose is REACT and Vue JS.	
									</p>
								</PassionContent>
							</CardWrapper>
							<CardWrapper>
								<BildDiv>
									<Picture src={first} alt="dev1" />
								</BildDiv>
								<PassionContent>
									<h4>App/Portfolio</h4>
									<p>A portfolio website is the quickest and easiest way of showcasing your work as a designer or freelancer. The diversity of application development mainly helps me to build up on my functional skills.
									</p>
								</PassionContent>
							</CardWrapper>
						</Carousel>
					</BoxContainer>


				</PassionRow>
			</PassionContainer>
	);
}

export default Passion


/*
							<PassionNav>
									<PassionArrow><FaArrowLeft /></PassionArrow>
									<PassionArrow><FaArrowRight /></PassionArrow>
							</PassionNav>

*/