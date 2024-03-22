


import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Snackbar, Alert } from '@mui/material';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.button`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

const AlertWrapper = styled.div`
  .MuiAlert-filledInfo {
    background-color: white !important;
    color: green !important;
    margin-top: -50px;
    z-index: 1500; /* Increased z-index */
    border-radius: 12px; /* Added border-radius */
  }

  .MuiSvgIcon-root {
    fill: black !important;
  }
`;

const CustomSnackbar = styled(Snackbar)`
  z-index: 1600; /* Increased z-index */
  border-radius: 12px; /* Added border-radius */
`;


export default function Contact() {
  const [result, setResult] = useState("");
  const [buttonText, setButtonText] = useState("Send");
  const form = useRef();

  // const speakSuccessMessage = () => {
  //   const message = "Your email sent successfully. Have a good day.";
  //   const utterance = new SpeechSynthesisUtterance(message);
  //   utterance.lang = "en-IN"; // Set Indian accent
  //   speechSynthesis.speak(utterance);
  // };
  const speakSuccessMessage = (userName) => {
    const message = `Hey ${userName}, your email sent successfully. Have a good day.`;
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.lang = "en-IN"; // Set Indian accent
    speechSynthesis.speak(utterance);
  };
  

  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   setButtonText("Sending...");
  //   const formData = new FormData(event.target);

  //   formData.append("access_key", "89c046ff-8f76-47dd-9562-7105809a3576");

  //   const response = await fetch("https://api.web3forms.com/submit", {
  //     method: "POST",
  //     body: formData
  //   });

  //   const data = await response.json();

  //   if (data.success) {
  //     setResult("Form submitted successfully"); // Updated success message
  //     speakSuccessMessage(); // Call text-to-speech function
  //     setButtonText("Thanks for contacting");
  //     event.target.reset();
  //   } else {
  //     console.log("Error", data);
  //     setResult(data.message);
  //     setButtonText("Send");
  //   }
  // };

  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   setButtonText("Sending...");
  //   const formData = new FormData(event.target);
  
  //   formData.append("access_key", "89c046ff-8f76-47dd-9562-7105809a3576");
  
  //   const response = await fetch("https://api.web3forms.com/submit", {
  //     method: "POST",
  //     body: formData
  //   });
  
  //   const data = await response.json();
  
  //   if (data.success) {
  //     // Retrieve user's name from the form input
  //     const userName = formData.get("name");
      
  //     // Update success message to include the user's name
  //     setResult(`Thanks for contacting, ${userName}!`);
      
  //     speakSuccessMessage();
  //     setButtonText("Thanks for contacting");
  //     event.target.reset();
  //   } else {
  //     console.log("Error", data);
  //     setResult(data.message);
  //     setButtonText("Send");
  //   }
  // };
  
  const onSubmit = async (event) => {
    event.preventDefault();
    setButtonText("Sending...");
    const formData = new FormData(event.target);
  
    formData.append("access_key", "89c046ff-8f76-47dd-9562-7105809a3576");
  
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
  
    const data = await response.json();
  
    if (data.success) {
      // Retrieve user's name from the form input
      const userName = formData.get("name");
      
      // Update success message to include the user's name
      setResult(`Thanks for contacting, ${userName}!`);
      
      speakSuccessMessage(userName); // Pass userName to the function
      setButtonText("Thanks for contacting");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      setButtonText("Send");
    }
  };
  

  const handleAlertClose = () => {
    setResult("");
    setButtonText("Send"); // Reset button text when Snackbar closes
  };

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <ContactForm ref={form} onSubmit={onSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput placeholder="Your Email" name="email" required />
          <ContactInput placeholder="Your Name" name="name" required />
          <ContactInput placeholder="Subject" name="subject" />
          <ContactInputMessage placeholder="Message" rows="4" name="message" required />
          <ContactButton type="submit" disabled={buttonText === "Sending..."}>{buttonText}</ContactButton>
        </ContactForm>
        <CustomSnackbar open={result !== ""} autoHideDuration={5000} onClose={handleAlertClose}>
          <AlertWrapper>
            <Alert onClose={handleAlertClose} variant="filled" severity="info">
              {result}
            </Alert>
          </AlertWrapper>
        </CustomSnackbar>
      </Wrapper>
    </Container>
  );
}


