import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import H4Styled from '../styled/H4Styled';
import PStyled from '../styled/PStyled';

const Experience = props => (
    <div className="Experience">
        <H2Styled name="Experiencia"/>
        <div className="Experience-container">
            {props.data.map((exp, index) => (
                <div className="Experience-item" key={`Exp-${index}`}>
                    <H3Styled>
                        {exp.jobTitle} @ {exp.company}
                    </H3Styled>
                    <H4Styled>
                        {exp.startDate} - {exp.endDate} 
                    </H4Styled>
                    <PStyled name={exp.jobDescription}/>
                </div>
            ))}
        </div>
    </div>
);

export default Experience;