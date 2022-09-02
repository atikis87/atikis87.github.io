import React from "react";

// skills img
import { skills } from "./skills-data";

import {SkillsBox, AllCards,CardRow, CardCol, CardInfo, CardBody, CardTitle, CardText, SkillsSpan, SkillsImage} from './SkillsCard.styles';

const skillsCard = () => {
  return (
    <SkillsBox id="skills">

      <AllCards>
        <CardRow>
          <CardCol>

            {/* Frontend */}
            <CardInfo>
              <CardBody>
                <CardTitle>Frontend</CardTitle>
                <hr />
                <CardText>
                  {skills.frontend.map((skill, index) => (
                    <SkillsSpan key={index}>
                      <a href={skill.link} target="_blank" rel="noopener noreferrer">
                        <SkillsImage src={skill.imgSrc} alt={skill.imgAltText} rounded></SkillsImage> {skill.skillName}
                      </a>
                    </SkillsSpan>
                  ))}
                </CardText>
              </CardBody>
            </CardInfo>
          </CardCol>

          <CardCol>
          {/* Backend */}
          <CardInfo>
              <CardBody>
                <CardTitle>Backend</CardTitle>
                <hr />
                <CardText>
                  {skills.backend.map((skill, index) => (
                    <SkillsSpan key={index}>
                      <a href={skill.link} target="_blank" rel="noopener noreferrer">
                        <SkillsImage src={skill.imgSrc} alt={skill.imgAltText} rounded></SkillsImage> {skill.skillName}
                      </a>
                    </SkillsSpan>
                  ))}
                </CardText>
              </CardBody>
            </CardInfo>
            {/*HOSTING */}
            <CardInfo>
              <CardBody>
                <CardTitle>Hosting Platforms</CardTitle>
                <hr />
                <CardText>
                  {skills.hostingPlatforms.map((skill, index) => (
                    <SkillsSpan key={index}>
                      <a href={skill.link} target="_blank" rel="noopener noreferrer">
                        <SkillsImage src={skill.imgSrc} alt={skill.imgAltText} rounded></SkillsImage> {skill.skillName}
                      </a>
                    </SkillsSpan>
                  ))}
                </CardText>
              </CardBody>
            </CardInfo>


          </CardCol>

          <CardCol>
          {/* Database */}
          <CardInfo>
              <CardBody>
                <CardTitle>Database</CardTitle>
                <hr />
                <CardText>
                  {skills.databases.map((skill, index) => (
                    <SkillsSpan key={index}>
                      <a href={skill.link} target="_blank" rel="noopener noreferrer">
                        <SkillsImage src={skill.imgSrc} alt={skill.imgAltText} rounded></SkillsImage> {skill.skillName}
                      </a>
                    </SkillsSpan>
                  ))}
                </CardText>
              </CardBody>
            </CardInfo>

            {/* Version Control */}
            <CardInfo>
              <CardBody>
                <CardTitle>Version Control</CardTitle>
                <hr />
                <CardText>
                  <SkillsSpan>
                    <a href={skills.versionControl[0].link} target="_blank" rel="noopener noreferrer">
                      <SkillsImage src={skills.versionControl[0].imgSrc} alt={skills.versionControl[0].imgAltText} rounded></SkillsImage> {skills.versionControl[0].skillName}
                    </a>
                  </SkillsSpan>
                </CardText>
              </CardBody>
            </CardInfo>
          </CardCol>




        </CardRow>
      </AllCards>
    </SkillsBox>
  );
};

export default skillsCard;