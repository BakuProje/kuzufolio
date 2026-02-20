import React from 'react';
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  LogoImg,
  NavItems,
  MobileIcon,
  MobileMenu,
  MobileLink,
} from './NavbarStyledComponent';
import { FaBars } from 'react-icons/fa';
import { Close } from '@mui/icons-material';
import { useTheme } from 'styled-components'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <LogoImg src={require('../../images/logo.png')} alt="Kuzuroken Logo" />
          <Span>Kuzuroken</Span>
        </NavLogo>

        <MobileIcon>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Info</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
        </NavItems>
        {
          isOpen && (
            <MobileMenu isOpen={isOpen}>
              <Close style={{ alignSelf: 'flex-end', cursor: 'pointer' }} onClick={() => setIsOpen(!isOpen)} />
              <MobileLink href="#about" onClick={() => setIsOpen(!isOpen)}>About</MobileLink>
              <MobileLink href='#skills' onClick={() => setIsOpen(!isOpen)}>Skills</MobileLink>
              <MobileLink href='#experience' onClick={() => setIsOpen(!isOpen)}>Info</MobileLink>
              <MobileLink href='#projects' onClick={() => setIsOpen(!isOpen)}>Projects</MobileLink>
            </MobileMenu>
          )
        }
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
