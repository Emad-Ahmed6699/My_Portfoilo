import { useContext } from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';

import { AppContext } from 'App/AppContext';
import { Theme } from 'types';

const HeroContainer = styled.section<{ $theme: Theme }>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  position: relative;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: linear-gradient(180deg, transparent, ${({ $theme }) => $theme.key === 'dark' ? '#0a0e27' : '#f8fafc'});
    pointer-events: none;
  }
`;

const Greeting = styled(motion.p) <{ $theme: Theme }>`
  color: #3b82f6;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  animation: glow 3s ease-in-out infinite;

  @keyframes glow {
    0%, 100% {
      text-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
    }
    50% {
      text-shadow: 0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(6, 182, 212, 0.5);
    }
  }
`;

const Name = styled(motion.h1) <{ $theme: Theme }>`
  font-size: clamp(3rem, 10vw, 6rem);
  background: linear-gradient(90deg, #3b82f6 0%, #06b6d4 30%, #3b82f6 60%, #06b6d4 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -1px;
  animation: gradientFlow 3s linear infinite;

  @keyframes gradientFlow {
    0% {
      background-position: 0% center;
    }
    100% {
      background-position: 200% center;
    }
  }
`;

const Subtitle = styled(motion.h2) <{ $theme: Theme }>`
  font-size: clamp(2rem, 8vw, 4rem);
  background: linear-gradient(
    90deg,
    ${({ $theme }) => $theme.secondaryTextColor} 0%,
    #3b82f6 50%,
    ${({ $theme }) => $theme.secondaryTextColor} 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0.5rem 0 2rem 0;
  font-weight: 600;
  animation: shimmer 3s linear infinite;

  @keyframes shimmer {
    0% {
      background-position: 200% center;
    }
    50% {
      background-position: -200% center;
    }
    100% {
      background-position: 200% center;
    }
  }
`;

const Description = styled(motion.p) <{ $theme: Theme }>`
  color: ${({ $theme }) => $theme.tertiaryTextColor};
  max-width: 600px;
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  font-weight: 500;
`;

const CTAButton = styled(motion.a) <{ $theme: Theme }>`
  padding: 1rem 2.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 
    0 10px 20px rgba(59, 130, 246, 0.3),
    0 0 20px rgba(59, 130, 246, 0.5),
    inset 0 0 20px rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(59, 130, 246, 0.6);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: shine 3s infinite;
  }

  @keyframes shine {
    0% { left: -100%; }
    50% { left: 100%; }
    100% { left: 100%; }
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 
      0 15px 30px rgba(59, 130, 246, 0.4),
      0 0 30px rgba(59, 130, 246, 0.6),
      inset 0 0 30px rgba(255, 255, 255, 0.2);
  }
`;

export const Hero = () => {
  const { theme, config } = useContext(AppContext);

  return (
    <HeroContainer id="home" $theme={theme}>
      <Greeting
        $theme={theme}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        HELLO THERE, I'M
      </Greeting>
      <Name
        $theme={theme}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {config.name.display}
      </Name>
      <Subtitle
        $theme={theme}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {config.title.display}
      </Subtitle>
      <Description
        $theme={theme}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        I'm a passionate Software Engineer focused on building clean, accessible, and high-performance web applications. I love turning complex problems into elegant solutions.
      </Description>
      <CTAButton
        href="#projects"
        $theme={theme}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View My Work
      </CTAButton>
    </HeroContainer>
  );
};
