import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import {
  Instagram,
  Telegram,
  MailRounded,
  SendRounded,
  CheckCircleRounded,
  WhatsApp,
  WarningAmberRounded,
  CloseRounded,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const WHATSAPP_LINK = 'https://wa.me/6281527641306';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 16px;
  position: relative;
  z-index: 1;
  scroll-margin-top: 100px;

  @media (max-width: 640px) {
    padding: 64px 14px 72px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  gap: 40px;
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 800;
  text-align: center;
  color: #e8ecff;
  margin-bottom: 10px;

  @media (max-width: 640px) {
    font-size: 32px;
  }
`;

const Desc = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: #a8b4d4;
  margin-bottom: 20px;
  line-height: 1.6;
  padding: 0 8px;

  @media (max-width: 640px) {
    font-size: 16px;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  width: 100%;
  align-items: start;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ContactCard = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 22px 24px;
  background: rgba(22, 28, 58, 0.82);
  border-radius: 22px;
  text-decoration: none;
  color: #e8ecff;
  border: 1px solid rgba(120, 160, 255, 0.2);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.45),
    0 0 40px rgba(80, 120, 255, 0.08);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow:
      0 14px 40px rgba(0, 0, 0, 0.55),
      0 0 50px rgba(90, 159, 255, 0.15);
    color: #7ab4ff;
    border-color: rgba(90, 159, 255, 0.45);
  }
`;

const IconWrapper = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: rgba(0, 106, 255, 0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7ab4ff;
  font-size: 28px;
  flex-shrink: 0;
`;

const WhatsAppIconWrapper = styled(IconWrapper)`
  background: rgba(37, 211, 102, 0.18);
  color: #25d366;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

const CardTitle = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: #9ba8d4;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const CardValue = styled.div`
  font-size: 18px;
  font-weight: 800;
  word-break: break-word;
`;

const FormShell = styled.div`
  position: relative;
  width: 100%;
  border-radius: 34px;
  padding: 2px;
  background: linear-gradient(
    135deg,
    rgba(90, 159, 255, 0.55),
    rgba(140, 100, 220, 0.35) 45%,
    rgba(0, 106, 255, 0.25) 100%
  );
  box-shadow:
    0 16px 48px rgba(0, 0, 0, 0.55),
    0 0 80px rgba(80, 120, 255, 0.12);
`;

const FormPanel = styled(motion.div)`
  width: 100%;
  min-height: 320px;
  padding: 26px 26px 30px;
  border-radius: 32px;
  background: linear-gradient(
    165deg,
    rgba(18, 22, 52, 0.97) 0%,
    rgba(14, 18, 42, 0.98) 100%
  );
  border: 1px solid rgba(120, 160, 255, 0.12);
  display: flex;
  flex-direction: column;
  gap: 18px;
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(90, 159, 255, 0.6),
      rgba(180, 140, 255, 0.5),
      transparent
    );
    opacity: 0.85;
  }

  @media (max-width: 640px) {
    padding: 22px 18px 26px;
    min-height: unset;
  }
`;

const FormHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-top: 6px;
`;

const FormHeaderIcon = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: linear-gradient(
    145deg,
    rgba(0, 106, 255, 0.35),
    rgba(90, 159, 255, 0.15)
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ec5ff;
  flex-shrink: 0;
  border: 1px solid rgba(120, 160, 255, 0.25);
`;

const FormTitle = styled.h2`
  font-size: 24px;
  font-weight: 800;
  color: #e8ecff;
  margin: 0;
  letter-spacing: -0.02em;

  @media (max-width: 640px) {
    font-size: 21px;
  }
`;

const FormSubtitle = styled.p`
  font-size: 14px;
  color: #9ba8d4;
  margin: 6px 0 0;
  line-height: 1.55;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 4px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: 700;
  color: #9ba8d4;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid rgba(120, 160, 255, 0.22);
  background: rgba(8, 10, 28, 0.72);
  color: #e8ecff;
  font-size: 15px;
  font-family: inherit;
  outline: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &::placeholder {
    color: #5c6a9a;
  }

  &:focus {
    border-color: rgba(90, 159, 255, 0.75);
    box-shadow: 0 0 0 3px rgba(0, 106, 255, 0.22);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 128px;
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid rgba(120, 160, 255, 0.22);
  background: rgba(8, 10, 28, 0.72);
  color: #e8ecff;
  font-size: 15px;
  font-family: inherit;
  outline: none;
  resize: vertical;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &::placeholder {
    color: #5c6a9a;
  }

  &:focus {
    border-color: rgba(90, 159, 255, 0.75);
    box-shadow: 0 0 0 3px rgba(0, 106, 255, 0.22);
  }
`;

const SubmitButton = styled.button`
  margin-top: 6px;
  padding: 16px 24px;
  border: none;
  border-radius: 14px;
  background: linear-gradient(135deg, #006aff 0%, #0052cc 100%);
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: 0 12px 32px rgba(0, 106, 255, 0.38);
  transition:
    transform 0.2s ease,
    filter 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.06);
    box-shadow: 0 16px 40px rgba(0, 106, 255, 0.45);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
    transform: none;
  }
`;

const ToastWrap = styled(motion.div)`
  position: fixed;
  top: 88px;
  left: 0;
  right: 0;
  z-index: 13000;
  display: flex;
  justify-content: center;
  padding: 0 14px;
  pointer-events: none;

  @media (max-width: 640px) {
    top: 78px;
  }
`;

const ToastCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px 18px;
  border-radius: 18px;
  background: rgba(18, 16, 36, 0.92);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(251, 191, 36, 0.45);
  box-shadow:
    0 20px 50px rgba(0, 0, 0, 0.55),
    0 0 40px rgba(251, 191, 36, 0.12);
  max-width: min(440px, calc(100vw - 28px));
  width: 100%;
  pointer-events: auto;
`;

const ToastIcon = styled.div`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: rgba(251, 191, 36, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fcd34d;
`;

const ToastBody = styled.div`
  flex: 1;
  min-width: 0;
`;

const ToastTitle = styled.div`
  font-size: 15px;
  font-weight: 800;
  color: #fef3c7;
  margin-bottom: 4px;
`;

const ToastMessage = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: #e7e9f0;
`;

const ToastClose = styled.button`
  flex-shrink: 0;
  width: 34px;
  height: 34px;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.06);
  color: #c5cde8;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    color: #fff;
  }
