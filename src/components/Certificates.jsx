import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import H4Styled from '../styled/H4Styled';
import PStyled from '../styled/PStyled';

const Certificates = props => (
    <div className="Certificates">
        <H2Styled name="Certificados"/>
        <div className="Certificates-container">
            {props.data.map((certif, index) => (
                <div className="Certificates-item" key={`Certif-${index}`}>
                    <H3Styled>
                        {certif.name} @ {certif.institution}
                    </H3Styled>
                    <H4Styled>
                        {certif.date}
                    </H4Styled>
                    <PStyled name={certif.description}/>
                </div> 
            ))}
        </div>
    </div>
);

export default Certificates;