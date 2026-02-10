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
  margin-bottom: 4rem;
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

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SkillCategory = styled.div`
  text-align: left;
`;

const CategoryTitle = styled.h3<{ $theme: Theme }>`
  font-size: 1.5rem;
  color: ${({ $theme }) => $theme.primaryTextColor};
  margin-bottom: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CategoryIcon = styled.span`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 1.5rem;
`;

const SkillCard = styled(motion.div) <{ $theme: Theme }>`
  padding: 1.75rem 1.25rem;
  background: linear-gradient(135deg, ${({ $theme }) => $theme.shadowColor} 0%, rgba(59, 130, 246, 0.05) 100%);
  border-radius: 14px;
  border: 2px solid ${({ $theme }) => $theme.tertiaryTextColor}22;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.1) 50%, transparent 70%);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &:hover {
    border-color: #3b82f6;
    transform: translateY(-8px) scale(1.05);
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(6, 182, 212, 0.05) 100%);
    box-shadow: 0 15px 45px rgba(59, 130, 246, 0.25), 0 0 30px rgba(59, 130, 246, 0.15);

    &::before {
      transform: translateX(100%);
    }

    ${SkillIcon} {
      transform: scale(1.2) rotateY(360deg);
      filter: drop-shadow(0 0 10px #3b82f6);
    }
  }
`;

const SkillIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
`;

const SkillName = styled.h4<{ $theme: Theme }>`
  font-size: 0.95rem;
  color: ${({ $theme }) => $theme.secondaryTextColor};
  margin: 0;
  font-weight: 600;
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
  text-align: center;

  ${SkillCard}:hover & {
    color: #06b6d4;
  }
`;

export const Skills = () => {
    const { theme } = useContext(AppContext);

    const skillCategories = [
        {
            name: 'Core Competencies',
            icon: '🎯',
            skills: [
                { name: 'OOP', icon: '🏗️' },
                { name: 'Database Design', icon: '🗄️' },
                { name: 'Web Development', icon: '🌐' },
                { name: 'Problem Solving', icon: '🧩' },
                { name: 'Data Structures', icon: '📊' },
            ]
        },
        {
            name: 'Programming Languages',
            icon: '💻',
            skills: [
                { name: 'C#', icon: '⚙️' },
                { name: 'Java', icon: '☕' },
                { name: 'Python', icon: '🐍' },
                { name: 'C++', icon: '📝' },
                { name: 'JavaScript', icon: '⚡' },
                { name: 'TypeScript', icon: '📘' },
                { name: 'SQL', icon: '🔍' },
            ]
        },
        {
            name: 'Web Technologies',
            icon: '🚀',
            skills: [
                { name: 'HTML5', icon: '🏷️' },
                { name: 'CSS3', icon: '🎨' },
                { name: 'React', icon: '⚛️' },
                { name: 'ASP.NET MVC', icon: '🔧' },
            ]
        },
        {
            name: 'Tools & Databases',
            icon: '🛠️',
            skills: [
                { name: 'Visual Studio', icon: '📦' },
                { name: 'SQL Server', icon: '🗄️' },
                { name: 'SSMS', icon: '📊' },
                { name: 'Git & GitHub', icon: '🐙' },
                { name: 'Entity Framework', icon: '🔗' },
                { name: 'Bootstrap', icon: '📐' },
            ]
        }
    ];

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.05,
        },
      },
    };

    const itemVariants = {
      hidden: { opacity: 0, y: 20, scale: 0.95 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.4 },
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
            <SkillsWrapper>
                {skillCategories.map((category) => (
                    <SkillCategory key={category.name}>
                        <CategoryTitle $theme={theme}>
                            <CategoryIcon>{category.icon}</CategoryIcon>
                            {category.name}
                        </CategoryTitle>
                        <SkillsGrid>
                            <motion.div
                              variants={containerVariants}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true }}
                              style={{ display: 'contents' }}
                            >
                              {category.skills.map((skill) => (
                                  <SkillCard
                                      key={skill.name}
                                      $theme={theme}
                                      variants={itemVariants}
                                  >
                                      <SkillIcon>{skill.icon}</SkillIcon>
                                      <SkillName $theme={theme}>{skill.name}</SkillName>
                                  </SkillCard>
                              ))}
                            </motion.div>
                        </SkillsGrid>
                    </SkillCategory>
                ))}
            </SkillsWrapper>
        </SkillsContainer>
    );
};
