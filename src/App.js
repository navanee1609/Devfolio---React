import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './utils/Themes.js';
import Navbar from './components/Navbar';
import Modal from './components/modal.js'; 
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Visionary from './components/Experience';
import Education from './components/Education';
import styled, { createGlobalStyle } from 'styled-components';
import { TouchApp as MdTouchApp } from '@mui/icons-material'; // Importing touch app icon from MUI
import GpsFixedSharpIcon from '@mui/icons-material/GpsFixedSharp'; // Importing GpsFixedSharp icon from MUI
import RadarSharpIcon from '@mui/icons-material/RadarSharp'; // Importing RadarSharp icon from MUI

const GlobalStyle = createGlobalStyle`
  body {
    cursor: url(${RadarSharpIcon}), auto;
  }
`;

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
  ${({ modalOpen }) => modalOpen && `
    height: 100vh;
    overflow: hidden;
  `}
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`;

const ScrollIndicatorWrapper = styled.div`
  position: fixed;
  bottom: 10px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: opacity 0.3s ease;
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  z-index: 9999;
`;

const ArrowIcon = styled(GpsFixedSharpIcon)`
  width: 30px;
  height: 30px;
  margin-bottom: 5px;
  cursor: pointer; /* Add cursor pointer to indicate clickable */
`;

const ScrollPercentage = styled.div`
  width: 40px;
  height: 40px;
  background-color: white;
  color: rgb(25, 25, 36);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 12px;
  padding: 5px;
  font-weight: bold;
`;

function App() {
  const [darkMode, setDarkMode] = React.useState(true);
  const [openModal, setOpenModal] = React.useState(true); // Initially keep the modal open
  const [scrollPercentage, setScrollPercentage] = React.useState(0);
  const [scrollVisible, setScrollVisible] = React.useState(false);

  useEffect(() => {
    const updateScrollPercentage = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight || window.innerHeight;
      const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollPercentage(scrolled);
    };

    const handleScroll = () => {
      updateScrollPercentage();
      const isScrollVisible = window.scrollY > 100;
      setScrollVisible(isScrollVisible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const closeModal = () => {
    setOpenModal(false);
    // Enable scrolling when the modal is closed
    document.body.style.overflow = 'auto';
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router>
        <Navbar toggleTheme={toggleTheme} />
        <Body modalOpen={openModal}>
          {openModal && (
            <Modal 
              isOpen={openModal} 
              closeModal={closeModal} 
            />
          )}
          <HeroSection />
          <Wrapper>
            <Skills />
            <Visionary />
          </Wrapper>
          <Projects />
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
          <Footer />
          <ScrollIndicatorWrapper visible={scrollVisible} onClick={scrollToTop}>
            <ArrowIcon onClick={scrollToTop} />
            <ScrollPercentage>{Math.round(scrollPercentage)}%</ScrollPercentage>
          </ScrollIndicatorWrapper>
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
