import React from 'react';
import {RowOne,AboutTitle,MySpan} from '../About/AboutStyle';
import ProjectsData from "./ProjectsData";
import {ProjectsContainer,
        ProjectsWrapper,
        ProLine,
        ProjectsCard,
        ProImgContent,
        ItemCont,
        ProjectsH3,
        ProjectsP,
        ProBtn,
        ViewButton} from './ProjectsStyle';
const Projects = () =>
{
    return (
        <ProjectsContainer id="projects">
        <RowOne>
            <AboutTitle>Pro<MySpan>jects</MySpan>
                <ProLine></ProLine>
            </AboutTitle>
        </RowOne>
            <ProjectsWrapper>
            {ProjectsData.map((ProjectsData, pos) => {
                return(
                <ProjectsCard key={pos}>
                    <ProImgContent>
                        <img src={ProjectsData.imgSrc} alt="images"/>
                    </ProImgContent>
                    <ItemCont>
                        <ProjectsH3>{ProjectsData.title}</ProjectsH3>
                        <ProjectsP>{ProjectsData.description}</ProjectsP>
                    </ItemCont>
                    <ProBtn>
                        <ViewButton href={ProjectsData.link}>{ProjectsData.buttonText}</ViewButton>
                        {ProjectsData.html}
                    </ProBtn>
                </ProjectsCard>             
                )   
                })}
            </ProjectsWrapper>
        </ProjectsContainer>
    )
}
export default Projects;
