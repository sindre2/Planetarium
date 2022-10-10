export const particlesConfig = {
  fullscreen: {
    enable: true,
    zIndex: -1,
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: false,
      },
      onHover: {
        enable: false,
      },
      resize: true,
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    lineLinked: {
      enable: false,
    },
    move: {
      bounce: false,
      direction: "none",
      enable: true,
      outMode: "out",
      random: true,
      speed: 0.1,
      straight: false,
    },
    opacity: {
      anim: {
        enable: true,
        minimumValue: 0,
        speed: 1,
        sync: false,
      },
      random: true,
      value: 1,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 3,
    },
  },
  detectRetina: true,
};
