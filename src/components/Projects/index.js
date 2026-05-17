import React, { useMemo, useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, ShowMoreButton } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects, certificates } from '../../data/constants'
import { KeyboardArrowDownRounded, KeyboardArrowUpRounded } from '@mui/icons-material'
import { motion, AnimatePresence } from 'framer-motion'

const BOTTOM_PROJECT_IDS = [17, 18, 19];

/** Urutan tampilan: project lama dulu, 3 terbaru selalu di bawah; hilangkan duplikat id */
const getOrderedProjects = (list) => {
  const seenIds = new Set();
  const deduped = [];

  for (let i = list.length - 1; i >= 0; i -= 1) {
    const item = list[i];
    if (seenIds.has(item.id)) continue;
    seenIds.add(item.id);
    deduped.unshift(item);
  }

  const bottom = BOTTOM_PROJECT_IDS.map((id) =>
    deduped.find((p) => p.id === id)
  ).filter(Boolean);
  const rest = deduped.filter((p) => !BOTTOM_PROJECT_IDS.includes(p.id));

  return [...rest, ...bottom];
};

const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const orderedProjects = useMemo(() => getOrderedProjects(projects), []);

  const currentItems = toggle === 'all' ? orderedProjects : (certificates || []);
  const displayItems = showAll
    ? currentItems
    : currentItems.filter((p) => !BOTTOM_PROJECT_IDS.includes(p.id)).slice(0, 6);

  return (
    <Container id="projects">
      <Wrapper
        as={motion.div}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <Title>Portfolio Showcase</Title>
        <Desc>
          Explore my journey through projects, certifications.
        </Desc>
        <ToggleButtonGroup>
          <ToggleButton 
            active={toggle === 'all'} 
            onClick={() => {setToggle('all'); setShowAll(false);}}
          >
            Projects
            {toggle === 'all' && (
              <motion.div 
                layoutId="activeTabProjects"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '100%',
                  background: '#006AFF',
                  borderRadius: '100px',
                  zIndex: -1,
                  boxShadow: '0 4px 15px rgba(0, 106, 255, 0.4)'
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </ToggleButton>
          <ToggleButton 
            active={toggle === 'certificate'} 
            onClick={() => {setToggle('certificate'); setShowAll(false);}}
          >
            Certificates
            {toggle === 'certificate' && (
              <motion.div 
                layoutId="activeTabProjects"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '100%',
                  background: '#006AFF',
                  borderRadius: '100px',
                  zIndex: -1,
                  boxShadow: '0 4px 15px rgba(0, 106, 255, 0.4)'
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </ToggleButton>
        </ToggleButtonGroup>

        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <AnimatePresence mode="wait">
            <CardContainer
              as={motion.div}
              key={toggle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              style={{ width: '100%', maxWidth: '1200px' }}
            >
              {displayItems.map((project, index) => (
                <motion.div
                  key={`${project.id}-${project.title}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <ProjectCard 
                    project={project} 
                    setOpenModal={setOpenModal}
                  />
                </motion.div>
              ))}
            </CardContainer>
          </AnimatePresence>

          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '32px' }}>
            {currentItems.length > 6 && (
                <ShowMoreButton onClick={() => setShowAll(!showAll)} style={{ margin: 0 }}>
                    {showAll ? (
                        <>Lihat Sedikit <KeyboardArrowUpRounded /></>
                    ) : (
                        <>Lihat Semua ({currentItems.length}) <KeyboardArrowDownRounded /></>
                    )}
                </ShowMoreButton>
            )}
          </div>
        </div>
      </Wrapper>
    </Container>
  )
}

export default Projects