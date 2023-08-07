import { REPO_HOME_FEATURES } from "../../../content/features";
import { FadeIn } from "../home-shared/FadeIn";
import { FeaturesBento } from "../home-shared/FeaturesBento";

export function RepoFeatures() {
  return (
    <FadeIn className="py-16 md:py-24 lg:py-32">
      <FeaturesBento
        header="Porque Sapiens?"
        body="Porque nuestro objetivo es construir mas que solo robots o modelos de lenguaje. Estamos comprometidos a crear y entrenar inteligencias artificiales que piensen por si mismas."
        features={REPO_HOME_FEATURES}
      />
    </FadeIn>
  );
}
