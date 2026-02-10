import { useContext } from 'react';

import styled from 'styled-components';

import { AppContext } from 'App/AppContext';
import { Theme } from 'types';

const Container = styled.div<{ $theme: Theme }>`
  position: fixed;
  left: 2rem;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  z-index: 10;

  @media (max-width: 820px) {
    display: none;
  }

  &::after {
    content: '';
    width: 1px;
    height: 100px;
    background-color: ${({ $theme }) => $theme.tertiaryTextColor};
  }

  a,
  a:active,
  a:hover {
    outline: 0;
  }

  .button-container {
    display: inline-block;
    height: 3rem;
    width: 3rem;
    margin: 0;
  }

  .button {
    transition: all 0.3s ease;
    height: 3rem;
    width: 3rem;
    color: ${({ $theme }) => $theme.secondaryTextColor};
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    position: relative;
    z-index: 1;
    border: 2px solid rgba(59, 130, 246, 0.6);
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
  }

  .button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: shine 3s infinite;
    z-index: -1;
  }

  @keyframes shine {
    0% { left: -100%; }
    50% { left: 100%; }
    100% { left: 100%; }
  }

  .icon {
    height: 2rem;
    width: 2rem;
    padding: 0;
  }
...

  .icon_title {
    font-size: 1.25rem;
  }

  .button:hover {
    background-color: ${({ $theme }) => $theme.shadowColor};
    box-shadow: 0 0 0.75rem 0.75rem rgba(128, 128, 128, 0.25);
  }

  .button:active {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }

  .button-container .icon_title {
    display: none;
  }

  .button-container:hover .icon_title {
    display: initial;
  }

  .button-container:hover .icon {
    display: none;
  }

  @media only screen and (max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2) {
    .button-container {
      height: 5rem;
      width: 5rem;
      margin: 0 0.8rem;
    }

    .button {
      height: 5rem;
      width: 5rem;
    }

    .icon {
      height: 4rem;
      width: 4rem;
      padding: 0.5rem;
    }

    .icon_title {
      font-size: 1rem;
    }
  }
`;

export const Buttons = () => {
  const { config, theme } = useContext(AppContext);

  return (
    <Container $theme={theme}>
      {config.buttons.map(({ name, display, ariaLabel, icon, href }) => (
        <span className="button-container" key={name}>
          <a
            data-v2={`button-${display}`}
            className="button"
            aria-label={ariaLabel}
            href={href}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="icon">{icon}</div>
            <span data-v2={display} className="icon_title">
              {display}
            </span>
          </a>
        </span>
      ))}
    </Container>
  );
};
