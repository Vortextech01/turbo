import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

export function Turbopack() {
  return (
    <div className="relative w-24 h-24">
      <div className="pointer-events-none absolute w-[261px] h-[261px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-[#4EBFFF] to-[#BD69FF] mix-blend-normal opacity-5 dark:opacity-[0.15] blur-[60px]" />
      <div className="contents dark:hidden">
        <Image
          alt="Turbopack Logo"
          src={`https://raw.githubusercontent.com/Vortextech01/odyssey-theme/main/theme/public/4A4C05D6-7CA8-41D8-9A60-38567567E80B.png`}
          width={120}
          height={136.15}
          loader={myLoader}
          className="absolute w-[84px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="dark:contents hidden">
        <Image
          alt="Turbopack Logo"
          src={`https://raw.githubusercontent.com/Vortextech01/odyssey-theme/main/theme/public/4A4C05D6-7CA8-41D8-9A60-38567567E80B.png`}
          width={120}
          height={136.15}
          loader={myLoader}
          className="hidden dark:block absolute w-[84px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
}
