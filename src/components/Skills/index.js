import React, { useState } from 'react';
import styled from 'styled-components';
import { skills } from '../../data/constants';
import { motion, AnimatePresence } from 'framer-motion';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 100px 0;
  background: transparent;
  min-height: 100vh;
  scroll-margin-top: 100px;
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
`

export const Title = styled.div`
  font-size: 48px;
  text-align: center;
  font-weight: 800;
  color: #006AFF;
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: #A8B4D4;
  margin-bottom: 20px;
`;

const ToggleContainer = styled.div`
  display: flex;
  background: rgba(22, 28, 58, 0.85);
  border-radius: 50px;
  padding: 6px;
  margin-bottom: 25px;
  box-shadow:
    0 8px 28px rgba(0, 0, 0, 0.45),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(120, 160, 255, 0.22);
  position: relative;
  z-index: 1;
`;

const ToggleButton = styled.div`
  padding: 12px 30px;
  border-radius: 40px;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  color: ${props => props.active ? '#FFFFFF' : '#9BA8D4'};
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
  
  &:hover {
    color: ${props => props.active ? '#FFFFFF' : '#006AFF'};
  }

  @media (max-width: 600px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;

const StackGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
  width: 100%;
  padding: 20px;
  
  @media (max-width: 960px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
`;

const StackCard = styled(motion.div)`
  background: rgba(22, 28, 58, 0.82);
  border: 1px solid rgba(120, 160, 255, 0.18);
  border-radius: 24px;
  padding: 25px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  box-shadow:
    0 8px 28px rgba(0, 0, 0, 0.45),
    0 0 40px rgba(80, 120, 255, 0.06);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    border-color: rgba(90, 159, 255, 0.55);
    transform: translateY(-5px);
    box-shadow:
      0 14px 36px rgba(0, 0, 0, 0.55),
      0 0 48px rgba(90, 159, 255, 0.12);
  }
`;

const StackIcon = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
`;

const StackName = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #E8ECFF;
  text-align: center;
`;

const Stack = () => {
  const [activeTab, setActiveTab] = useState('Frontend');

  return (
    <Container id="stack">
      <Wrapper
        as={motion.div}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <Title>Tech Stack</Title>
        <Desc>The tools and technologies I use to build robust applications.</Desc>
        
        <ToggleContainer>
          {skills.map((category) => (
            <ToggleButton 
              key={category.title}
              active={activeTab === category.title}
              onClick={() => setActiveTab(category.title)}
            >
              {category.title}
              {activeTab === category.title && (
                <motion.div 
                  layoutId="activeTabSkills"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '100%',
                    background: '#006AFF',
                    borderRadius: '40px',
                    zIndex: -1,
                    boxShadow: '0 4px 15px rgba(0, 106, 255, 0.4)'
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </ToggleButton>
          ))}
        </ToggleContainer>

        <AnimatePresence mode="wait">
          <StackGrid
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {skills.find(c => c.title === activeTab)?.skills.map((item, index) => (
              <StackCard
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <StackIcon src={item.image} alt={item.name} />
                <StackName>{item.name}</StackName>
              </StackCard>
            ))}
          </StackGrid>
        </AnimatePresence>
      </Wrapper>
    </Container>
  );
}

export default Stack;
