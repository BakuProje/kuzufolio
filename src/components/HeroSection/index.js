import React from 'react';
import {
    HeroContainer,
    HeroLeftContainer,
    HeroRightContainer,
    HeroInnerContainer,
    Title,
    TitleBreak,
    SubTitle,
    RoleText,
    ActionButtons,
    SecondaryButton,
    IllustrationContainer
} from './HeroStyle';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import { motion } from 'framer-motion';
import { MailRounded } from '@mui/icons-material';

const HeroSection = () => {
    return (
        <div id="home">
            <HeroContainer>
                <HeroInnerContainer>
                    <HeroLeftContainer>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Title style={{ marginTop: '12px' }}>
                                Kuzuroken<TitleBreak />
                            </Title>
                            
                            <RoleText style={{ color: '#006AFF' }}>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </RoleText>
                            
                            <SubTitle>
                                {Bio.description || `Menciptakan Website Inovatif, Fungsional, dan User-Friendly untuk Solusi Digital Masa Kini.
Kami menghadirkan pengalaman digital yang tidak hanya menarik secara visual, tetapi juga dirancang untuk performa optimal dan kemudahan penggunaan. Setiap detail dibuat untuk membantu bisnis Anda berkembang di era digital.`}
                            </SubTitle>
                            
                            <ActionButtons>
                                <SecondaryButton href="#contact" style={{ background: '#006AFF' }}>
                                    Contact <MailRounded fontSize="small" />
                                </SecondaryButton>
                            </ActionButtons>
                        </motion.div>
                    </HeroLeftContainer>

                    <HeroRightContainer>
                        <IllustrationContainer>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            >
                                <img src="/Animation1.gif" alt="Kuzuroken Illustration" />
                            </motion.div>
                        </IllustrationContainer>
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    );
}

export default HeroSection;
