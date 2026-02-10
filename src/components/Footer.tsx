import { useContext } from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';

import { AppContext } from 'App/AppContext';
import { Theme } from 'types';

const F = {
  Container: styled.footer<{ $isMobile: boolean }>`
    position: relative;
    width: 100%;
    text-align: center;
    padding: 4rem 2rem;
    z-index: 1;
    background: linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.8) 100%);
    border-top: 2px solid rgba(59, 130, 246, 0.2);
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.1), transparent 70%);
      pointer-events: none;
    }
  `,
  Text: styled.p<{ $theme: Theme }>`
    transition: color 0.5s linear;
    color: ${({ $theme }) => $theme.tertiaryTextColor};
  `,
  Link: styled.a<{ $theme: Theme }>`
    transition: color 0.5s linear;
    color: ${({ $theme }) => $theme.secondaryTextColor};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  `,
};

const ContentWrapper = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const MainHeading = styled(motion.h2)`
  font-size: 2rem;
  color: white;
  margin-bottom: 1.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #3b82f6, #06b6d4, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const DescriptionText = styled(motion.p)`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.8;
  margin-bottom: 2rem;
  font-weight: 500;
  letter-spacing: 0.3px;

  @media (max-width: 600px) {
    font-size: 0.95rem;
  }
`;

const CTAButton = styled(motion.button)`
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
  margin-bottom: 2.5rem;
  letter-spacing: 0.5px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
    transition: left 0.6s ease;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 40px rgba(59, 130, 246, 0.5);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-2px);
  }

  @media (max-width: 600px) {
    padding: 0.85rem 2rem;
    font-size: 0.9rem;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
`;

const SocialIcon = styled(motion.a)<{ $theme: Theme }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.1));
  border: 2px solid rgba(59, 130, 246, 0.3);
  color: ${({ $theme }) => $theme.secondaryTextColor};
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;

  svg {
    width: 24px;
    height: 24px;
    fill: currentColor;
  }

  &:hover {
    background: linear-gradient(135deg, #3b82f6, #06b6d4);
    border-color: #3b82f6;
    color: white;
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(59, 130, 246, 0.4);
  }
`;

const CopyRight = styled(motion.p)`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(59, 130, 246, 0.1);
  letter-spacing: 0.3px;
`;

export const Footer = () => {
  const { isMobile, theme, config } = useContext(AppContext);

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <F.Container $isMobile={isMobile} id="contact">
      <ContentWrapper
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <MainHeading variants={itemVariants}>
          Let's Work Together
        </MainHeading>

        <DescriptionText variants={itemVariants}>
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </DescriptionText>

        <CTAButton
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const mailtoLink = document.querySelector('a[href^="mailto:"]') as HTMLAnchorElement;
            if (mailtoLink) mailtoLink.click();
          }}
        >
          Get In Touch
        </CTAButton>

        <SocialLinks variants={itemVariants}>
          {config.buttons.map((btn, index) => (
            <SocialIcon
              key={btn.name}
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
              $theme={theme}
              aria-label={btn.ariaLabel}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                delay: index * 0.05,
              }}
            >
              {btn.icon}
            </SocialIcon>
          ))}
        </SocialLinks>

        <CopyRight variants={itemVariants}>
          © {new Date().getFullYear()} Emad Ahmed. All rights reserved.
        </CopyRight>
      </ContentWrapper>
    </F.Container>
  );
};
