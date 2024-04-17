import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js';
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Visionary from "./components/Experience";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";
import { FaArrowCircleUp } from 'react-icons/fa'; // Importing the icon for the scroll indicator
import WelcomeModal from './components/WelcomeModal'; // Import the WelcomeModal component

const Body = styled.div`
    background-color: ${({ theme }) => theme.bg};
    width: 100%;
    overflow-x: hidden;
`;

const Wrapper = styled.div`
    background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
    width: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
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
    opacity: ${({ visible }) => (visible ? '1' : '0')};
    z-index: 9999;
`;

const ArrowIcon = styled(FaArrowCircleUp)`
    width: 30px;
    height: 30px;
    margin-bottom: 5px;
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
    const [welcomeModalVisible, setWelcomeModalVisible] = useState(true);

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

    useEffect(() => {
        const bodyElement = document.body;
        if (welcomeModalVisible) {
            bodyElement.style.overflow = 'hidden';
        } else {
            bodyElement.style.overflow = 'auto';
        };
    }, [welcomeModalVisible]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
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
                    {openModal.state && (
                        <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
                    )}
                    <ScrollIndicatorWrapper visible={scrollVisible} onClick={scrollToTop}>
                        <ArrowIcon />
                        <ScrollPercentage>{Math.round(scrollPercentage)}%</ScrollPercentage>
                    </ScrollIndicatorWrapper>

                    {/* Welcome Modal */}
                    <WelcomeModal
                        isVisible={welcomeModalVisible}
                        onClose={() => setWelcomeModalVisible(false)}
                    />
                </Body>
            </Router>
        </ThemeProvider>
    );
}

export default App;
