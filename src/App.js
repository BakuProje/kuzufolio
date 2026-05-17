import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import Navbar from "./components/Navbar";
import AstronomyBackground from "./components/AstronomyBackground";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

const Body = styled.div`
  background-color: transparent;
  width: 100%;
  overflow-x: hidden;
  position: relative;
  z-index: 1;
`

function App() {
  const [darkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router >
        <AstronomyBackground />
        {!openModal.state && <Navbar />}
        <Body>
          <HeroSection />
          <About />
          <Skills />
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Contact />
          <AnimatePresence>
            {openModal.state &&
              <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
            }
          </AnimatePresence>
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
