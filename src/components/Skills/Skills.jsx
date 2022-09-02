import React from 'react';

import ProgressBarLine from './ProgressBarLine';
import SkillsCard from './Card/SkillsCard';

import {SkillsSection,
        SkillsWrapper,
        SkillsRow,
        Column,
        SkillsBox,
        SkillsInner,
        ListL,
        ListR,
        ListInner,
        SkillsHeader,
        ImgBox,} from './SkillsStyle';

import {
    RowOne,
    AboutTitle,
    MySpan,
    ProgressLine} from '../About/AboutStyle';



import html from '../../images/SkillsImages/html.png'
import css from "../../images/SkillsImages/css3.svg";
import javascript from "../../images/SkillsImages/javascript.svg";
import java from "../../images/SkillsImages/java.png";
import cPlusPlus from "../../images/SkillsImages/cplusplus.png";
import php from "../../images/SkillsImages/php.png";
import python from '../../images/SkillsImages/python.svg';





const Skills = () => {
    return (
        <SkillsSection id="skills">
        <SkillsWrapper>
            <RowOne>
                <AboutTitle>All <MySpan>Skills</MySpan>
                <ProgressLine></ProgressLine>
            </AboutTitle>
            </RowOne>
            <SkillsRow>
                <Column>
                    <SkillsBox>
                        <SkillsInner>
                            <ListL>
                            <h4>Programming Languages</h4>
                            <hr />
                                <ListInner>
                                    <SkillsHeader>
                                        <ImgBox>
                                            <img src={html} alt="HTML" />
                                        </ImgBox>
                                        <ProgressBarLine done="90"/>
                                        <h4>HTML</h4>
                                    </SkillsHeader>
                                </ListInner>

                                <ListInner>
                                    <SkillsHeader>
                                        <ImgBox>
                                            <img src={css} alt="CSS" />
                                        </ImgBox>
                                        <ProgressBarLine done="80"/>
                                        <h4>CSS</h4>
                                    </SkillsHeader>
                                </ListInner>

                                <ListInner>
                                    <SkillsHeader>
                                        <ImgBox>
                                            <img src={javascript} alt="JavaScript" />
                                        </ImgBox>
                                        <ProgressBarLine done="70"/>
                                        <h4>JS</h4>
                                    </SkillsHeader>
                                </ListInner>

                                
                                <ListInner>
                                    <SkillsHeader>
                                        <ImgBox>
                                            <img src={cPlusPlus} alt="C++" />
                                        </ImgBox>
                                        <ProgressBarLine done="20"/>
                                        <h4>C++</h4>
                                    </SkillsHeader>
                                </ListInner>

                                <ListInner>
                                    <SkillsHeader>
                                        <ImgBox>
                                            <img src={java} alt="Java" />
                                        </ImgBox>
                                        <ProgressBarLine done="50"/>
                                        <h4>Java</h4>
                                    </SkillsHeader>
                                </ListInner>

                                <ListInner>
                                    <SkillsHeader>
                                        <ImgBox>
                                            <img src={php} alt="PHP" />
                                        </ImgBox>
                                        <ProgressBarLine done="50"/>
                                        <h4>PHP</h4>
                                    </SkillsHeader>
                                </ListInner>

                                <ListInner>
                                    <SkillsHeader>
                                        <ImgBox>
                                            <img src={python} alt="Python" />
                                        </ImgBox>
                                        <ProgressBarLine done="20"/>
                                        <h4>Python</h4>
                                    </SkillsHeader>
                                </ListInner>
                            </ListL>
                        </SkillsInner>
                    </SkillsBox>
                </Column>

                <Column>
                    <SkillsBox>
                        <SkillsInner>
                            <ListR>
                                <h4>More Skills</h4>
                                <SkillsCard />
                            </ListR>
                        </SkillsInner>
                    </SkillsBox>
                </Column>

            </SkillsRow>
        </SkillsWrapper>
        </SkillsSection>
    )
}

export default Skills

/*
                        <SkillsInner>
                            <List>
                                <ListInner>
                                    <CircleProgressBar />
                                </ListInner>
                            </List>
                        </SkillsInner>


*/