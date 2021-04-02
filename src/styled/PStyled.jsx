import React from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
    font-weight: 300;
    margin: .2em 0 1em 0;
    letter-spacing: 1.6px;
    color: #0473EE;
`;

const PStyled = ({ name }) => <StyledP>{name}</StyledP>;

export default PStyled;