import React from 'react';
import styled from 'styled-components';

const StyledH4 = styled.h4`
    font-weight: 400;
    letter-spacing: 1.1px;
    margin: .5em 0 .5em 0;
    color: #212121;
`;

const H4Styled = ({ children }) => <StyledH4>{children}</StyledH4>;

export default H4Styled;