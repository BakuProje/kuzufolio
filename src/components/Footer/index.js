import React from 'react';
import styled from 'styled-components';
import { FaTiktok, FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.div`
  width: 100%;
  padding: 3rem 0 1rem 0;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
  background: linear-gradient(180deg, transparent 0%, rgba(10, 14, 26, 0.8) 50%, rgba(10, 14, 26, 0.95) 100%);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(0, 212, 255, 0.1);
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
`;

const LogoImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 
    0 0 20px rgba(0, 212, 255, 0.6),
    0 0 40px rgba(0, 212, 255, 0.3);
  transition: all 0.3s ease;
  border: 2px solid ${({ theme }) => theme.primary};
  
  &:hover {
    transform: scale(1.15) rotate(10deg);
    box-shadow: 
      0 0 30px rgba(0, 212, 255, 0.8),
      0 0 60px rgba(0, 212, 255, 0.4);
  }
`;

const Logo = styled.h1`
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.primary};
  text-shadow: 0 0 15px ${({ theme }) => theme.primary}50;
  letter-spacing: 1px;
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2.5rem;
  justify-content: center;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center;
    text-align: center;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_secondary};
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  position: relative;
  padding: 5px 0;
  
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    background: ${({ theme }) => theme.primary};
    transition: all 0.3s ease;
    transform: translateX(-50%);
    box-shadow: 0 0 10px ${({ theme }) => theme.primary}80;
  }
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-2px);
    
    &::after {
      width: 100%;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1.5rem;
  gap: 2rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  width: 55px;
  height: 55px;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(0, 212, 255, 0.05));
  border: 2px solid rgba(0, 212, 255, 0.3);
  border-radius: 50%;
  color: ${({ theme }) => theme.primary};
  font-size: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 
    0 0 15px rgba(0, 212, 255, 0.2),
    inset 0 0 10px rgba(0, 212, 255, 0.05);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(0, 212, 255, 0.2);
    transition: all 0.5s ease;
    transform: translate(-50%, -50%);
  }
  
  &:hover {
    background: linear-gradient(135deg, rgba(0, 212, 255, 0.3), rgba(0, 255, 136, 0.2));
    border-color: ${({ theme }) => theme.primary};
    transform: translateY(-8px) scale(1.15);
    box-shadow: 
      0 8px 25px rgba(0, 212, 255, 0.5),
      0 0 40px rgba(0, 212, 255, 0.3),
      inset 0 0 20px rgba(0, 212, 255, 0.1);
    color: ${({ theme }) => theme.white};
    
    &::before {
      width: 100%;
      height: 100%;
    }
  }
  
  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
    font-size: 22px;
  }
`;

const Copyright = styled.p`
  margin-top: 2rem;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  opacity: 0.8;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
    margin-top: 1.5rem;
  }
`;

const Divider = styled.div`
  width: 100%;
  max-width: 800px;
  height: 1px;
  background: linear-gradient(
    90deg, 
    transparent, 
    rgba(0, 212, 255, 0.5) 20%,
    rgba(0, 212, 255, 0.8) 50%,
    rgba(0, 212, 255, 0.5) 80%,
    transparent
  );
  margin: 1.5rem 0;
  box-shadow: 0 0 10px rgba(0, 212, 255, 0.3);
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <LogoContainer>
          <LogoImg src={require('../../images/logo.png')} alt="Kuzuroken Logo" />
          <Logo>Kuzuroken</Logo>
        </LogoContainer>
        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Info</NavLink>
          <NavLink href="#projects">Projects</NavLink>
        </Nav>
        <Divider />
        <SocialMediaIcons>
          <SocialMediaIcon href="https://www.tiktok.com/@kuzuroken" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <FaTiktok />
          </SocialMediaIcon>
          <SocialMediaIcon href="https://www.instagram.com/kuzuroken.20" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>
          &copy; 2026 Kuzuroken. All rights reserved.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
