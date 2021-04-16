import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import H4Styled from '../styled/H4Styled';
import PStyled from '../styled/PStyled';

const Skills = props => (
    <div className="Skills">
        <H2Styled name="Skills"/>
        <div className="Skills-container">
            {props.data.map((skill, index) => (
                <div className="Skills-item" key={`Skill-${index}`}>
                    <H3Styled>
                        {skill.name}
                    </H3Styled>
                    <div className="Skills-line">
                        <span>
                            {skill.percentage}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default Skills;