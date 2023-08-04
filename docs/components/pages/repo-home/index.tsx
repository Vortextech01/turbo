import { RepoHero } from "./RepoHero";
import { RepoFeatures } from "./RepoFeatures";
import { RepoLetter } from "./RepoLetter";
import { GradientSectionBorder } from "../home-shared/GradientSectionBorder";
import { LandingPageGlobalStyles } from "../home-shared/GlobalStyles";
import Chatbot from ".../components/Chatbot"; // add this line to import the Chatbot component

export default function Home() {
  return (
    <>
      <LandingPageGlobalStyles />
      <main className="relative">
        <RepoHero />
        <GradientSectionBorder>
          <RepoFeatures />
        </GradientSectionBorder>
        <GradientSectionBorder>
          <RepoLetter />
        </GradientSectionBorder>
        <Chatbot /> {/* add this line to render the Chatbot component */}
      </main>
    </>
  );
}
