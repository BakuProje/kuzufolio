import styled from "styled-components";

export const HeroContainer = styled.div`
  background: transparent;
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  min-height: 90vh;
  margin-bottom: 50px;
  @media (max-width: 960px) {
    padding: 56px 20px 48px;
    min-height: auto;
  }
  @media (max-width: 640px) {
    padding: 40px 18px 32px;
    min-height: unset;
    margin-bottom: 36px;
  }
  z-index: 1;
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  gap: 32px;

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: stretch;
    gap: 28px;
  }
`;

export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 620px;

  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 0;
    max-width: 100%;
    align-items: center;
    text-align: center;
    padding: 0 4px;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: flex-end;
  align-items: center;
  position: relative;

  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    margin-bottom: 8px;
  }
`;

export const Badge = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  padding: 8px 16px;
  background: rgba(0, 106, 255, 0.1);
  border: 1px solid rgba(0, 106, 255, 0.2);
  border-radius: 50px;
  color: #006AFF;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 4px 15px rgba(0, 106, 255, 0.1);
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 64px;
  color: #E8ECFF;
  line-height: 1.12;
  margin: 0;
  letter-spacing: -0.02em;

  @media (max-width: 960px) {
    font-size: 46px;
  }
  @media (max-width: 768px) {
    font-size: clamp(18px, 5.4vw, 28px);
    line-height: 1.2;
    white-space: nowrap;
    letter-spacing: -0.03em;
  }
`;

/** Line break — hanya desktop */
export const TitleBreak = styled.br`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const RoleText = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #006AFF;
  display: flex;
  gap: 12px;
  min-height: 1.2em;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media (max-width: 960px) {
    justify-content: center;
    font-size: 26px;
  }
  @media (max-width: 640px) {
    font-size: clamp(17px, 4.8vw, 22px);
    line-height: 1.35;
    padding: 0 2px;
  }
`;

export const SubTitle = styled.div`
  font-size: 18px;
  line-height: 1.8;
  color: #A8B4D4;
  max-width: 550px;
  text-align: justify;

  @media (max-width: 960px) {
    max-width: 100%;
    text-align: justify;
    line-height: 1.75;
    hyphens: auto;
  }
  @media (max-width: 640px) {
    font-size: 15px;
    line-height: 1.72;
    text-align: justify;
    max-width: 36rem;
    margin-left: auto;
    margin-right: auto;
    padding: 0 2px;
    hyphens: auto;
  }
`;

export const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 10px;
`;

export const SkillTag = styled.div`
  padding: 6px 16px;
  background: rgba(22, 28, 58, 0.75);
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  color: #E8ECFF;
  box-shadow:
    0 4px 16px rgba(0, 0, 0, 0.35),
    0 0 0 1px rgba(120, 160, 255, 0.15);
  border: 1px solid rgba(100, 140, 255, 0.2);
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 640px) {
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    gap: 14px;
    margin-top: 16px;
  }
`;

export const PrimaryButton = styled.a`
  text-decoration: none;
  padding: 14px 32px;
  background: #006AFF;
  color: #FFFFFF;
  border-radius: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 10px 25px rgba(0, 106, 255, 0.25);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(0, 106, 255, 0.35);
  }
`;

export const SecondaryButton = styled.a`
  text-decoration: none;
  padding: 14px 32px;
  background: rgba(14, 18, 42, 0.85);
  color: #FFFFFF;
  border-radius: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 106, 255, 0.35);
    transform: translateY(-3px);
  }

  @media (max-width: 640px) {
    width: 100%;
    min-height: 52px;
    padding: 16px 24px;
    border-radius: 14px;
    font-size: 16px;

    &:hover {
      transform: none;
    }
    &:active {
      transform: scale(0.98);
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 20px;
`;

export const SocialIcon = styled.a`
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(22, 28, 58, 0.75);
  border-radius: 12px;
  color: #E8ECFF;
  box-shadow:
    0 4px 16px rgba(0, 0, 0, 0.35),
    0 0 0 1px rgba(120, 160, 255, 0.15);
  border: 1px solid rgba(100, 140, 255, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    color: #7AB4FF;
    transform: translateY(-5px);
  }
`;

export const IllustrationContainer = styled.div`
  width: 100%;
  max-width: 500px;
  position: relative;

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  @media (max-width: 960px) {
    max-width: min(420px, 88vw);
    margin: 0 auto;
  }

  @media (max-width: 480px) {
    max-width: min(340px, 92vw);
  }
`;
