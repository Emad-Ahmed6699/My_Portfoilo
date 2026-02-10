import { useContext } from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';

import { AppContext } from 'App/AppContext';
import { Theme } from 'types';

const SkillsContainer = styled.section<{ $theme: Theme }>`
  min-height: auto;
  padding: 100px 4rem;
  z-index: 1;
  position: relative;
  text-align: center;

  @media (max-width: 820px) {
    padding: 80px 2rem;
  }
`;

const SectionTitle = styled(motion.h2) <{ $theme: Theme }>`
  font-size: 2.5rem;
  color: ${({ $theme }) => $theme.primaryTextColor};
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
  font-weight: 700;
  letter-spacing: -0.5px;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #06b6d4);
    border-radius: 2px;
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
  }
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  max-width: 1100px;
  margin: 0 auto;
`;

const SkillCard = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 180px;
  height: 180px;
  cursor: pointer;
  border-radius: 25px;
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.2), rgba(34, 197, 232, 0.15));
  border: 2px solid rgba(96, 165, 250, 0.4);
  padding: 20px;
  position: relative;
  z-index: 2;
  box-shadow: 0 8px 32px rgba(59, 130, 246, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  gap: 12px;

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 25px;
    background: linear-gradient(135deg, #3b82f6, #06b6d4, #8b5cf6);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    transform: translateY(-25px) scale(1.08);
    filter: drop-shadow(0 25px 50px rgba(59, 130, 246, 0.4));
    background: linear-gradient(135deg, rgba(96, 165, 250, 0.3), rgba(34, 197, 232, 0.25));
    border-color: rgba(96, 165, 250, 0.8);
    box-shadow: 0 20px 50px rgba(59, 130, 246, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.2);
  }

  &:hover::before {
    opacity: 0.15;
  }

  @media (max-width: 600px) {
    width: 140px;
    height: 140px;
  }
`;

export const Skills = () => {
  const { theme } = useContext(AppContext);

  const technologies = [
    { name: 'HTML5', icon: 'html5-original', color: 'E34C26' },
    { name: 'CSS3', icon: 'css3-original', color: '1572B6' },
    { name: 'JavaScript', icon: 'javascript-original', color: 'F7DF1E' },
    { name: 'React', icon: 'react-original', color: '61DAFB' },
    { name: 'Node.js', icon: 'nodejs-original', color: '68A063' },
    { name: 'Bootstrap', icon: 'bootstrap-original', color: '7952B3' },
    { name: 'Sass', icon: 'sass-original', color: 'CC6699' },
    { name: 'TypeScript', icon: 'typescript-original', color: '3178C6' },
    { name: 'C#', icon: 'csharp-original', color: '239120' },
    { name: 'SQL Server', icon: 'microsoftsqlserver-plain', color: 'CC2927' },
    { name: 'Git', icon: 'git-original', color: 'F1502F' },
    { name: '.NET', icon: 'dotnetcore-original', color: '512BD4' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.7 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6,
      },
    },
  };

  return (
    <SkillsContainer id="skills" $theme={theme}>
      <SectionTitle
        $theme={theme}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        My Skills
      </SectionTitle>
      <SkillsGrid
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {technologies.map((tech) => (
          <SkillCard
            key={tech.name}
            variants={itemVariants}
            title={tech.name}
            whileHover={{ 
              y: -20,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img 
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.icon.split('-')[0]}/${tech.icon}.svg`}
              alt={tech.name}
              style={{ 
                width: '70px',
                height: '70px',
                display: 'block',
                filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.2))',
                objectFit: 'contain',
              }}
              whileHover={{
                scale: 1.15,
                transition: { duration: 0.3 }
              }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <motion.span 
              style={{ 
                fontSize: '0.95rem', 
                color: '#06b6d4', 
                fontWeight: 700, 
                textAlign: 'center',
                letterSpacing: '0.5px',
              }}
              whileHover={{
                color: '#3b82f6',
                transition: { duration: 0.3 }
              }}
            >
              {tech.name}
            </motion.span>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
};
