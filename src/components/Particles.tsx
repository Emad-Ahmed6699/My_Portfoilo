import { useContext } from 'react';
import ReactParticles from 'react-tsparticles';

import styled from 'styled-components';

import { AppContext } from 'App/AppContext';
import { options } from 'appearance';
import { Theme } from 'types';

const P = {
  Container: styled.div<{ $theme: Theme }>`
    transition: background-color 0.5s linear;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      -45deg,
      ${({ $theme }) => $theme.key === 'dark' ? '#0a0e27' : '#f8fafc'},
      ${({ $theme }) => $theme.key === 'dark' ? '#1a1f3a' : '#edf2f7'},
      ${({ $theme }) => $theme.key === 'dark' ? '#162438' : '#e0e7ff'}
    );
    background-size: 400% 400%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    z-index: -1;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(
        circle at 20% 50%,
        rgba(59, 130, 246, 0.1) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 80%,
        rgba(139, 92, 246, 0.08) 0%,
        transparent 50%
      );
      pointer-events: none;
    }
  `,
};

export const Particles = () => {
  const { theme } = useContext(AppContext);

  return (
    <P.Container data-v2="particles" $theme={theme}>
      <ReactParticles width="100vw" height="100vh" options={options} />
    </P.Container>
  );
};
