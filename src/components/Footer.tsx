import { useContext } from 'react';

import styled from 'styled-components';

import { AppContext } from 'App/AppContext';
import { Theme } from 'types';

const F = {
  Container: styled.footer<{ $isMobile: boolean }>`
    position: relative;
    width: 100%;
    text-align: center;
    padding: 2rem 0;
    font-size: 0.9rem;
    z-index: 1;
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

const SocialLinks = styled.div`
  display: none;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 1.5rem;

  @media (max-width: 820px) {
    display: flex;
  }
`;

const SocialIcon = styled.a<{ $theme: Theme }>`
  color: ${({ $theme }) => $theme.secondaryTextColor};
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #3b82f6;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const Footer = () => {
  const { isMobile, theme, config } = useContext(AppContext);

  return (
    <F.Container $isMobile={isMobile}>
      <SocialLinks>
        {config.buttons.map((btn) => (
          <SocialIcon
            key={btn.name}
            href={btn.href}
            target="_blank"
            rel="noopener noreferrer"
            $theme={theme}
            aria-label={btn.ariaLabel}
          >
            {btn.icon}
          </SocialIcon>
        ))}
      </SocialLinks>
      <F.Text data-v2="footer" $theme={theme}>
        © {new Date().getFullYear()} Emad Ahmed. All rights reserved.
      </F.Text>
    </F.Container>
  );
};
