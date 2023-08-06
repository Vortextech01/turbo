import Image from 'next/image';

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

export function Playground() {
  return (
    <div className="relative w-24 h-24">
      <div className="pointer-events-none absolute w-[261px] h-[261px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-[#FF3358] to-[#FF4FD8] mix-blend-normal opacity-5 dark:opacity-[0.15] blur-[60px]" />
      <div className="contents dark:hidden">
        <Image
          alt="Playground Logo"
          src={`https://chat.sapienslaboratories.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F85CA3CED-D66F-41BC-A48B-4C2323FB8A9F.1d48b05f.gif&w=256&q=75`}
          width={120}
          height={120}
          loader={myLoader}
        />
      </div>
      <div className="dark:contents hidden">
        <Image
          alt="Playground Logo"
          src={`https://chat.sapienslaboratories.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F85CA3CED-D66F-41BC-A48B-4C2323FB8A9F.1d48b05f.gif&w=256&q=75`}
          width={120}
          height={120}
          loader={myLoader}
        />
      </div>
    </div>
  );
}
