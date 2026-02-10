import type { ISourceOptions } from 'tsparticles';

export const options: ISourceOptions = {
  retinaDetect: true,
  fpsLimit: 120,
  fullScreen: {
    enable: false,
  },
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        area: 800,
      },
    },
    color: {
      value: ['#3b82f6', '#06b6d4', '#8b5cf6', '#10b981', '#f59e0b'],
    },
    shape: {
      type: 'circle',
    },
    opacity: {
      value: 0.4,
      random: true,
      anim: {
        enable: true,
        speed: 0.8,
        minimumValue: 0.1,
        sync: false,
      },
    },
    size: {
      value: 6,
      random: {
        enable: true,
        minimumValue: 3,
      },
      anim: {
        enable: true,
        speed: 1.5,
        minimumValue: 2,
        sync: false,
      },
    },
    links: {
      enable: true,
      distance: 150,
      color: '#3b82f644',
      opacity: 0.3,
      width: 1.5,
    },
    move: {
      enable: true,
      speed: 0.8,
      direction: 'none',
      random: true,
      straight: false,
      outMode: 'bounce',
      bounce: true,
    },
  },
  interactivity: {
    detectsOn: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'repulse',
      },
      onclick: {
        enable: true,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 250,
        duration: 0.5,
      },
      push: {
        quantity: 6,
      },
    },
  },
  key: '3m@62^K^88745%',
};
