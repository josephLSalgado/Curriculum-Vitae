import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const SocialStyle = styled.div`
    margin: 0 auto;
    display: block;
`;

const SocialUl = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

const SocialLi = styled.li`
    display: inline;
    margin: 0 1em 0 0;
`;

const SocialAnchor = styled.a`
    color: #0473EE;
    text-decoration: none;
    font-size: 1em;
`;

const SocialIcon = styled.i`
    color: ${props => props.theme.color}
`;

const facebook = {
    color: '#3B5998'
}

const twitter = {
    color: '#38A1F3'
}

const linkedin = {
    color: '#0E76A8'
}

const github = {
    color: '#333333'
}

const getColor = (name) => {
    if (name == 'facebook') return facebook;
    if (name == 'twitter') return twitter;
    if (name == 'linkedin') return linkedin;
    if (name == 'github') return github;
}

const Social = props => (
    <SocialStyle className="Social">
        {props.social &&
            <SocialUl>
                {props.social.map((item, index) => (
                    <SocialLi key={`social-${index}`}>
                        <SocialAnchor href={item.url} target='_black'>
                            <ThemeProvider theme={getColor(item.name)}>
                                <SocialIcon className={`fab fa-${item.name}`}/>
                            </ThemeProvider>
                        </SocialAnchor>
                    </SocialLi>
                ))}
            </SocialUl>
        }
    </SocialStyle>
)

export default Social;