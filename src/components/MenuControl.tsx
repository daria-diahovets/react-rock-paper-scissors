import "./MenuControl.css";
import themes from "../store/themes";
import { observer } from "mobx-react-lite";
import { useEffect, useRef, useState } from "react";
import sounds from "../store/sounds";

const MenuControl = observer(() => {
  const [isMusicOn, setIsMusicOn] = useState(false);

  const musicRef = useRef<null | HTMLAudioElement>(null);

  useEffect(() => {
    musicRef.current = new Audio("sounds/music.mp3");
    musicRef.current.loop = true;
  }, []);

  useEffect(() => {
    if (!musicRef.current) return;

    if (isMusicOn) {
      musicRef.current.play().catch((e) => console.error(e));
    } else {
      musicRef.current.pause();
    }
  }, [isMusicOn]);

  const toggleMusic = () => {
    sounds.playClick();
    setIsMusicOn((prev) => !prev);
  };

  const toggleTheme = () => {
    sounds.playClick();
    themes.toggleTheme();
  };

  const toggleSound = () => {
    sounds.toggleSound();
    sounds.playClick();
  };

  return (
    <div className="menu">
      <button className="menu-btn btn" onClick={toggleMusic}>
        {isMusicOn ? (
          <svg
            width="40"
            height="39"
            viewBox="0 0 40 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.80349 37.2453C9.63087 37.2453 11.9229 35.3655 11.9229 33.0466C11.9229 30.7278 9.63087 28.848 6.80349 28.848C3.97612 28.848 1.68408 30.7278 1.68408 33.0466C1.68408 35.3655 3.97612 37.2453 6.80349 37.2453Z"
              stroke="currentColor"
              strokeLinejoin="round"
            />
            <path
              d="M29.9846 32.3894C32.812 32.3894 35.1041 30.5096 35.1041 28.1908C35.1041 25.8719 32.812 23.9921 29.9846 23.9921C27.1573 23.9921 24.8652 25.8719 24.8652 28.1908C24.8652 30.5096 27.1573 32.3894 29.9846 32.3894Z"
              stroke="currentColor"
              strokeLinejoin="round"
            />
            <path
              d="M35.1042 28.1908V1.75475L11.9199 9.57772V33.0466"
              stroke="currentColor"
              strokeLinejoin="round"
            />
            <path
              d="M11.9199 19.0789L35.1042 11.358"
              stroke="currentColor"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="36"
            height="37"
            viewBox="0 0 36 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_241_115)">
              <path
                d="M5.62 35.99C8.45 35.99 10.74 34.11 10.74 31.79C10.74 29.47 8.45 27.59 5.62 27.59C2.79 27.59 0.5 29.47 0.5 31.79C0.5 34.11 2.79 35.99 5.62 35.99Z"
                stroke="currentColor"
                strokeLinejoin="round"
              />
              <path
                d="M30.7102 30.83C32.5902 30.21 33.9202 28.7 33.9202 26.93C33.9202 24.61 31.6302 22.73 28.8002 22.73C26.7802 22.73 25.0302 23.69 24.2002 25.09"
                stroke="currentColor"
                strokeLinejoin="round"
              />
              <path
                d="M11.2402 17.7899V31.7999H10.2402V16.9399L11.2402 17.7899Z"
                fill="currentColor"
              />
              <path
                d="M33.9202 26.94V0.5L10.7402 8.32V13.21"
                stroke="currentColor"
                strokeLinejoin="round"
              />
              <path
                d="M14.5898 16.54L33.9198 10.1"
                stroke="currentColor"
                strokeLinejoin="round"
              />
              <path
                d="M0.5 4.68994L34.54 33.7899"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_241_115">
                <rect width="35.04" height="36.49" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}
      </button>
      <button className="menu-btn btn" onClick={toggleSound}>
        {sounds.isSoundOn ? (
          <svg
            width="38"
            height="30"
            viewBox="0 0 38 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.1926 1.12443L9.95417 9.83997H2.77221C1.793 9.83997 1 10.5713 1 11.4749V18.072C1 18.9756 1.793 19.7069 2.77221 19.7069H9.95417L20.1893 28.5554C20.5104 28.8334 21.0273 28.6189 21.0273 28.2079V1.47197C21.0273 1.06399 20.5136 0.849427 20.1926 1.12141V1.12443Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M28.2959 10.4353C30.9863 12.7109 30.9478 16.7242 28.2959 19.0844"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M32.5757 5.78138C39.4526 9.02704 38.7367 20.0998 32.5757 23.6265"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="38"
            height="30"
            viewBox="0 0 38 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_242_127)">
              <path
                d="M19.69 0.61999L9.45 9.33999H2.27C1.29 9.33999 0.5 10.07 0.5 10.97V17.57C0.5 18.47 1.29 19.2 2.27 19.2H9.45L19.69 28.05C20.01 28.33 20.53 28.11 20.53 27.7V0.96999C20.53 0.55999 20.02 0.34999 19.7 0.61999H19.69Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M24.5 9.48999L34.2 19.19"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M34.2 9.48999L24.5 19.19"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_242_127">
                <rect width="34.7" height="28.68" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}
      </button>
      <label htmlFor="theme" className="menu-theme">
        <div className="menu-inner">
          <input
            id="theme"
            type="checkbox"
            hidden
            onClick={toggleTheme}
            defaultChecked={themes.theme === "dark-theme"}
          />
          <div data-theme={themes.theme} className="menu-inner-cicle"></div>
        </div>
      </label>
    </div>
  );
});

export default MenuControl;
