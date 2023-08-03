import Image from 'next/image';

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

export function Turborepo() {
  return (
    <div className="relative w-24 h-24">
      <div className="pointer-events-none absolute w-[261px] h-[261px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-[#FF3358] to-[#FF4FD8] mix-blend-normal opacity-5 dark:opacity-[0.15] blur-[60px]" />
      <div className="contents dark:hidden">
        <Image
          alt="Turborepo Logo"
          src={`https://pinecone-vercel-psnado15u-sapiens-ia.vercel.app/_next/static/media/2B31ECF9-94E7-4DB4-BA6D-B77B03710154.b0bb9161.png`}
          width={120}
          height={120}
          loader={myLoader}
        />
      </div>
      <div className="dark:contents hidden">
        <Image
          alt="Turborepo Logo"
          src={`https://pinecone-vercel-psnado15u-sapiens-ia.vercel.app/_next/static/media/2B31ECF9-94E7-4DB4-BA6D-B77B03710154.b0bb9161.png`}
          width={120}
          height={120}
          loader={myLoader}
        />
      </div>
    </div>
  );
}
