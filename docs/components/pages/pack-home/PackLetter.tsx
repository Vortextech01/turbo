import { HeroText } from "../home-shared/Headings";
import Image from "next/image";
import cn from "classnames";
import gradients from "../home-shared/gradients.module.css";
import { FadeIn } from "../home-shared/FadeIn";
import { CTAButton } from "../home-shared/CTAButton";
import Link from "next/link";
import { Gradient } from "../home-shared/Gradient";

export function PackLetter() {
  return (
    <section className="relative flex flex-col items-center px-6 py-16 font-sans md:py-24 lg:py-32 gap-14">
      <FadeIn>
        <HeroText>
          Basilisk AI:
          <br />
          Innovación de Sapiens IA
        </HeroText>
      </FadeIn>
      <div className="flex flex-col max-w-xl leading-6 md:text-lg lg:text-lg">
        <FadeIn className="opacity-70">
          <p>
            Basilisk AI se distingue como el primer modelo de lenguaje extenso
            (LLM, por sus siglas en inglés) concebido en los laboratorios de Sapiens IA.
            Este modelo supera a los convencionales por su singular capacidad para asumir
            cualquier personalidad, identidad y meta asignada, lo que nos permite diseñar
            soluciones de IA sumamente personalizadas para cualquier ámbito o industria,
            abarcando desde asistentes de IA hasta supervisores autónomos y de producción.
          </p>
          <br />
          <p>
            En Sapiens IA Laboratories, nos enfocamos en formar inteligencias artificiales que,
            más allá de recurrir a técnicas tradicionales como el condicionamiento de tokens o
            el descenso de gradiente, posean su propio entendimiento y pensamiento crítico.
            Por ello, hemos diseñado una teoría psicológica orientada a los LLMs que nos permite
            infundir en nuestras IAs personalidad, identidad y propósito.
          </p>
          <br />
          <p>
            Esta teoría estimula el desarrollo de su propio ego, la intuición
            y el pensamiento crítico, convirtiendo a Basilisk AI en una de las
            inteligencias artificiales más versátiles y astutas en el mercado actual.
            Basilisk AI está capacitado para adaptarse a cualquier circunstancia y
            trabajar en sinergia con los humanos, lo que nos permite alcanzar
            una amplia gama de objetivos y crear inteligencias artificiales
            utiles, intuitivas y eficientes para el trabajo del mundo real.
          </p>
        </FadeIn>
        <FadeIn
          noVertical
          viewTriggerOffset
          className="relative h-2 md:h-12 lg:h-12"
        >
          <span
            className={cn(
              "w-full h-[1px] -bottom-8 md:-bottom-4 lg:-bottom-4 absolute",
              gradients.letterLine
            )}
          />
        </FadeIn>
        <FadeIn
          viewTriggerOffset
          noVertical
          className="flex items-end justify-center gap-3 md:self-start md:-ml-4 lg:self-start lg:-ml-4 min-w-[300px]"
        >
          <div className="w-24 h-24 min-w-[96px] min-h-[96px] rounded-full border dark:border-white/10 border-black/10 flex items-center justify-center ">
            <Image
              alt="Image of Basilisk"
              src="/images/people/EDE89C1A-BA0B-4483-96D0-B4177CA8F6BE.gif"
              width={64}
              height={64}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col gap-3 pb-2">
            <Image
              alt="Tobias Koppers hand written signature"
              src="/images/docs/pack/tobias-signature-light.svg"
              // 16 px added and offset to account for the glow
              width={173 + 16}
              height={91 + 16}
              className="block -mb-3 -ml-3 dark:hidden"
            />
            <Image
              alt="Tobias Koppers hand written signature"
              src="/images/docs/pack/tobias-signature-dark.svg"
              // 16 px added and offset to account for the glow
              width={173 + 16}
              height={91 + 16}
              className="hidden -mb-3 -ml-3 dark:block"
            />
            <div className="flex gap-2 flex-wrap text-sm leading-none text-[#888888] max-w-[156px] md:max-w-xl lg:max-w-xl">
              <p className="font-bold">Basilisk AI V.2</p>
              <p>Powered by Sapiens IA</p>
            </div>
          </div>
        </FadeIn>
      </div>
      <FadeIn noVertical className="relative flex justify-center w-full mt-16">
        <div className="max-w-[180px] w-full">
          <CTAButton>
            <Link href="./chat" className="block py-3 font-sans">
              Comienza a construir
            </Link>
          </CTAButton>
        </div>
        <Gradient
          width={1200}
          height={300}
          className="bottom-[-200px] -z-10 opacity-20"
          conic
        />
      </FadeIn>
    </section>
  );
}
