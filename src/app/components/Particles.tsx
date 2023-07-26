import React, { useCallback } from "react";
import Particles from "react-particles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const MyParticles = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
      console.log(engine);
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadFull(engine);
      await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
      await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 120,
        detectRetina: true,
        particles: {
          number: {
            value: 250,
            density: {
              enable: false,
              value_area: 50,
            },
          },
          color: {
            value: "#fff",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#fff",
            },
            polygon: {
              nb_sides: 1,
            }
          },
          opacity: {
            value: 0.1,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 0,
            random: true,
            anim: {
              enable: false,
              speed: 0,
              size_min: 0,
              sync: false,
            },
          },
          line_linked: {
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
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        }
      }}
    />
  );
};

export default MyParticles;