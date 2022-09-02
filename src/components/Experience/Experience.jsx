import React from 'react';

import { ReactComponent as WorkIcon } from "../../images/Timeline Images/work.svg";
import { ReactComponent as SchoolIcon } from "../../images/Timeline Images/school.svg";

import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./ExpStyle.css";

import {ExpSection,ExpWrapper,Line} from './ExperienceStyle';
import timelineElements from './timelineElements';
import {RowOne,AboutTitle,MySpan} from '../About/AboutStyle';





const Experience = () =>
{
    let workIconStyles = { background: "#d30000" };
    let schoolIconStyles = { background: "#ff729a" };
return (
    <ExpSection id="experience">
        <RowOne>
            <AboutTitle>Ex<MySpan>perience</MySpan>
                <Line></Line>
            </AboutTitle>
        </RowOne>
        <ExpWrapper>
            <VerticalTimeline>
                {timelineElements.map((element,pos) => {
                let isWorkIcon = element.icon === "work";
                let showButton =
                    element.buttonText !== undefined &&
                    element.buttonText !== null &&
                    element.buttonText !== "";
                return (
                    <VerticalTimelineElement  key={pos} date={element.date} dateClassName="date" iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                    icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}>
                    <h3 className="vertical-timeline-element-title"> {element.title}</h3>
                    <h5 className="vertical-timeline-element-subtitle"> {element.location}</h5>
                    <h2>{element.company}</h2>
                    <p id="description">{element.description}</p>
                    {showButton && ( <a className={`button ${ isWorkIcon ? "workButton" : "schoolButton"}`} href="/"> {element.buttonText}</a> )}
                    </VerticalTimelineElement>
                );
                })}
            </VerticalTimeline>
        </ExpWrapper>
    </ExpSection>
    
)}

export default Experience;