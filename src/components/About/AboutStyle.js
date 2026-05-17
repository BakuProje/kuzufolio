import styled, { keyframes } from 'styled-components';

const orbitSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const moonGlowPulse = keyframes`
  0%, 100% {
    opacity: 0.45;
    transform: scale(1);
  }
  50% {
    opacity: 0.75;
    transform: scale(1.08);
  }
`;

const ringPulse = keyframes`
  0%, 100% {
    opacity: 0.35;
    box-shadow: 0 0 0 1px rgba(120, 160, 255, 0.2);
  }
  50% {
    opacity: 0.65;
    box-shadow:
      0 0 0 1px rgba(150, 180, 255, 0.45),
      0 0 40px rgba(90, 159, 255, 0.2);
  }
`;

const starTwinkle = keyframes`
  0%, 100% { opacity: 0.25; transform: scale(0.7); }
  50% { opacity: 1; transform: scale(1.15); }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 120px 0;
  background: transparent;
  min-height: 80vh;
  scroll-margin-top: 100px;

  @media (max-width: 960px) {
    padding: 72px 0 80px;
    min-height: unset;
  }
  @media (max-width: 640px) {
    padding: 48px 0 56px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  gap: 80px;
  padding: 0 40px;

  @media (max-width: 960px) {
    flex-direction: column;
    text-align: center;
    gap: 32px;
    padding: 0 22px;
  }
  @media (max-width: 480px) {
    padding: 0 16px;
    gap: 26px;
  }
`;

export const Left = styled.div`
  flex: 1.5;

  @media (max-width: 960px) {
    order: 1;
    width: 100%;
    max-width: 32rem;
    margin: 0 auto;
  }
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 960px) {
    order: -1;
    width: 100%;
    margin-bottom: 4px;
  }
`;

export const AboutMeLabel = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #006AFF;
  background: rgba(0, 106, 255, 0.1);
  padding: 6px 16px;
  border-radius: 50px;
  width: fit-content;
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  display: flex;
  align-items: center;
  gap: 8px;
  
  @media (max-width: 960px) {
    margin: 0 auto 16px auto;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const HiText = styled.div`
  font-size: 42px;
  font-weight: 800;
  color: #E8ECFF;
  margin-bottom: 8px;
  @media (max-width: 768px) {
    font-size: 28px;
  }
  @media (max-width: 400px) {
    font-size: 24px;
  }
`;

export const Name = styled.div`
  font-size: 64px;
  font-weight: 900;
  color: #E8ECFF;
  margin-bottom: 24px;
  line-height: 1.1;
  word-break: break-word;
  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 18px;
  }
  @media (max-width: 400px) {
    font-size: 30px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  line-height: 1.65;
  color: #A8B4D4;
  margin-bottom: 30px;
  max-width: 550px;
  text-align: justify;
  @media (max-width: 960px) {
    margin: 0 auto 24px auto;
    text-align: justify;
    max-width: 100%;
  }
  @media (max-width: 640px) {
    font-size: 15px;
    line-height: 1.7;
  }
`;

export const QuoteBox = styled.div`
  background: rgba(0, 106, 255, 0.05);
  border: 1px solid rgba(0, 106, 255, 0.1);
  border-radius: 16px;
  padding: 16px 20px;
  margin-bottom: 28px;
  max-width: 700px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-style: italic;
  color: #C5CDE8;
  font-size: 15px;
  text-align: left;

  @media (max-width: 960px) {
    margin: 0 auto 24px auto;
    max-width: 100%;
  }
  @media (max-width: 768px) {
    text-align: justify;
  }
  @media (max-width: 640px) {
    font-size: 14px;
    padding: 14px 16px;
    border-radius: 14px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  @media (max-width: 960px) {
    justify-content: center;
    width: 100%;
  }
  @media (max-width: 640px) {
    flex-direction: column;
    max-width: 100%;
    gap: 12px;
  }
`;

export const ProfileFrame = styled.div`
  position: relative;
  width: 440px;
  height: 440px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  @media (max-width: 960px) {
    width: min(320px, 78vw);
    height: min(320px, 78vw);
  }
  @media (max-width: 480px) {
    width: min(260px, 76vw);
    height: min(260px, 76vw);
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation: none !important;
    }
  }
`;

export const MoonGlow = styled.div`
  position: absolute;
  width: 92%;
  height: 92%;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 248, 230, 0.22) 0%,
    rgba(90, 159, 255, 0.12) 45%,
    transparent 70%
  );
  animation: ${moonGlowPulse} 5s ease-in-out infinite;
  pointer-events: none;
  z-index: 0;
`;

export const OrbitRing = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px dashed rgba(120, 160, 255, 0.28);
  animation: ${ringPulse} 4s ease-in-out infinite;
  pointer-events: none;
  z-index: 1;
`;

export const OrbitTrack = styled.div`
  position: absolute;
  inset: 0;
  animation: ${orbitSpin} 22s linear infinite;
  pointer-events: none;
  z-index: 2;
`;

export const OrbitStar = styled.span`
  position: absolute;
  width: ${({ $size }) => $size || 4}px;
  height: ${({ $size }) => $size || 4}px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 0 6px rgba(255, 255, 255, 0.8);
  animation: ${starTwinkle} ${({ $duration }) => $duration || 2.5}s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay || 0}s;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  pointer-events: none;
