import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = ({ theme }) => {

  const particlesConfig = {
    fullScreen: {
      enable: false,
    },
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 150,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: theme === 'dark' ? "#00FFFF" : "#0077b6",
      },
      links: {
        color: theme === 'dark' ? "#ffffff" : "#0077b6",
        distance: 150,
        enable: true,
        opacity: theme === 'dark' ? 0.15 : 0.3,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 100, // Slightly more particles for a rich network
      },
      opacity: {
        value: theme === 'dark' ? 0.5 : 0.3,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 4 },
      },
    },
    detectRetina: true,
  };

  return (
    <ParticlesProvider init={async (engine) => await loadSlim(engine)}>
      <div className="fixed inset-0 z-[-10] pointer-events-none">
        <Particles
          key={theme}
          id="tsparticles"
          options={particlesConfig}
          className="w-full h-full"
        />
      </div>
    </ParticlesProvider>
  );
};

export default ParticleBackground;
