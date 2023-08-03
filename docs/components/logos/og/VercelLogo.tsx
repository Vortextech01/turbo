const VercelLogo = ({
  src = "https://raw.githubusercontent.com/Vortextech01/odyssey-theme/main/theme/public/4A4C05D6-7CA8-41D8-9A60-38567567E80B.png",
  height = 20,
}: {
  src?: string;
  height?: number;
}) => (
  <img src={src} height={height} alt="Vercel Logo" />
);

export default VercelLogo;