`;

export const ProfileImg = styled.img`
  position: relative;
  z-index: 3;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(120, 160, 255, 0.45);
  box-shadow:
    0 0 60px rgba(255, 248, 230, 0.12),
    0 0 50px rgba(0, 106, 255, 0.35),
    0 8px 32px rgba(0, 0, 0, 0.45);
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow:
      0 0 80px rgba(255, 248, 230, 0.2),
      0 0 70px rgba(0, 106, 255, 0.5);
    border-color: rgba(180, 200, 255, 0.7);
  }

  @media (max-width: 960px) {
    width: min(280px, 72vw);
    height: min(280px, 72vw);
  }
  @media (max-width: 480px) {
    width: min(220px, 70vw);
    height: min(220px, 70vw);
  }
`;

export const SocialMediaIcons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
  justify-content: flex-start;
  @media (max-width: 960px) {
    justify-content: center;
  }
  @media (max-width: 640px) {
    gap: 14px;
    margin-top: 20px;
  }
`;

export const SocialMediaIcon = styled.a`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(22, 28, 58, 0.75);
  border-radius: 12px;
  color: #A8B4D4;
  transition: all 0.3s ease;
  border: 1px solid rgba(120, 160, 255, 0.2);

  @media (max-width: 640px) {
    width: 50px;
    height: 50px;
    border-radius: 14px;
  }

  &:hover {
    color: #006AFF;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 106, 255, 0.15);
  }
`;

export const PrimaryButton = styled.a`
  text-decoration: none;
  padding: 14px 28px;
  background: #006AFF;
  color: #FFFFFF;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px rgba(0, 106, 255, 0.2);

  @media (max-width: 640px) {
    width: 100%;
    min-height: 50px;
    border-radius: 14px;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(0, 106, 255, 0.3);
    filter: brightness(1.1);
  }
`;

export const SecondaryButton = styled.a`
  text-decoration: none;
  padding: 14px 28px;
  background: transparent;
  color: #006AFF;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease;
  border: 2px solid #006AFF;

  @media (max-width: 640px) {
    width: 100%;
    min-height: 50px;
    border-radius: 14px;
  }

  &:hover {
    background: rgba(0, 106, 255, 0.05);
    transform: translateY(-3px);
  }
`;

// Add Title export for backwards compatibility if needed, but we'll use Name for main heading
export const Title = styled.div`
    font-size: 48px;
    text-align: center;
    font-weight: 800;
    margin-bottom: 40px;
    color: #006AFF;
    width: 100%;
`;

export const RoleContainer = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #006AFF;
  margin-bottom: 24px;
  display: flex;
  gap: 8px;
  
  @media (max-width: 960px) {
    justify-content: center;
  }
`;