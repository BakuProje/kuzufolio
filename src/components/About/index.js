import React from 'react';
import {
  Container,
  Wrapper,
  Left,
  Right,
  Desc,
  SocialMediaIcons,
  SocialMediaIcon,
  HiText,
  Name,
  QuoteBox,
  ButtonContainer,
  PrimaryButton,
  SecondaryButton,
  ProfileImg,
  ProfileFrame,
  MoonGlow,
  OrbitRing,
  OrbitTrack,
  OrbitStar,
  AboutMeLabel
} from './AboutStyle';
import { Bio } from '../../data/constants';
import { Instagram, FileDownloadOutlined, CodeRounded, FormatQuoteRounded } from '@mui/icons-material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Container id="about">
      <Wrapper
        as={motion.div}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <Left>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AboutMeLabel>About Me</AboutMeLabel>
            <HiText>Hello, I'm</HiText>
            <Name>{Bio.name}</Name>
            
       
            <Desc>
              {Bio.description}
            </Desc>

            <QuoteBox>
              <FormatQuoteRounded style={{ color: '#006AFF', fontSize: '32px' }} />
              <div>{Bio.quote}</div>
            </QuoteBox>
            
            <ButtonContainer>
              <PrimaryButton href="/CV Kuzuroken.pdf" download="CV_Kuzuroken.pdf">
                <FileDownloadOutlined /> Download CV
              </PrimaryButton>
              <SecondaryButton href="#projects">
                <CodeRounded /> View Projects
              </SecondaryButton>
            </ButtonContainer>

            <SocialMediaIcons>
              <SocialMediaIcon href={Bio.insta} target="_blank"><Instagram fontSize="small" /></SocialMediaIcon>
              <SocialMediaIcon href={Bio.tiktok} target="_blank">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.14-1.32-.09 2.05-.05 4.11-.07 6.16-.01 1.08-.2 2.23-.74 3.19-.53.99-1.38 1.79-2.39 2.29-1.04.54-2.24.74-3.41.67-1.18-.04-2.36-.37-3.37-1.01-1.06-.66-1.9-1.68-2.34-2.84-.46-1.19-.52-2.52-.16-3.74.34-1.21 1.09-2.3 2.1-3.04.99-.74 2.21-1.15 3.44-1.19 0 1.34-.01 2.68-.01 4.02-1.07.03-2.18.51-2.73 1.45-.48.79-.47 1.83-.06 2.64.4.82 1.25 1.41 2.15 1.47 1.1.09 2.22-.43 2.72-1.41.34-.63.36-1.39.36-2.1-.01-3.64-.01-7.29-.01-10.93z"/>
                </svg>
              </SocialMediaIcon>
            </SocialMediaIcons>
          </motion.div>
        </Left>
        
        <Right>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
          >
            <ProfileFrame>
              <MoonGlow />
              <OrbitRing />
              <OrbitTrack>
                <OrbitStar $top="18%" $left="8%" $size={3} $duration={2.2} $delay={0.3} />
                <OrbitStar $top="72%" $left="6%" $size={4} $duration={3} $delay={0.8} />
                <OrbitStar $top="85%" $left="78%" $size={3} $duration={2.8} $delay={1.2} />
                <OrbitStar $top="12%" $left="82%" $size={5} $duration={2.4} $delay={0.5} />
              </OrbitTrack>
              <ProfileImg src="/aku kuzuroken.png" alt="Kuzuroken Profile" />
            </ProfileFrame>
          </motion.div>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default About;