import { AnimatePresence, motion, Variants } from "framer-motion";
import { useTurboSite } from "../SiteSwitcher";
import cn from "classnames";
import styles from "../header-logo.module.css";

type LogoProps = {
  className?: string;
  height?: number;
};

const LEFT_PADDING = 8;
const RIGHT_PADDING = 12;
// The width of the logo + wordmark. This does not include the "invisible" padding.
const VISUAL_WIDTH = 112;

const TurboAnimated = ({ height = 32, className = "" }: LogoProps) => {
  const site = useTurboSite();

  return (
    <svg
      className={className}
      width={LEFT_PADDING + VISUAL_WIDTH}
      height={height}
      viewBox={`0 0 ${LEFT_PADDING + VISUAL_WIDTH} 28`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Turborepo</title>

      <defs>
        <linearGradient
          id="logo-ring-gradient"
          x1="15.0234"
          y1="4.00556"
          x2="3.64419"
          y2="15.3847"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0096FF" />
          <stop offset="1" stopColor="#FF1E56" />
        </linearGradient>
        <linearGradient id="gradient">
          <stop offset="0%" stopColor="#000000" />
          <stop offset="25%" stopColor="#ffffff" />
          <stop offset="85%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#000000" />
        </linearGradient>
        <mask id="logo-mask">
          <rect
            x="0"
            y="0"
            width={`${26 + LEFT_PADDING + RIGHT_PADDING}`}
            height="26"
            fill="url(#gradient)"
            transform="translate(-8,0)"
          />
        </mask>
      </defs>

      <g mask="url(#logo-mask)" transform={`translate(${LEFT_PADDING},0)`}>
        <AnimatePresence mode="sync" initial={false}>
          {site === "repo" || site === undefined ? (
            <motion.g
              key="turborepo"
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              custom={24}
              className="z-0 relative"
            >
              <path
                d="M13.9396 6.42181C9.79423 6.42181 6.42163 9.79441 6.42163 13.9398C6.42163 18.0852 9.79423 21.4578 13.9396 21.4578C18.085 21.4578 21.4576 18.0852 21.4576 13.9398C21.4576 9.79441 18.085 6.42181 13.9396 6.42181ZM13.9396 17.8304C11.7906 17.8304 10.049 16.0888 10.049 13.9398C10.049 11.7908 11.7906 10.0492 13.9396 10.0492C16.0886 10.0492 17.8302 11.7908 17.8302 13.9398C17.8302 16.0888 16.0886 17.8304 13.9396 17.8304Z"
                className="dark:fill-white fill-black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.5697 5.187V2.38C20.6709 2.7062 25.5177 7.7574 25.5177 13.9398C25.5177 20.1222 20.6709 25.172 14.5697 25.4996V22.6926C19.1169 22.3678 22.7177 18.5682 22.7177 13.9398C22.7177 9.3114 19.1169 5.5118 14.5697 5.187ZM7.30928 19.6798C6.10388 18.2882 5.32688 16.5158 5.18828 14.5698H2.37988C2.52548 17.2928 3.61468 19.7638 5.32128 21.6664L7.30788 19.6798H7.30928ZM13.3097 25.4996V22.6926C11.3623 22.554 9.5899 21.7784 8.1983 20.5716L6.2117 22.5582C8.1157 24.2662 10.5867 25.354 13.3083 25.4996H13.3097Z"
                fill="url(#logo-ring-gradient)"
              />
            </motion.g>
          ) : (
            <motion.g
              key="turbopack"
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              custom={-24}
              className="z-0 relative"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.9443 10.4846C10.6829 10.4846 10.4709 10.6966 10.4709 10.958V16.2234C10.4709 16.4849 10.6829 16.6968 10.9443 16.6968H16.2097C16.4712 16.6968 16.6831 16.4849 16.6831 16.2234V10.958C16.6831 10.6966 16.4712 10.4846 16.2097 10.4846H10.9443ZM7.14628 6.72631C6.90676 6.72631 6.71263 6.92045 6.71263 7.15994V20.0215C6.71263 20.261 6.90676 20.4551 7.14628 20.4551H20.0078C20.2473 20.4551 20.4414 20.261 20.4414 20.0215V7.15994C20.4414 6.92045 20.2473 6.72631 20.0078 6.72631H7.14628Z"
                className="dark:fill-white fill-black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 13.8059V22.1684C2 22.7295 2.15656 23.254 2.42838 23.7007L5.44339 20.6857V13.8059H2ZM3.37481 24.664L6.36423 21.6745C6.38505 21.6758 6.40605 21.6765 6.42723 21.6765H13.0144V25.12H4.95147C4.37169 25.12 3.83094 24.9528 3.37481 24.664ZM14.3648 25.12H22.1684C23.7985 25.12 25.12 23.7985 25.12 22.1684V4.95147C25.12 3.32142 23.7985 2 22.1684 2H13.8059V5.44339H20.6927C21.236 5.44339 21.6765 5.88386 21.6765 6.42723V20.6927C21.6765 21.2361 21.236 21.6765 20.6927 21.6765H14.3648V25.12Z"
                fill="url(#logo-ring-gradient)"
              />
            </motion.g>
          )}
        </AnimatePresence>
      </g>

      {/* Sapiens Wordmark */}
      <h1 className={cn("z-10 relative", styles.desktopLogo)}>
        SAPIENS
      </h1>
    </div>
  );
};

export default TurboAnimated;

const variants: Variants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
  hidden: (distance) => ({
    opacity: 0,
    x: distance,
    transition: {
      duration: 0.3,
    },
  }),
};
