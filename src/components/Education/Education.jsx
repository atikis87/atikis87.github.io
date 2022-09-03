import React from 'react';
import {ExpSection, TimeLine, Block} from './EducationStyle';

import {
    RowOne,
    AboutTitle,
    MySpan,
    ProgressLine} from '../About/AboutStyle';

import EducationList from './Edu.data';


const Education = () =>
{

return (
    <ExpSection id="education">
        <RowOne>
            <AboutTitle>My <MySpan>Education</MySpan>
                <ProgressLine></ProgressLine>
            </AboutTitle>
        </RowOne>

    <TimeLine>
        {EducationList.map((EduData, pos)=>{
            return(
                <Block key={pos}>
                    <h4>{EduData.date}</h4>
                    <h3>{EduData.education}</h3>
                    <p>{EduData.country}</p>
                    <h3>{EduData.school}</h3>
                </Block>
            )
        })}
    </TimeLine>
    </ExpSection>
)}

export default Education;