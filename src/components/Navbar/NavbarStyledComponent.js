import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.div`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 1000;
    background: transparent;
    transition: all 0.3s ease;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 90%;
  padding: 0 24px;
  max-width: 1200px;
  background: rgba(14, 18, 42, 0.72);
  backdrop-filter: blur(16px);
  border-radius: 50px;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.45),
    0 0 0 1px rgba(120, 160, 255, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(100, 140, 255, 0.2);
  margin-top: 10px;
  position: relative;

  @media (max-width: 640px) {
    padding: 0 16px;
    width: 95%;
  }
`;

export const NavLogo = styled(LinkR)`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: #E8ECFF;
`;

export const LogoImg = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 2px solid #006AFF;
`;

export const NavItems = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 0;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;

export const NavLink = styled.a`
    color: #A8B4D4;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    padding: 8px 20px;
    border-radius: 50px;
    transition: all 0.3s ease;
    position: relative;
    font-size: 14px;
    
    &:hover {
      color: #006AFF;
      background: rgba(0, 106, 255, 0.18);
    }

    &.active {
      color: #006AFF;
      background: rgba(0, 106, 255, 0.28);
    }
`;

export const MobileIcon = styled.div`
  display: none;
  z-index: 10002;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    cursor: pointer;
    color: #E8ECFF;
    padding: 8px;
  }
`;

export const MobileMenuBackdrop = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(5, 8, 20, 0.75);
    backdrop-filter: blur(6px);
    z-index: 10000;
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
    transition: opacity 0.35s ease, visibility 0.35s ease;
  }
`;

export const MobileMenu = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    max-width: 100%;
    z-index: 10001;
    overflow: hidden;
    visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
    transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.42s cubic-bezier(0.23, 1, 0.32, 1), visibility 0.42s ease;
    box-shadow: -12px 0 48px rgba(0, 0, 0, 0.5);
  }
`;

export const MobileMenuContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 100%;
  padding: max(16px, env(safe-area-inset-top)) 22px max(24px, env(safe-area-inset-bottom));
  overflow-y: auto;
  gap: 8px;
`;

export const MobileMenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0;
  flex-shrink: 0;
  gap: 12px;
`;

export const MobileMenuBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
`;

export const MobileMenuLogoBox = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background: rgba(12, 16, 36, 0.9);
  border: 1px solid rgba(120, 160, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const MobileMenuBrandText = styled.div`
  font-size: 17px;
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.3;
  color: #3dd6ff;
  min-width: 0;
  flex: 1;

  .Typewriter__wrapper,
  .Typewriter__cursor {
    color: #3dd6ff;
  }
`;

export const MobileCloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: 1px solid rgba(120, 160, 255, 0.22);
  border-radius: 14px;
  background: rgba(12, 16, 36, 0.92);
  color: #b8c4e8;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.2s ease, border-color 0.2s ease;

  svg {
    font-size: 22px;
  }

  &:hover {
    background: rgba(0, 106, 255, 0.15);
    border-color: rgba(61, 214, 255, 0.35);
    color: #e8ecff;
  }
`;

export const MobileNavList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
  flex: 1;
  justify-content: flex-start;
  padding-top: clamp(40px, 11vh, 72px);
  padding-left: 2px;
  padding-right: 2px;
`;

export const MobileMenuItem = styled.a`
  display: flex;
  align-items: center;
  gap: 18px;
  text-decoration: none;
  cursor: pointer;
  min-height: ${({ $active }) => ($active ? 'auto' : '56px')};
  padding: ${({ $active }) => ($active ? '18px 20px' : '10px 6px')};
  border-radius: ${({ $active }) => ($active ? '20px' : '0')};
  background: ${({ $active }) =>
    $active
      ? 'linear-gradient(145deg, rgba(18, 28, 58, 0.95) 0%, rgba(10, 14, 32, 0.98) 100%)'
      : 'transparent'};
  border: ${({ $active }) =>
    $active ? '1px solid rgba(61, 214, 255, 0.35)' : '1px solid transparent'};
  box-shadow: ${({ $active }) =>
    $active
      ? '0 0 28px rgba(61, 214, 255, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
      : 'none'};
  transition: all 0.28s ease;

  &:active {
    transform: scale(0.98);
  }
`;

export const MobileMenuIconBox = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: ${({ $active }) =>
    $active
      ? 'linear-gradient(145deg, #00c8f0 0%, #0088ff 100%)'
      : 'rgba(18, 22, 44, 0.95)'};
  border: 1px solid
    ${({ $active }) =>
      $active ? 'rgba(61, 214, 255, 0.5)' : 'rgba(80, 100, 160, 0.25)'};
  box-shadow: ${({ $active }) =>
    $active
      ? '0 0 22px rgba(61, 214, 255, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.25)'
      : 'inset 0 1px 0 rgba(255, 255, 255, 0.04)'};
  color: ${({ $active }) => ($active ? '#ffffff' : '#7a88b8')};

  svg {
    font-size: 24px;
  }
`;

export const MobileMenuTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 0;
  padding-top: 1px;
`;

export const MobileMenuLabel = styled.span`
  font-size: 16px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #f0f4ff;
  line-height: 1.15;
`;

export const MobileMenuSubtext = styled.span`
  font-size: 11px;
  font-weight: 600;
  color: #3dd6ff;
  letter-spacing: 0.03em;
`;

