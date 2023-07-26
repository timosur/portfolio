'use client'

import React from 'react';
// @ts-ignore.
import Typed from 'typed.js';
import MyParticles from './components/Particles';

export default function Home() {
  const title = React.useRef(null);
  const subtitle = React.useRef(null);

  React.useEffect(() => {
    const titleTyped = new Typed(title.current, {
      strings: ["timo sur{mann}"],
      typeSpeed: 70,
      cursorChar: '|',
    });

    const subtitleTyped = new Typed(subtitle.current, {
      strings: [
        "Senior Cloud DevOps Engineer",
        "Licensed trainer (software developer, sports)",
        "DJ",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      startDelay: 2 * 1000,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      subtitleTyped.destroy();
      titleTyped.destroy();
    };
  }, []);

  return (
    <React.Fragment>
      <main className="flex min-h-screen flex-col items-center justify-between bg-[url('/background.jpg')] bg-cover bg-center">
        <div className="min-w-screen text-right text-white">
          <div className="relative flex justify-end pt-10">
            <div className="flex space-x-4">
              <a href="https://github.com/timosur" target="_blank" className="hover:cursor-pointer hover:text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              </a>
              <a href="https://de.linkedin.com/in/timo-surmann-450758119" target="_blank" className="hover:cursor-pointer hover:text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
              <a href="https://www.twitch.tv/givgroov" target="_blank" className="hover:cursor-pointer hover:text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z"
                    fill-rule="evenodd"
                    clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="z-10 pt-40 relative flex flex-col items-center before:absolute before:h-[300px] before:w-[480px]">
          <h4 className="relative pb-1 text-5xl drop-shadow text-blue-500"><span ref={title}></span></h4>
          <h5 className="relative text-black text-l"><span ref={subtitle}></span></h5>
        </div>

        <div className="w-full text-center mb-5">
          <span className="text-xs text-black">hetzner + k8s + arm = 🔥</span>
          <br />
          <span className="text-xs text-black">Timo Surmann - Iltisweg 6 - 45663 Recklinghausen - dev@timosur.com</span>
        </div>
      </main>
      <MyParticles />
    </React.Fragment>
  )
}
