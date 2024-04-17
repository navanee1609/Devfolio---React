import React from 'react';
import styled from 'styled-components';
import InfoIcon from '@mui/icons-material/Info';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 95%;
  max-width: 600px;
  background-color: #222a35;
  padding: 20px;
  border-radius: 10px;
  z-index: 1000;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translate(-50%, -50%) scale(1.02);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  }
`;

const ModalContent = styled.div`
  text-align: center;
`;

const CloseButton = styled.button`
  background-color: #854ce6;
  color: #f2f5f7;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #575c66;
  }
`;

const LinkedInLink = styled.a`
  display: inline-block;
  margin-right: 10px;
  color: #575c66;
  text-decoration: none;
  transition: color 0.3s ease;
  position: relative;

  &:hover {
    color: #854ce6;
  }
`;

const LinkedInTooltip = styled.span`
  visibility: hidden;
  width: 120px;
  background-color: #575c66;
  color: #ffffff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: calc(100% + 5px);
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;

  ${LinkedInLink}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

const PhoneLink = styled.a`
  display: inline-block;
  color: #575c66;
  text-decoration: none;
  transition: color 0.3s ease;
  position: relative;

  &:hover {
    color: #854ce6;
  }
`;

const PhoneTooltip = styled.span`
  visibility: hidden;
  width: 120px;
  background-color: #575c66;
  color: #ffffff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: calc(100% + 5px);
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;

  ${PhoneLink}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

const IconWrapper = styled.span`
  display: inline-block;
  margin-right: 5px;
`;

const ExploreText = styled.span`
  font-size: 18px;
`;

const InfoIconWrapper = styled.div`
  position: absolute;
  top: 10px;
  mr=argin-bottom:5px;
  right: 10px;
  color: #575c66;
  cursor: pointer;
  position: relative;

  &:hover {
    color: #854ce6;
  }
`;


const InfoTooltip = styled.span`
  visibility: hidden;
  width: 90%;
  background-color: #575c66;
  color: #ffffff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: calc(100% + 5px);
  left: 50%; // Center tooltip
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;

  ${InfoIconWrapper}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;
const WelcomeModal = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    return (
        <>
            <ModalOverlay />
            <ModalWrapper>
                <ModalContent>

                <InfoIconWrapper>
            <InfoIcon />
            <InfoTooltip>
              Portfolio - Navaneethan KV, Front End Developer | React.js
            </InfoTooltip>
          </InfoIconWrapper>

          <h2 style={{ color: '#854ce6', marginBottom: '15px' }}>Welcome to My World of Creation!</h2>
          <p style={{ color: '#575c66', marginBottom: '10px' }}>Hello there! I'm excited to share my work with you.</p>
          <p style={{ color: '#575c66', marginBottom: '10px' }}>Feel free to browse through my projects and learn more about my skills and experiences.</p>
          <p style={{ color: '#575c66', marginBottom: '10px' }}>If you have any questions or would like to collaborate, don't hesitate to reach out!</p>
          <p style={{ color: '#575c66', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Looking forward to connect! 
            <LinkedInLink href="https://www.linkedin.com/in/navaneethan-k-v-546a9025b/" target="_blank">
              <IconWrapper><LinkedInIcon /></IconWrapper>
              <LinkedInTooltip>Navaneethan</LinkedInTooltip>
            </LinkedInLink>
            <PhoneLink href="tel:+916380939303">
              <IconWrapper><MobileFriendlyIcon /></IconWrapper>
              <PhoneTooltip>Contact Me</PhoneTooltip>
            </PhoneLink>
          </p>
                    <CloseButton onClick={onClose}>
                        Explore
                    </CloseButton>
                </ModalContent>
            </ModalWrapper>
        </>
    );
};

export default WelcomeModal;
