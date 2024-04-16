import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import { darkTheme, lightTheme } from './utils/Themes';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Visionary from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetails from "./components/ProjectDetails";
import './App.css';

// Importing ArrowCircleUpSharpIcon from Material-UI
import ArrowCircleUpSharpIcon from '@mui/icons-material/ArrowCircleUpSharp';

// Styled components
const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

const ScrollIndicatorWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: opacity 0.3s ease;
  opacity: ${({ visible }) => visible ? "1" : "0"};
  z-index: 9999;
`;

const Tooltip = styled.div`
  position: absolute;
  bottom: 100%; // Place the tooltip above the icon
  left: 50%;
  transform: translateX(-50%); // Center the tooltip
  background-color: rgba(0, 0, 0, 0.75);
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 12px;
  opacity: ${({ visible }) => visible ? "1" : "0"};
  transition: opacity 0.3s ease;
  white-space: nowrap; // Keeps tooltip text on one line
  pointer-events: none; // Make the tooltip not clickable
`;

const ArrowIcon = styled(ArrowCircleUpSharpIcon)`
  width: 70px; // Increase the width of the icon
  height: 60px; // Increase the height of the icon
  margin-bottom: 8px;
  font-size: 22px;
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
    const [darkMode, setDarkMode] = useState(true);
    const [openModal, setOpenModal] = useState({ state: false, project: null });
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [scrollVisible, setScrollVisible] = useState(false);
    const [tooltipVisible, setTooltipVisible] = useState(false); // State for tooltip visibility

    useEffect(() => {
        const updateScrollPercentage = () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
            const clientHeight = document.documentElement.clientHeight || window.innerHeight;
            const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
            setScrollPercentage(Math.round(scrolled));
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

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Router>
                <Navbar />
                <Body>
                    <HeroSection />
                    <Wrapper>
                        <Skills />
                        <Visionary />
                    </Wrapper>
                    <Projects openModal={openModal} setOpenModal={setOpenModal} />
                    <Wrapper>
                        <Education />
                        <Contact />
                    </Wrapper>
                    <Footer />
                    {openModal.state &&
                        <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
                    }
                    <ScrollIndicatorWrapper visible={scrollVisible} onClick={scrollToTop}>
                        <Tooltip visible={tooltipVisible}>Scroll to Top</Tooltip>
                        <ArrowIcon
                            onMouseEnter={() => setTooltipVisible(true)}
                            onMouseLeave={() => setTooltipVisible(false)}
                        />
                        <ScrollPercentage>{Math.round(scrollPercentage)}%</ScrollPercentage>
                    </ScrollIndicatorWrapper>
                </Body>
            </Router>
        </ThemeProvider>
    );
}

export default App;