`;

const ModalBackdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(5, 8, 20, 0.72);
  backdrop-filter: blur(6px);
  z-index: 12000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

const ModalCard = styled(motion.div)`
  max-width: 380px;
  width: 100%;
  padding: 32px 28px;
  border-radius: 24px;
  background: rgba(22, 28, 58, 0.96);
  border: 1px solid rgba(120, 200, 160, 0.35);
  box-shadow:
    0 24px 60px rgba(0, 0, 0, 0.6),
    0 0 60px rgba(80, 200, 140, 0.12);
  text-align: center;
`;

const ModalIcon = styled.div`
  width: 64px;
  height: 64px;
  margin: 0 auto 16px;
  border-radius: 50%;
  background: rgba(52, 211, 153, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #34d399;
`;

const ModalTitle = styled.h3`
  font-size: 22px;
  font-weight: 800;
  color: #e8ecff;
  margin: 0 0 8px;
`;

const ModalText = styled.p`
  font-size: 15px;
  color: #9ba8d4;
  margin: 0 0 24px;
  line-height: 1.5;
`;

const ModalButton = styled.button`
  width: 100%;
  padding: 14px;
  border-radius: 12px;
  background: rgba(52, 211, 153, 0.2);
  color: #6ee7b7;
  font-size: 15px;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
  border: 1px solid rgba(52, 211, 153, 0.35);
  transition: background 0.2s ease;

  &:hover {
    background: rgba(52, 211, 153, 0.28);
  }
`;

const TikTokIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.14-1.32-.09 2.05-.05 4.11-.07 6.16-.01 1.08-.2 2.23-.74 3.19-.53.99-1.38 1.79-2.39 2.29-1.04.54-2.24.74-3.41.67-1.18-.04-2.36-.37-3.37-1.01-1.06-.66-1.9-1.68-2.34-2.84-.46-1.19-.52-2.52-.16-3.74.34-1.21 1.09-2.3 2.1-3.04.99-.74 2.21-1.15 3.44-1.19 0 1.34-.01 2.68-.01 4.02-1.07.03-2.18.51-2.73 1.45-.48.79-.47 1.83-.06 2.64.4.82 1.25 1.41 2.15 1.47 1.1.09 2.22-.43 2.72-1.41.34-.63.36-1.39.36-2.1-.01-3.64-.01-7.29-.01-10.93z" />
  </svg>
);

const initialForm = { name: '', email: '', message: '' };

const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [showSuccess, setShowSuccess] = useState(false);
  const [toast, setToast] = useState(null);

  const dismissToast = useCallback(() => setToast(null), []);

  useEffect(() => {
    if (!toast) return undefined;
    const t = setTimeout(dismissToast, 4800);
    return () => clearTimeout(t);
  }, [toast, dismissToast]);

  const showErrorToast = (title, message) => {
    setToast({ id: Date.now(), title, message });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) {
      showErrorToast('Nama kosong', 'Isi nama Anda supaya kami tahu siapa yang menghubungi.');
      return;
    }
    if (!form.email.trim() || !emailOk(form.email)) {
      showErrorToast('Email tidak valid', 'Gunakan format email yang benar, contoh: nama@email.com');
      return;
    }
    if (!form.message.trim()) {
      showErrorToast('Pesan kosong', 'Tulis isi pesan Anda di kolom pesan sebelum mengirim.');
      return;
    }
    setShowSuccess(true);
    setForm(initialForm);
  };

  return (
    <Container id="contact">
      <Wrapper
        as={motion.div}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <div style={{ textAlign: 'center' }}>
          <Title>Contact Me</Title>
          <Desc>Hubungi saya untuk kolaborasi atau sekadar menyapa!</Desc>
        </div>

        <ContactGrid>
          <InfoSection>
            <ContactCard
              href="https://www.instagram.com/kuzuroken.20"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 8 }}
            >
              <IconWrapper>
                <Instagram fontSize="large" />
              </IconWrapper>
              <CardContent>
                <CardTitle>Instagram</CardTitle>
                <CardValue>@kuzuroken.20</CardValue>
              </CardContent>
            </ContactCard>

            <ContactCard
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 8 }}
            >
              <IconWrapper>
                <TikTokIcon />
              </IconWrapper>
              <CardContent>
                <CardTitle>TikTok</CardTitle>
                <CardValue>@kuzuroken</CardValue>
              </CardContent>
            </ContactCard>

            <ContactCard
              href="https://web.telegram.org/@kuzuroken"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 8 }}
            >
              <IconWrapper>
                <Telegram fontSize="large" />
              </IconWrapper>
              <CardContent>
                <CardTitle>Telegram</CardTitle>
                <CardValue>@kuzuroken</CardValue>
              </CardContent>
            </ContactCard>

            <ContactCard
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 8 }}
            >
              <WhatsAppIconWrapper>
                <WhatsApp fontSize="large" />
              </WhatsAppIconWrapper>
              <CardContent>
                <CardTitle>WhatsApp</CardTitle>
                <CardValue>+62 815-2764-1306</CardValue>
              </CardContent>
            </ContactCard>
          </InfoSection>

          <FormShell>
            <FormPanel
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <FormHeader>
                <FormHeaderIcon>
                  <MailRounded />
                </FormHeaderIcon>
                <div>
                  <FormTitle>Message</FormTitle>
                  <FormSubtitle>
                    Ceritakan kebutuhan atau ide Anda.
                  </FormSubtitle>
                </div>
              </FormHeader>

              <Form onSubmit={handleSubmit} noValidate>
                <Field>
                  <Label htmlFor="contact-name">Nama</Label>
                  <Input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Siapa nama Anda?"
                    value={form.name}
                    onChange={handleChange}
                  />
                </Field>
                <Field>
                  <Label htmlFor="contact-email">Email</Label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="nama@email.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </Field>
                <Field>
                  <Label htmlFor="contact-message">Pesan</Label>
                  <TextArea
                    id="contact-message"
                    name="message"
                    placeholder="Tulis detail pesan Anda di sini…"
                    value={form.message}
                    onChange={handleChange}
                  />
                </Field>
                <SubmitButton type="submit">
                  <SendRounded fontSize="small" />
                  Kirim
                </SubmitButton>
              </Form>
            </FormPanel>
          </FormShell>
        </ContactGrid>
      </Wrapper>

      <AnimatePresence>
        {toast && (
          <ToastWrap
            key={toast.id}
            initial={{ opacity: 0, y: -16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 420, damping: 28 }}
          >
            <ToastCard>
              <ToastIcon>
                <WarningAmberRounded />
              </ToastIcon>
              <ToastBody>
                <ToastTitle>{toast.title}</ToastTitle>
                <ToastMessage>{toast.message}</ToastMessage>
              </ToastBody>
              <ToastClose type="button" onClick={dismissToast} aria-label="Tutup notifikasi">
                <CloseRounded fontSize="small" />
              </ToastClose>
            </ToastCard>
          </ToastWrap>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSuccess && (
          <ModalBackdrop
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowSuccess(false)}
          >
            <ModalCard
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 24, stiffness: 320 }}
              onClick={(ev) => ev.stopPropagation()}
            >
              <ModalIcon>
                <CheckCircleRounded style={{ fontSize: 40 }} />
              </ModalIcon>
              <ModalTitle>Berhasil terkirim</ModalTitle>
              <ModalText>Pesan Anda berhasil dikirim.</ModalText>
              <ModalButton type="button" onClick={() => setShowSuccess(false)}>
                Tutup
              </ModalButton>
            </ModalCard>
          </ModalBackdrop>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Contact;
