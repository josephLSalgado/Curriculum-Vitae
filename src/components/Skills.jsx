import React from 'react';
import styled from 'styled-components';
import H2Styled from '../styled/H2Styled';

const SkillsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    grid-row-gap: 0.5em;
`;

const SkillsH5 = styled.h5`
    margin: 0.5em 0;
`;

const SkillsLine = styled.div`
    height: 8px;
    position: relative;
    border-radius: 50px;
    background: #B3D5F9;
`;

const SkillsSpan = styled.span`
    display: block;
    height: 100%;
    width: ${props => props.width}%;
    border-radius: 8px;
    background-color: #0473EE;
    overflow: hidden;
    position: relative;
    box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3), inset 0 -2px 6px rgba(0, 0, 0, 0.4);
`;

const Skills = props => (
    <div className="Skills">
        <H2Styled name="Skills"/>
        <SkillsContainer className="Skills-container">
            {props.data.map((skill, index) => (
                <div className="Skills-item" key={`Skill-${index}`}>
                    <SkillsH5>
                        {skill.name}
                    </SkillsH5>
                    <SkillsLine className="Skills-line">
                        <SkillsSpan width={skill.percentage}/>
                    </SkillsLine>
                </div>
            ))}
        </SkillsContainer>
    </div>
);

export default Skills;