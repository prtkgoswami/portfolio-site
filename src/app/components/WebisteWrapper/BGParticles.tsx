import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

export default function BGParticles() {
  const particlesInit = useCallback(async (engine: Engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      options={{
        fps_limit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            resize: true,
          },
          modes: {
            push: { particles_nb: 4 },
            repulse: { distance: 200, duration: 0.4 },
          },
        },
        particles: {
          color: { value: "#933F99" },
          links: {
            color: "#FADBAC",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1.3,
          },
          move: {
            bounce: false,
            direction: "none",
            enable: true,
            outMode: "out",
            random: false,
            speed: 1,
            straight: false,
          },
          number: { density: { enable: true, area: 800 }, value: 60 },
          opacity: { value: 0.3 },
          shape: { type: "circle" },
          size: { random: true, value: 8 },
        },
        detectRetina: true,
      }}
      init={particlesInit}
    />
  );
}
