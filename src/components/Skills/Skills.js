import React from 'react';
import {SkillsSection,
        SkillsWrapper,
        SkillsRow,
        Column,
        SkillsBox
} from './SkillsStyle';
import {
    RowOne,
    AboutTitle,
    MySpan,
    ProgressLine} from '../About/AboutStyle';
/*
import html from '../../images/SkillsImages/html.png'
import css from "../../images/SkillsImages/css3.svg";
import javascript from "../../images/SkillsImages/javascript.svg";
import java from "../../images/SkillsImages/java.png";
import cPlusPlus from "../../images/SkillsImages/cplusplus.png";
import php from "../../images/SkillsImages/php.png";
import python from '../../images/SkillsImages/python.svg';
*/
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


                        </SkillsBox>
                    </Column>
                    <Column>


                    </Column>

                </SkillsRow>
            </SkillsWrapper>
        </SkillsSection>
    )
}

export default Skills