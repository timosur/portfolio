import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState, useMemo } from "react";

const MyParticles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(() => ({
    fpsLimit: 120,
    detectRetina: true,
    particles: {
      number: {
        value: 250,
        density: {
          enable: false,
        },
      },
      color: {
        value: "#fff",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.1,
      },
      size: {
        value: 0,
      },
      links: {
        enable: true,
        distance: 100,
        color: "#fff",
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "out",
        },
      },
    },
  }), []);

  if (!init) {
    return null;
  }


  return (
    <Particles
      id="tsparticles"
      options={options}
    />
  );
};

export default MyParticles;