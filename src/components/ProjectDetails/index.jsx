import { ArrowBackRounded, GitHub, Launch, CodeRounded, LayersRounded } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../../data/constants';

const Container = styled(motion.div)`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: linear-gradient(165deg, #0a0e22 0%, #141a3d 42%, #070a14 100%);
  z-index: 10000;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 60px 20px 100px 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: relative;
`;

const UpperSection = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const TopRowMobile = styled.div`
  display: none;

  @media (max-width: 960px) {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
    width: 100%;
  }
`;

const TopRowDesktop = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 5px;

  @media (max-width: 960px) {
    display: none;
  }
`;

const DetailColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  order: 1;

  @media (max-width: 960px) {
    order: 3;
  }
`;

const ImageColumn = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  gap: 24px;
  order: 2;

  @media (max-width: 960px) {
    order: 2;
  }
`;

const TopRowMobileWrap = styled.div`
  display: none;
  order: 0;
  width: 100%;

  @media (max-width: 960px) {
    display: block;
    order: 1;
  }
`;

const MainImage = styled.img`
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 24px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.55);
  border: 1px solid rgba(120, 160, 255, 0.2);
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.02);
  }
`;

const FullscreenOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  cursor: zoom-out;
`;

const FullscreenImage = styled(motion.img)`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
`;

const BackButton = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: #E8ECFF;
  font-weight: 700;
  font-size: 14px;
  padding: 8px 16px;
  border-radius: 50px;
  background: rgba(22, 28, 58, 0.85);
  box-shadow:
    0 6px 20px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(120, 160, 255, 0.18);
  border: 1px solid rgba(100, 140, 255, 0.22);
  transition: all 0.3s ease;
  
  &:hover {
    color: #7AB4FF;
    transform: translateX(-5px);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
  }
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  background: rgba(0, 180, 173, 0.18);
  color: #5EEAD4;
  border-radius: 50px;
  font-size: 12px;
  font-weight: 700;
  width: fit-content;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 1px solid rgba(94, 234, 212, 0.25);
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 800;
  color: #E8ECFF;
  margin: 0;
  line-height: 1.2;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #A8B4D4;
  margin: 0;
`;

const TechTag = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background: rgba(18, 24, 52, 0.95);
  border-radius: 14px;
  border: 1px solid rgba(100, 140, 255, 0.2);
  box-shadow:
    0 4px 16px rgba(0, 0, 0, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
  font-size: 13px;
  font-weight: 700;
  color: #E8ECFF;
  white-space: nowrap;
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 5px;
  width: 100%;

  ${({ $compact }) =>
    $compact &&
    `
    flex-wrap: nowrap;
    gap: 8px;

    ${TechTag} {
      flex: 1 1 0;
      min-width: 0;
      justify-content: center;
      padding: 10px 6px;
      gap: 5px;
      font-size: clamp(10px, 2.8vw, 12px);

      img {
        width: 17px;
        height: 17px;
      }
    }
  `}
`;

const TechIcon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
  flex-shrink: 0;
`;

const StatusCard = styled.div`
  padding: 26px 24px 24px;
  background: linear-gradient(
    155deg,
    rgba(28, 36, 72, 0.92) 0%,
    rgba(14, 18, 40, 0.98) 100%
  );
  backdrop-filter: blur(14px);
  border-radius: 28px;
  border: 1px solid rgba(120, 160, 255, 0.22);
  box-shadow:
    0 18px 48px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.06),
    0 0 48px rgba(80, 130, 255, 0.07);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
  width: 100%;
`;

const StatusEyebrow = styled.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #8B9BC8;
  line-height: 1.4;
`;

const StatusValue = styled.div`
  font-size: clamp(26px, 7.5vw, 32px);
  font-weight: 800;
  color: #5EC8FF;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin: 10px 0 8px;
  width: 100%;
`;

const StatusMeta = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: #9BA8D4;
  line-height: 1.45;
`;

const ActionButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin-top: 10px;
  
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const PrimaryButton = styled.a`
  flex: 1;
  padding: 16px;
  border-radius: 16px;
  background: #006AFF;
  color: #FFFFFF;
  text-decoration: none;
  font-weight: 700;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: 0 15px 30px rgba(0, 106, 255, 0.2);
  transition: all 0.3s ease;
  font-size: 14px;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 106, 255, 0.3);
    filter: brightness(1.1);
  }
