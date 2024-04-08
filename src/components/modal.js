import React from 'react';
import styled from 'styled-components';
import LinkedInIcon from '@mui/icons-material/LinkedIn'; 
import ExploreIcon from '@mui/icons-material/Explore';

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
  background-color: #222A35;
  padding: 20px;
  border-radius: 10px;
  z-index: 1000;
  transition: transform 0.3s ease, background-color 0.3s ease; /* Added background-color transition */

  &:hover {
    transform: translate(-50%, -50%) scale(1.02);
    background-color: #19212C; /* Change to the desired hovering background color */
  }
`;

const ModalContent = styled.div`
  text-align: center;
`;

const CloseButton = styled.button`
  background-color: #854CE6; 
  color: #F2F5F7; 
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #575C66; 
  }
`;

const LinkedInLink = styled.a`
  display: inline-block;
  margin-top: 4px;
  color: #575C66; 
  text-decoration: none; 
  transition: color 0.3s ease;
  position: relative; 

  &:hover {
    color: #854CE6; 
  }
`;

const Tooltip = styled.span`
  visibility: hidden;
  width: 120px;
  background-color: #575C66; 
  color: #FFFFFF; 
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

const IconWrapper = styled.span`
  display: inline-block;
  margin-right: 5px;
`;

const ExploreText = styled.span`
  font-size: 18px; 
`;

const Modal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <>
      <ModalOverlay />
      <ModalWrapper>
        <ModalContent>
          <h2 style={{ color: '#854CE6', marginBottom: '20px' }}>Welcome to My World of Creation!</h2>
          <p style={{ color: '#575C66', marginBottom: '10px' }}>Hello there! I'm excited to share my work with you.</p>
          <p style={{ color: '#575C66', marginBottom: '10px' }}>Feel free to browse through my projects and learn more about my skills and experiences.</p>
          <p style={{ color: '#575C66', marginBottom: '10px' }}>If you have any questions or would like to collaborate, don't hesitate to reach out!</p>
          <p style={{ color: '#575C66', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Looking forward to connect! 
            <LinkedInLink href="https://www.linkedin.com/in/navaneethan-k-v-546a9025b/" target="_blank">
              <IconWrapper><LinkedInIcon /></IconWrapper>
              <Tooltip>Navaneethan</Tooltip>
            </LinkedInLink>
          </p>
          <CloseButton onClick={closeModal}>
            <ExploreText>Explore</ExploreText>
            {/* <IconWrapper><ExploreIcon /></IconWrapper> */}
          </CloseButton>
        </ModalContent>
      </ModalWrapper>
    </>
  );
};

export default Modal;
