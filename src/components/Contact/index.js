import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  position: relative;
  z-index: 1;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 60px 0;
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text_primary};
`;

const Desc = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
`;

const ContactForm = styled.form`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  padding: 32px;
  background-color: ${({ theme }) => theme.card};
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  margin-top: 28px;
  gap: 16px;
`;

const ContactTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  border-radius: 12px;
  background-color: transparent;
  color: ${({ theme }) => theme.text_primary};
  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const ContactTextarea = styled.textarea`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  border-radius: 12px;
  background-color: transparent;
  color: ${({ theme }) => theme.text_primary};
  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.button`
  width: 100%;
  padding: 14px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  border: none;
  border-radius: 12px;
  color: #fff;
  cursor: pointer;
  &:hover {
    background: linear-gradient(225deg, hsla(294, 100%, 50%, 1) 0%, hsla(271, 100%, 50%, 1) 100%);
  }
`;

// Main Component
const Contact = () => {
  const form = useRef();
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_rrog2qg', 'template_5vsuoik', form.current, 'e4BAviMcSQ-kUSxti')
      .then((result) => {
        setOpen(true);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <Container>
      <Wrapper>
        <Title>Contact Me</Title>
        <Desc>Feel free to send me a message. I'll get back to you as soon as I can!</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput type="email" placeholder="Your Email" name="from_email" required />
          <ContactInput type="text" placeholder="Your Name" name="from_name" required />
          <ContactInput type="text" placeholder="Subject" name="subject" required />
          <ContactTextarea placeholder="Your Message" rows="4" name="message" required />
          <ContactButton type="submit">Send Message</ContactButton>
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;