`;

const SecondaryButton = styled.a`
  flex: 1;
  padding: 16px;
  border-radius: 16px;
  background: rgba(22, 28, 58, 0.85);
  color: #E8ECFF;
  text-decoration: none;
  font-weight: 700;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow:
    0 6px 20px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(120, 160, 255, 0.18);
  border: 1px solid rgba(100, 140, 255, 0.25);
  transition: all 0.3s ease;
  font-size: 14px;
  
  &:hover {
    background: rgba(32, 40, 78, 0.95);
    color: #FFFFFF;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
`;

const StatCard = styled.div`
  background: rgba(22, 28, 58, 0.75);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  border: 1px solid rgba(120, 160, 255, 0.18);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.4);

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 22px 16px;
    gap: 10px;
  }
`;

const StatIconCircle = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: rgba(0, 106, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7AB4FF;
  flex-shrink: 0;

  @media (max-width: 960px) {
    width: 52px;
    height: 52px;
    margin-bottom: 4px;
  }
`;

const StatValue = styled.div`
  font-size: 22px;
  font-weight: 800;
  color: #E8ECFF;
  line-height: 1;

  @media (max-width: 960px) {
    font-size: 28px;
    margin: 4px 0;
  }
`;

const StatLabel = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #9BA8D4;
  margin-top: 4px;

  @media (max-width: 960px) {
    margin-top: 0;
    font-size: 14px;
  }
`;

const ProjectDetails = ({ openModal, setOpenModal }) => {
    const project = openModal?.project;
    const [fullscreenImage, setFullscreenImage] = useState(null);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const getSkillImage = (name) => {
      for (const category of skills) {
        const skill = category.skills.find(s => s.name.toLowerCase() === name.toLowerCase());
        if (skill) return skill.image;
      }
      return null;
    };

    return (
        <Container
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Content>
                <UpperSection>
                    <TopRowMobileWrap>
                      <TopRowMobile>
                        <BackButton onClick={() => setOpenModal({ state: false, project: null })}>
                          <ArrowBackRounded fontSize="small" /> Kembali
                        </BackButton>
                        <Badge>Active</Badge>
                      </TopRowMobile>
                    </TopRowMobileWrap>

                    <DetailColumn>
                        <TopRowDesktop>
                            <BackButton onClick={() => setOpenModal({ state: false, project: null })}>
                                <ArrowBackRounded fontSize="small" /> Kembali
                            </BackButton>
                            <Badge>Active</Badge>
                        </TopRowDesktop>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <Title>{project?.title}</Title>
                            <Description>{project?.description}</Description>
                            
                            <TechTags $compact={(project?.tags?.length ?? 0) <= 3}>
                                {project?.tags?.map((tag, index) => (
                                  <TechTag key={index}>
                                    {getSkillImage(tag) && <TechIcon src={getSkillImage(tag)} alt={tag} />}
                                    {tag}
                                  </TechTag>
                                ))}
                            </TechTags>
                        </div>
                        
                        <StatusCard>
                            <StatusEyebrow>{project?.category === 'certificate' ? 'Status PKL' : 'Status'}</StatusEyebrow>
                            <StatusValue>Finished</StatusValue>
                            <StatusMeta>Terakhir diperbarui: {project?.date}</StatusMeta>
                        </StatusCard>
                        
                        {(project?.webapp || project?.github) && (
                            <ActionButtons>
                                {project?.webapp && (
                                    <PrimaryButton href={project?.webapp} target="_blank">
                                        <Launch /> Lihat Website
                                    </PrimaryButton>
                                )}
                                {project?.github && (
                                    <SecondaryButton href={project?.github} target="_blank">
                                        <GitHub /> Source Code
                                    </SecondaryButton>
                                )}
                            </ActionButtons>
                        )}
                    </DetailColumn>

                    <ImageColumn>
                        <MainImage 
                            src={project?.image} 
                            alt={project?.title} 
                            onClick={() => setFullscreenImage(project?.image)}
                        />
                        {project?.image2 && (
                            <MainImage 
                                src={project?.image2} 
                                alt={`${project?.title} Back`} 
                                onClick={() => setFullscreenImage(project?.image2)}
                            />
                        )}
                    </ImageColumn>
                </UpperSection>
            </Content>
            <AnimatePresence>
                {fullscreenImage && (
                    <FullscreenOverlay
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setFullscreenImage(null)}
                    >
                        <FullscreenImage
                            src={fullscreenImage}
                            alt="Fullscreen"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                        />
                    </FullscreenOverlay>
                )}
            </AnimatePresence>
        </Container>
    );
}

export default ProjectDetails;