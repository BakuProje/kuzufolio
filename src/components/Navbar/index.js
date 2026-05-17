import React, { useState, useEffect } from 'react';
import {
  Nav,
  NavLink,
  NavbarContainer,
  NavLogo,
  LogoImg,
  NavItems,
  MobileIcon,
  MobileMenuBackdrop,
  MobileMenu,
  MobileMenuContent,
  MobileMenuHeader,
  MobileMenuBrand,
  MobileMenuLogoBox,
  MobileMenuBrandText,
  MobileCloseBtn,
  MobileNavList,
  MobileMenuItem,
  MobileMenuIconBox,
  MobileMenuTextWrap,
  MobileMenuLabel,
  MobileMenuSubtext,
} from './NavbarStyledComponent';
import MobileMenuBackground from './MobileMenuBackground';
import { FaBars } from 'react-icons/fa';
import {
  Close,
  HomeRounded,
  PersonRounded,
  LayersRounded,
  FolderRounded,
  MailRounded,
} from '@mui/icons-material';
import Typewriter from 'typewriter-effect';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { id: 'home', label: 'Home', Icon: HomeRounded },
  { id: 'about', label: 'About', Icon: PersonRounded },
  { id: 'stack', label: 'Stack', Icon: LayersRounded },
  { id: 'projects', label: 'Projects', Icon: FolderRounded },
  { id: 'contact', label: 'Contact', Icon: MailRounded },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'stack', 'projects', 'contact'];
      let currentSection = activeSection;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
          }
        }
      }

      const isAtBottom =
        window.innerHeight + window.pageYOffset >=
        document.documentElement.scrollHeight - 50;
      if (isAtBottom) {
        currentSection = 'contact';
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);
  const logoSrc = require('../../images/logo.png');

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/" onClick={closeMenu}>
          <LogoImg src={logoSrc} alt="Logo" />
          <div style={{ fontWeight: '800', fontSize: '18px', color: '#006AFF' }}>
            <Typewriter
              options={{
                strings: ['Kuzuroken', 'Cyber Security', 'Atlet'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </NavLogo>

        <MobileIcon>
          <FaBars onClick={() => setIsOpen(true)} aria-label="Buka menu" />
        </MobileIcon>

        <NavItems>
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              href={`#${link.id}`}
              className={activeSection === link.id ? 'active' : ''}
            >
              {link.label}
            </NavLink>
          ))}
        </NavItems>
      </NavbarContainer>

      <MobileMenuBackdrop $isOpen={isOpen} onClick={closeMenu} aria-hidden={!isOpen} />
      <MobileMenu $isOpen={isOpen} role="dialog" aria-modal="true" aria-label="Menu navigasi">
        <MobileMenuBackground isActive={isOpen} />
        <MobileMenuContent>
          <MobileMenuHeader>
            <MobileMenuBrand>
              <MobileMenuLogoBox>
                <img src={logoSrc} alt="Kuzuroken" />
              </MobileMenuLogoBox>
              <MobileMenuBrandText>
                {isOpen && (
                  <Typewriter
                    key="mobile-menu-brand"
                    options={{
                      strings: ['Kuzuroken', 'Cyber Security', 'Atlet'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                )}
              </MobileMenuBrandText>
            </MobileMenuBrand>
            <MobileCloseBtn type="button" onClick={closeMenu} aria-label="Tutup menu">
              <Close />
            </MobileCloseBtn>
          </MobileMenuHeader>

          <MobileNavList>
            <AnimatePresence>
              {isOpen &&
                navLinks.map((link, index) => {
                  const isActive = activeSection === link.id;
                  const { Icon } = link;
                  return (
                    <motion.div
                      key={link.id}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 12 }}
                      transition={{
                        duration: 0.35,
                        delay: 0.06 + index * 0.06,
                        ease: [0.23, 1, 0.32, 1],
                      }}
                    >
                      <MobileMenuItem
                        href={`#${link.id}`}
                        onClick={closeMenu}
                        $active={isActive}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <MobileMenuIconBox $active={isActive}>
                          <Icon />
                        </MobileMenuIconBox>
                        <MobileMenuTextWrap>
                          <MobileMenuLabel>{link.label}</MobileMenuLabel>
                          {isActive && <MobileMenuSubtext>Kamu di sini</MobileMenuSubtext>}
                        </MobileMenuTextWrap>
                      </MobileMenuItem>
                    </motion.div>
                  );
                })}
            </AnimatePresence>
          </MobileNavList>
        </MobileMenuContent>
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;
