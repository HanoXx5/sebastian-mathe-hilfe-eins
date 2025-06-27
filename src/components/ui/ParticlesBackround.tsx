// src/components/ParticlesBackground.tsx
import React, { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // oder 'tsparticles' für die volle Version

const ParticlesBackground: React.FC = () => {
  const particlesInit = useCallback(async (engine: any) => {
    // Du kannst hier entweder loadSlim oder loadFull laden
    // loadSlim ist kleiner und enthält nur die grundlegendsten Funktionen
    // loadFull enthält alle Plugins und Funktionen
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    // console.log(container); // Optional: Für Debugging, wenn die Partikel geladen sind
  }, []);

  // Hier definierst du deine Partikel-Konfiguration
  // Dies ist eine Beispielkonfiguration für dezente, schwebende Punkte
  const options = useMemo(() => {
    return {
      background: {
        color: {
          value: "transparent", // Der Hintergrund des Particle-Canvas ist transparent
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false, // Optional: Partikel bei Klick bewegen
            mode: "push",
          },
          onHover: {
            enable: false, // Optional: Partikel bei Hover bewegen
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#FFFFFF", // Farbe der Partikel (z.B. Weiß)
          // Wenn du einen blauen Touch möchtest, passend zu deiner Website:
          // value: "#a7f3d0", // Eine sehr dezente Emerald-Farbe
        },
        links: {
          color: "#a7f3d0", // Farbe der Linien zwischen den Partikeln
          distance: 150,
          enable: true,
          opacity: 0.2, // Transparenz der Linien
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce", // Partikel prallen am Rand ab
          },
          random: false,
          speed: 1, // Geschwindigkeit der Partikel
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80, // Anzahl der Partikel
        },
        opacity: {
          value: 0.5, // Transparenz der Partikel selbst
        },
        shape: {
          type: "circle", // Form der Partikel
        },
        size: {
          value: { min: 1, max: 5 }, // Größe der Partikel
        },
      },
      detectRetina: true,
    };
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
    />
  );
};

export default ParticlesBackground;