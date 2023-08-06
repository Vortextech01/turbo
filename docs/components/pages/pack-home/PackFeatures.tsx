import { PACK_HOME_FEATURES } from "../../../content/features";
import { FeaturesBento } from "../home-shared/FeaturesBento";

export function PackFeatures() {
  return (
    <FeaturesBento
      header="¿Por qué elegir Basilisk AI?"
      body="Basilisk AI redefine la asistencia inteligente. Con su flexibilidad única, permite una personalización a detalle en aspectos como la memoria y la identidad. Su facilidad para ser entrenado transforma la experiencia de crear tu propio asistente de IA, haciendo posible que cualquier individuo o empresa pueda tener su propio Basilisk personalizado. Te ofrecemos la oportunidad de crear una inteligencia artificial que aprende de ti, entrenada por ti, personalizada por ti y trabajando para ti."
      features={PACK_HOME_FEATURES}
    />
  );
}
