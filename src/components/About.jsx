import React from 'react';
import Social from './Social';
import styled from 'styled-components';

const AboutStyle = styled.div`
    text-align: center;
`;

const AboutAvatar = styled.div`
    padding: 2em 0 0 0;
`;

const AboutImg = styled.img`
    border-radius: 100%;
    width: 160px;
    height: 160px;
    border: 2px solid #3488E5;
    margin: 0 auto;
    display: block;
    box-shadow: 0 0 10px rgba(0,100,150,0.6);
`;

const AboutName = styled.div`
    text-align: center;
`;

const AboutH2 = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: 1.2px;
    margin: .5em 0 0 0;
    color: #0473EE;
`;

const AboutProfession = styled.p`
    font-weight: 300;
    margin: .2em 0 1em 0;
    letter-spacing: 1.6px;
    color: #0473EE;
`;

const AboutBio = styled.p`
    font-size: 1em;
    font-weight: 300;
    color: #757575;
`;

const AboutLocation = styled.p`
    font-size: 1em;
    font-weight: 400;
    color: #757575;
`;

const About = ({ address, avatar, bio, name, profession, social }) => (
    <AboutStyle>
        <div className="About-container">
            <AboutAvatar>
                <figure>
                    <AboutImg src={avatar} alt={name}>
                    </AboutImg>
                </figure>
            </AboutAvatar>
            <AboutName>
                <AboutH2>{name}</AboutH2>
            </AboutName>
            <div className="About-profession">
                <AboutProfession>{profession}</AboutProfession>
            </div>
            <div className="About-desc">
                <AboutBio>{bio}</AboutBio>
            </div>
            <div className="About-location">
                <AboutLocation>{address}</AboutLocation>
            </div>
            <div className="About-social">
                <Social social={social} />
            </div>
        </div>
    </AboutStyle>
);

export default About;