import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaTiktok, FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.div`
  width: 100%;
  padding: 80px 0 40px 0;
  display: flex;
  justify-content: center;
  background: transparent;
  position: relative;
  z-index: 1;
`;

const FooterWrapper = styled.footer`
  width: 90%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  position: relative;
`;

const LogoSection = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const LogoImg = styled(motion.img)`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: 3px solid rgba(120, 160, 255, 0.45);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
`;

const LogoText = styled.h1`
  font-size: 26px;
  font-weight: 700;
  color: #E8ECFF;
  letter-spacing: -0.5px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 40px;
  @media (max-width: 768px) {
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const NavLink = styled(motion.a)`
  color: #A8B4D4;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 20px;
  transition: all 0.3s ease;
  
  &:hover {
    color: #7AB4FF;
    background: rgba(0, 106, 255, 0.15);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 24px;
`;

const SocialButton = styled(motion.a)`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #7AB4FF;
  background: rgba(22, 28, 58, 0.85);
  box-shadow:
    0 8px 24px rgba(0, 0, 0, 0.45),
    0 0 0 1px rgba(120, 160, 255, 0.2);
  border: 1px solid rgba(100, 140, 255, 0.25);
`;

const Divider = styled.div`
  width: 100%;
  max-width: 800px;
  height: 2px;
  background: linear-gradient(
    to right,
    transparent,
    rgba(120, 160, 255, 0.35),
    transparent
  );
  margin: 12px 0;
`;

const Copyright = styled.p`
  color: #9BA8D4;
  font-size: 14px;
  text-align: center;
  font-weight: 500;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <LogoSection>
          <LogoImg 
            src={require('../../images/logo.png')} 
            alt="Logo"
            whileHover={{ rotate: 10, scale: 1.1 }}
          />
          <LogoText>Kuzuroken</LogoText>
        </LogoSection>

        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#stack">Stack</NavLink>
          <NavLink href="#projects">Projects</NavLink>
        </Nav>

        <SocialIcons>
          <SocialButton 
            href="https://www.tiktok.com/@kuzuroken" 
            target="_blank"
            whileHover={{ y: -5, background: "#006AFF", color: "#FFFFFF" }}
            whileTap={{ scale: 0.9 }}
          >
            <FaTiktok />
          </SocialButton>
          <SocialButton 
            href="https://www.instagram.com/kuzuroken.20" 
            target="_blank"
            whileHover={{ y: -5, background: "#006AFF", color: "#FFFFFF" }}
            whileTap={{ scale: 0.9 }}
          >
            <FaInstagram />
          </SocialButton>
        </SocialIcons>

        <Divider />

        <Copyright>
          &copy; {new Date().getFullYear()} Kuzuroken. All rights reserved.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
